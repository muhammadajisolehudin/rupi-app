import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'
import { RouteList } from './routes/RouteList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouteList />
  </React.StrictMode>,
)
