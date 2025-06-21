import React from 'react';

export const AnalysisDisplay = ({ analysis }) => {
  const paragraphs = analysis.split('\n').filter(p => p.trim() !== '');

  return (
    <div className="analyzer-mt-4 analyzer-p-4 analyzer-analysis-container analyzer-rounded analyzer-shadow">
      <h2 className="analyzer-fs-4 analyzer-fw-semibold analyzer-mb-3 analyzer-text-success">AI Analysis</h2>
      <div className="analyzer-text-light" style={{lineHeight: 1.7}}>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="analyzer-mb-2">{paragraph}</p>
        ))}
      </div>
    </div>
  );
};
