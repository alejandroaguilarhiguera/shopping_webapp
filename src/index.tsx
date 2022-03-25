import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from 'store';
import { SENTRY_DNS, SENTRY_ENABLED } from 'config';

Sentry.init({
  // FIXME: bug with cors with sentry is enabled
  enabled: ['true', '1'].includes(SENTRY_ENABLED || ''),
  dsn: SENTRY_DNS,
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
