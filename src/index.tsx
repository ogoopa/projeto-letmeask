import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './services/firebase'

/* o método render do ReactDOM é utilizado uma única vez na aplicação e tem como propósito renderizar alguma coisa dentro do elemento no HTML */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);