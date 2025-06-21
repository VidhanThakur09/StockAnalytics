import React from 'react';
import { LoadingSpinner } from './LoadingSpinner'; // Assuming LoadingSpinner is also updated with analyzer prefix

export const ChatMessageDisplay = ({ message }) => {
  const isUser = message.sender === 'user';
  
  let bubbleClasses = "analyzer-chat-message-bubble ";
  
  if (isUser) {
    bubbleClasses += "analyzer-user-message";
  } else if (message.type === 'error') {
    bubbleClasses += "analyzer-error-message";
  } else if (message.type === 'analysis') {
    bubbleClasses += "analyzer-analysis-message";
  } 
  else { // AI chat message
    bubbleClasses += "analyzer-ai-message";
  }

  const senderName = isUser ? 'You' : (message.type === 'analysis' ? 'Initial Analysis' : 'Analyst AI');

  const formatMessage = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, index) => {
      if (part.match(urlRegex)) {
        const linkClass = (isUser || message.type === 'error') ? "analyzer-message-link analyzer-text-light" : "analyzer-message-link analyzer-text-primary";
        return <a key={index} href={part} target="_blank" rel="noopener noreferrer" className={linkClass}>{part}</a>;
      }
      return part;
    });
  };
  
  return (
    <div className={bubbleClasses}>
      <p className="analyzer-sender-name" style={{color:senderName === 'Initial Analysis'?"black":""}}>{senderName}</p>
      <div className="analyzer-message-text">
        {formatMessage(message.message)}
        {message.isLoading && <span className="analyzer-me-2 analyzer-d-inline-block"><LoadingSpinner size="sm" /></span>}
      </div>
    </div>
  );
};
