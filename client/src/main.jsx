import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// thư viện JS 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// CSS 
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
