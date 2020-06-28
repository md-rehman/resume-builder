import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppContextProvider } from './store/context/AppContext';
import { ResumeJSONProvider } from './store/context/ResumeJSON';

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <ResumeJSONProvider>
        <App />
      </ResumeJSONProvider>
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
