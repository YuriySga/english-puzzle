import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { store } from './store/configureStore'
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import { Router, Route, IndexRoute } from 'react-router'
import { createBrowserHistory } from "history";

const history = createBrowserHistory();


/* ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister(); */

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        {/* <App /> */}
        {/* <IndexRoute component={Home} />
        <Route path="admin" component={Admin} />
        <Route path="genre" component={Genre} /> */}
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();