import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Router } from './router';
import './index.css';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <Router />
    </StrictMode>
  );
} else {
  console.error('Failed to find the root element');
}