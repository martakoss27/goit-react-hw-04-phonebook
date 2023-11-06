import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';

import { ContactsProvider } from 'components/hooks/ContactsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContactsProvider>
      <App />
    </ContactsProvider>
  </React.StrictMode>
);
