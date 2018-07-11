import * as React from 'react';
import * as ReactDOM from 'react-dom';
// Redux
import { Provider } from 'react-redux';

import store from './reducers';

import App from './App';

// Styles
import './index.css';
import 'src/stylesheets/app.css';
import 'src/stylesheets/category.css';
import 'src/stylesheets/notes.css';
import 'src/stylesheets/todoForm.css';
import 'src/stylesheets/settings.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
