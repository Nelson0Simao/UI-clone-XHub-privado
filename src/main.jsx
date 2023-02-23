import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './Routes'
import 'reset-css';
import './style/GlobalStyle.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
)