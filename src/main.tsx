import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RouteComponent } from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <div className="container-fluid w-100 h-100">
        <RouteComponent />

      </div>

    </BrowserRouter>
  </React.StrictMode>,
)
