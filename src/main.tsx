import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { ReactBricks } from 'react-bricks/frontend'
import App from './App.tsx'
import './index.css'
import './i18n'
import config from './react-bricks/config'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <ReactBricks {...config}>
        <App />
      </ReactBricks>
    </HelmetProvider>
  </StrictMode>,
)