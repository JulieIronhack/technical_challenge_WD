import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <StyledEngineProvider injectFirst>
  <BrowserRouter>
        <App />
  </BrowserRouter>
  </StyledEngineProvider>
</React.StrictMode>
)
