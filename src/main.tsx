import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './features/auth/AuthContext';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App';
createRoot(document.getElementById('root')!).render(
<StrictMode>
<BrowserRouter>
<AuthProvider>
<App />
</AuthProvider>
</BrowserRouter>
</StrictMode>
);
