import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContaxt from './Context/AuthContaxt.jsx'
import TaskContaxt from './Context/TaskContaxt.jsx'
localStorage.clear()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContaxt>    
        <App />
    </AuthContaxt>
  </StrictMode>,
)
