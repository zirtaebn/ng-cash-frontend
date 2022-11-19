import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// components 
import App from './App';

// utilities
import { AuthProvider } from './contexts/Auth/AuthProvider';

// styles
import { GlobalStyle } from './index.styles';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(

  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);


