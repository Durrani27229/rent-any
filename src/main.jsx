import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import './lang/i18.js'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <React.Suspense fallback={'loading.....'}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.Suspense>
)
