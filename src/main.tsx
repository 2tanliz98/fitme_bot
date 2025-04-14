// import { StrictMode } from 'react' //TO DO: revisar en strickmode antes de prod, ¿ es útil?
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
    <App />
)
