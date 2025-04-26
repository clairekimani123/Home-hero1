import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
er
import App from './App.jsx'
import './index.css';
import { AuthProvider } from './firebase.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <App />
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
