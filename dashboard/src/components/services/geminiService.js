import { GEMINI_MODEL_NAME } from '../constants';

export const analyzeStockWithGemini = async (
  ai,
  stockSymbol,
  userPrompt
) => {
  const fullPrompt = `Analyze the stock ${stockSymbol}. Specifically: "${userPrompt}". Provide comprehensive insights on its current market standing, potential future trends, key financial indicators, and relevant risk factors. Base your analysis on the most current market data and news available. Structure your response clearly.`;

  try {
    const response = await ai.models.generateContent({
      model: GEMINI_MODEL_NAME,
      contents: fullPrompt,
      config: {
        tools: [{ googleSearch: {} }],
      },
    });

    const text = response.text;
    const groundingMetadata = response.candidates?.[0]?.groundingMetadata;
    
    return { text, groundingMetadata };

  } catch (error) {
    console.error("Error in analyzeStockWithGemini:", error);
    if (error instanceof Error) {
        throw new Error(`Gemini API request failed: ${error.message}`);
    }
    throw new Error("An unknown error occurred while communicating with the Gemini API.");
  }
};

export const createChatSession = (ai, modelName, systemInstruction) => {
  return ai.chats.create({
    model: modelName,
    config: {
      systemInstruction: systemInstruction,
    },
  });
};

export async function* streamChatResponse(
  chat,
  message
) {
  try {
    const stream = await chat.sendMessageStream({ message });
    for await (const chunk of stream) {
        if (typeof chunk.text === 'string') {
            yield chunk;
        } else {
            console.warn("Received chat chunk without text:", chunk);
        }
    }
  } catch (error) {
    console.error("Error in streamChatResponse:", error);
    if (error instanceof Error) {
        throw new Error(`Gemini chat streaming failed: ${error.message}`);
    }
    throw new Error("An unknown error occurred during chat streaming.");
  }
}