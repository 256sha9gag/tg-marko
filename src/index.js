import React from 'react';
import ReactDOM from 'react-dom';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import content from './locales/index';
import './index.css';
import App from './App';

i18n
  .use(initReactI18next)
  .init({
    resources: content,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

