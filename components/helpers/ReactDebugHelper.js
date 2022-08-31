import React from 'react';

export const ReactDebugHelper = props =>
  <div style={{ margin: '1rem 0' }}>
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '.65rem',
        padding: '.5rem',
      }}
    >
      {JSON.stringify(props, null, 2)}
    </pre>
  </div>;