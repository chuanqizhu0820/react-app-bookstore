import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Books from './components/books';
import Categories from './components/categories';

import './index.css';

function App() {
  return (
    <Router>
      <div id="navlinks">
        <div className="nav-link">
          <Link to="/">Books</Link>
        </div>
        <div className="nav-link">
          <Link to="/categories">Categories</Link>
        </div>
      </div>

      <Switch>
        <Route exact path="/">
          <Books />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Router>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
