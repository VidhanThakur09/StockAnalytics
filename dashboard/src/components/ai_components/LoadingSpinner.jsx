import React from 'react';

export const LoadingSpinner = ({ size = 'md', color = 'analyzer-text-primary' }) => {
  let spinnerClass = "analyzer-spinner";
  let style = {};

  if (size === 'sm') {
    style = { width: '1.5rem', height: '1.5rem', borderWidth: '3px' }; // Smaller spinner
  } else if (size === 'lg') {
    style = { width: '3rem', height: '3rem', borderWidth: '5px' }; // Larger spinner
  }
  // Default (md) uses styles from analyzer-spinner directly

  return (
    <div className="analyzer-d-flex analyzer-justify-content-center analyzer-align-items-center">
      <div className={`${spinnerClass} ${color}`} style={style} role="status">  
      </div>
      <span className="analyzer-visually-hidden" style={{paddingLeft:"1rem"}}>Loading...</span>
    </div>
  );
};
