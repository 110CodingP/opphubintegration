import React from 'react';

export default function OpportunityCard({ title, company, tag }) {
  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h3>{title}</h3>
          <p>{company}</p>
        </div>
        {/* Grey box placeholder for company logo */}
        <div style={{ width: 40, height: 40, background: '#e0e0e0', borderRadius: '8px' }}></div>
      </div>
      <span className="tag">{tag}</span>
    </div>
  );
}