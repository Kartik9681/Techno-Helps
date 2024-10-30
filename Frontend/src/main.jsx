import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TokenProvoder } from './context/TokenContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TokenProvoder>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </TokenProvoder>,
)
