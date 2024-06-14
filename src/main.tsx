import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AuthProvider from './context/AuthContext.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'
// import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <AuthProvider>
    <App />
    </AuthProvider>
    </Provider>
  </React.StrictMode>,
)
