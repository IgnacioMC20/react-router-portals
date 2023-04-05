import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { RouteComponent } from './routes'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './reducers/rootReducer'

const store = createStore(rootReducer)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div className="container-fluid w-100 h-100">
          <RouteComponent />
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
