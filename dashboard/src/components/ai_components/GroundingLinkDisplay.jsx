import React from 'react';

export const GroundingLinkDisplay = ({ links }) => {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <div className="analyzer-grounding-links-container">
      <ul className="analyzer-list-unstyled analyzer-mb-0">
        {links.map((link, index) => (
          <li key={index} className="analyzer-mb-1">
            <a
              href={link.uri}
              target="_blank"
              rel="noopener noreferrer"
              className="analyzer-text-info analyzer-text-decoration-underline"
              title={link.uri}
            >
              {link.title || link.uri}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
