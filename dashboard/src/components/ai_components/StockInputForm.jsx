import React, { useState, useEffect } from 'react';

export const StockInputForm = ({
  onSubmit,
  isLoading,
  initialStockSymbol = "AAPL",
  initialPromptText = "What are the Q3 growth prospects and main challenges for this stock?",
  onStockSymbolChange,
  onPromptChange
}) => {
  // Use internal state for the input values, initialized with props
  const [currentStockSymbol, setCurrentStockSymbol] = useState(initialStockSymbol);
  const [currentPrompt, setCurrentPrompt] = useState(initialPromptText);

  // Update internal state when initial props change (e.g., when a new analysis starts)
  // This ensures the form resets or pre-fills correctly if parent state changes
  useEffect(() => {
    setCurrentStockSymbol(initialStockSymbol);
  }, [initialStockSymbol]);

  useEffect(() => {
    setCurrentPrompt(initialPromptText);
  }, [initialPromptText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replaced alert() with console.warn() as alert() is not allowed in Canvas.
    // In a production app, you'd show a user-friendly modal or inline error message.
    if (!currentStockSymbol.trim() || !currentPrompt.trim()) {
      console.warn("Please enter both stock symbol and your query.");
      return;
    }
    onSubmit(currentStockSymbol, currentPrompt);
  };

  return (
    <form onSubmit={handleSubmit} className="analyzer-stock-input-form">
      {/* Stock Symbol Input */}
      {/* Replaced data-mdb-input-init, form-outline, mb-4 with analyzer-form-group */}
      <div className="analyzer-form-group">
        <input
          type="text"
          id="stockSymbol"
          value={currentStockSymbol}
          onChange={(e) => {
            const val = e.target.value.toUpperCase(); // Ensure symbol is uppercase
            setCurrentStockSymbol(val);
            if (onStockSymbolChange) {
              onStockSymbolChange(val); // Propagate change up to parent if callback exists
            }
          }}
          placeholder="e.g., AAPL, GOOGL" // Placeholder is crucial for the floating label effect
          className="analyzer-form-control" // Replaced form-control with analyzer-form-control
          disabled={isLoading}
          aria-label="Stock Symbol"
        />
        {/* Replaced form-label with analyzer-form-label */}
        <label htmlFor="stockSymbol" className="analyzer-form-label">
          Stock Symbol
        </label>
      </div>

      {/* Your Query Textarea */}
      {/* Replaced data-mdb-input-init, form-outline, mb-4 with analyzer-form-group */}
      <div className="analyzer-form-group">
        <textarea
          id="promptText"
          value={currentPrompt}
          onChange={(e) => {
            const val = e.target.value;
            setCurrentPrompt(val);
            if (onPromptChange) {
              onPromptChange(val); // Propagate change up to parent if callback exists
            }
          }}
          rows={3}
          placeholder="e.g., Analyze recent performance and predict next quarter's outlook." // Placeholder for floating label
          className="analyzer-form-control analyzer-textarea" // Replaced form-control with analyzer-form-control and added analyzer-textarea
          disabled={isLoading}
          aria-label="Your Query"
        ></textarea>
        {/* Replaced form-label with analyzer-form-label */}
        <label htmlFor="promptText" className="analyzer-form-label">
          Your Query
        </label>
      </div>

      {/* Submit Button */}
      {/* Added analyzer-d-grid for button full width behavior */}
      <div className="analyzer-d-grid">
        <button
          type="submit"
          disabled={isLoading}
          className="analyzer-btn analyzer-btn-primary" // Replaced btn btn-primary btn-block with analyzer-btn analyzer-btn-primary
        >
          {isLoading ? (
            <>
              {/* Added custom spinner classes */}
              <span className="analyzer-button-spinner analyzer-me-2" role="status" aria-hidden="true"></span>
              Analyzing...
            </>
          ) : (
            'Get Analysis'
          )}
        </button>
      </div>
    </form>
  );
};
