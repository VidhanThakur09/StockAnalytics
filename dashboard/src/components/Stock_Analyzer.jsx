import React, { useState, useCallback, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { StockInputForm } from './ai_components/StockInputForm';
import { AnalysisDisplay } from './ai_components/AnalysisDisplay';
import { ChatMessageDisplay } from './ai_components/ChatMessageDisplay';
import { ChatInput } from './ai_components/ChatInput';
import { LoadingSpinner } from './ai_components/LoadingSpinner';
import { GroundingLinkDisplay } from './ai_components/GroundingLinkDisplay';
import { GEMINI_MODEL_NAME } from './constants';
import { analyzeStockWithGemini, createChatSession, streamChatResponse } from './services/geminiService';

// Import the new CSS file
import '../Stock_Analyzer.css'; // Adjust the path as necessary based on your project structure

const Stock_Analyzer = () => {
  const [stockSymbol, setStockSymbol] = useState('');
  const [initialPrompt, setInitialPrompt] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [groundingLinks, setGroundingLinks] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const chatSessionRef = useRef(null);
  const ai = useRef(null);

  useEffect(() => {
    // Ensure the API key is loaded from environment variables
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (apiKey) {
      ai.current = new GoogleGenAI({ apiKey });
    } else {
      console.error("API_KEY environment variable not set.");
      setError({ message: "API Key not configured. Please set the VITE_GEMINI_API_KEY environment variable.", type: "config_error" });
    }
  }, []);

  /**
   * Handles the submission of the initial stock analysis request.
   * Fetches analysis from Gemini and initializes a chat session.
   */
  const handleAnalysisSubmit = useCallback(async (symbol, promptText) => {
    if (!ai.current) {
      setError({ message: "Gemini AI client not initialized. Check API key.", type: "config_error" });
      return;
    }
    if (!symbol.trim() || !promptText.trim()) {
      setError({ message: "Stock symbol and prompt cannot be empty.", type: "validation_error" });
      return;
    }

    setIsLoading(true);
    setError(null); // Clear previous errors
    setAnalysisResult(null); // Clear previous analysis
    setGroundingLinks(null); // Clear previous links
    setChatHistory([]); // Clear previous chat history
    chatSessionRef.current = null; // Reset chat session

    try {
      const { text, groundingMetadata } = await analyzeStockWithGemini(ai.current, symbol, promptText);
      setAnalysisResult(text);

      // Extract web links from grounding metadata if available
      const webLinks = groundingMetadata?.groundingChunks
        ?.filter(chunk => chunk.web)
        .map(chunk => chunk.web) || [];
      setGroundingLinks(webLinks.length > 0 ? webLinks : null);

      // Initialize a new chat session with a system instruction
      const systemInstruction = `You are a specialized financial analyst AI. You are discussing the stock ${symbol}. Users will ask questions based on the initial analysis: "${text}". Provide insightful, data-driven answers. Cite sources if possible (though you don't have direct web access beyond initial grounding). Be neutral and objective. Do not give direct financial advice to buy or sell.`;
      chatSessionRef.current = createChatSession(ai.current, GEMINI_MODEL_NAME, systemInstruction);

      // Add the initial analysis as the first AI message in chat history
      setChatHistory([{ sender: 'ai', message: text, type: 'analysis' }]);

    } catch (e) {
      console.error("Analysis error:", e);
      setError({ message: e instanceof Error ? e.message : "Failed to get analysis. Please try again.", type: "api_error" });
    } finally {
      setIsLoading(false);
    }
  }, []);

  /**
   * Handles the submission of a new chat message.
   * Streams the AI's response and updates the chat history.
   */
  const handleChatSubmit = useCallback(async (message) => {
    // Ensure chat session is active and AI client is initialized
    if (!chatSessionRef.current || !ai.current) {
      setError({ message: "Chat session not started. Please perform an analysis first.", type: "chat_error" });
      return;
    }
    if (!message.trim()) return; // Do not send empty messages

    // Add user's message to chat history
    const newUserMessage = { sender: 'user', message, type: 'chat' };
    setChatHistory(prev => [...prev, newUserMessage]);
    setIsLoading(true);
    setError(null); // Clear previous errors

    // Add a placeholder for the AI's response to show loading state
    const aiResponsePlaceholder = { sender: 'ai', message: '', type: 'chat', isLoading: true };
    setChatHistory(prev => [...prev, aiResponsePlaceholder]);

    try {
      let fullResponse = "";
      // Stream the AI's response
      for await (const chunk of streamChatResponse(chatSessionRef.current, message)) {
        fullResponse += chunk.text;
        // Update the placeholder message with streamed chunks
        setChatHistory(prev => prev.map((msg, index) =>
          index === prev.length - 1 ? { ...msg, message: fullResponse, isLoading: true } : msg
        ));
      }
      // Mark the AI message as fully loaded
      setChatHistory(prev => prev.map((msg, index) =>
        index === prev.length - 1 ? { ...msg, message: fullResponse, isLoading: false } : msg
      ));

    } catch (e) {
      console.error("Chat error:", e);
      const errorMessage = e instanceof Error ? e.message : "Failed to get chat response.";
      setError({ message: errorMessage, type: "api_error" });
      // Remove the placeholder and add an error message if streaming fails
      setChatHistory(prev => prev.filter(msg => msg !== aiResponsePlaceholder));
      setChatHistory(prev => [...prev, { sender: 'ai', message: `Error: ${errorMessage}`, type: 'error' }]);
    } finally {
      setIsLoading(false);
      // Ensure the last AI message's loading state is turned off
      setChatHistory(prev => prev.map((msg, index) =>
        (index === prev.length - 1 && msg.sender === 'ai') ? { ...msg, isLoading: false } : msg
      ));
    }
  }, []);

  return (
    <div className="analyzer-app-container">
      {/* Header Section */}
      <header className="analyzer-header">
        <h1 className="analyzer-fw-bold analyzer-text-primary">
          Gemini Stock Analyzer
        </h1>
        <p className="analyzer-text-muted">
          Enter a stock symbol and your query to get AI-powered insights and predictions.
        </p>
      </header>

      {/* Main Content Area */}
      <main className="analyzer-main-card">
        {/* Stock Input Form Component */}
        <StockInputForm
          onSubmit={handleAnalysisSubmit}
          isLoading={isLoading && !analysisResult} // Only show form loading for initial analysis
          initialStockSymbol={stockSymbol}
          initialPromptText={initialPrompt}
          onStockSymbolChange={setStockSymbol}
          onPromptChange={setInitialPrompt}
        />

        {/* Loading Spinner for Initial Analysis */}
        {isLoading && !analysisResult && (
          <div className="analyzer-loading-container">
            <LoadingSpinner />
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className={`analyzer-alert ${error.type === 'api_error' || error.type === 'config_error' ? 'analyzer-alert-danger' : 'analyzer-alert-warning'}`} role="alert">
            <p className="analyzer-fw-semibold">Error:</p>
            <p>{error.message}</p>
          </div>
        )}

        {/* Analysis Result Display */}
        {analysisResult && (
          <div className="analyzer-analysis-section">
            <AnalysisDisplay analysis={analysisResult} />
            {groundingLinks && groundingLinks.length > 0 && (
              <div className="analyzer-sources-section">
                <h3 className="analyzer-fw-semibold analyzer-text-info">Sources & Further Reading:</h3>
                <GroundingLinkDisplay links={groundingLinks} />
              </div>
            )}
          </div>
        )}

        {/* Chat Section */}
        {chatHistory.length > 0 && (
          <div className="analyzer-chat-section">
            <h2 className="analyzer-fw-semibold analyzer-text-success">Chat with Analyst AI</h2>
            <div className="analyzer-chat-container-scroll">
              {chatHistory.map((chat, index) => (
                <div key={index} className="analyzer-chat-message-item">
                   <ChatMessageDisplay message={chat} />
                </div>
              ))}
            </div>
            {/* Chat Input Component */}
            <ChatInput onSubmit={handleChatSubmit} isLoading={isLoading && chatHistory.some(m => m.isLoading === true)} />
          </div>
        )}
      </main>

      {/* Footer Section */}
      <footer className="analyzer-footer">
        <p>Powered by Google Gemini. Financial data and analysis are for informational purposes only. Not financial advice.</p>
      </footer>
    </div>
  );
};

export default Stock_Analyzer;
