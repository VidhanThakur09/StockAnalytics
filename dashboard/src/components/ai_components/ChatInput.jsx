import React, { useState } from 'react';
import { LoadingSpinner } from './LoadingSpinner'; // Assuming LoadingSpinner is also updated with analyzer prefix

export const ChatInput = ({ onSubmit, isLoading }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    onSubmit(message);
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="analyzer-chat-input-form">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask a follow-up question..."
        className="analyzer-chat-input-control"
        disabled={isLoading}
        aria-label="Chat message input"
      />
      <button
        type="submit"
        disabled={isLoading || !message.trim()}
        className="analyzer-chat-send-btn"
      >
        {isLoading ? (
          <div className="analyzer-spinner-sm" role="status">
            <span className="analyzer-visually-hidden">Loading...</span>
          </div>
        ) : "Send"}
      </button>
    </form>
  );
};
