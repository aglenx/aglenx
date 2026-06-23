import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// @ts-ignore
import "@fontsource-variable/fraunces";
// @ts-ignore
import "@fontsource/work-sans/400.css";
// @ts-ignore
import "@fontsource/work-sans/500.css";
// @ts-ignore
import "@fontsource/work-sans/600.css";
// @ts-ignore
import "@fontsource/work-sans/700.css";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
