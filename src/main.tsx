import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from 'react-router-dom'
import RoutesFile from './RoutesFile'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RoutesFile />
  </React.StrictMode>
)
