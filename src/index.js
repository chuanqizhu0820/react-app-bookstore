import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Books from './components/books';
import Categories from './components/categories';

import './css/index.css';

function App() {
  return (
    <Router>
      <nav id="NavItems">
        <div className="Bookstore-CMS">
          Bookstore CMS
        </div>
        <div className="BOOKS">
          <Link to="/">BOOKS</Link>
        </div>
        <div className="CATEGORIES">
          <Link to="/categories">CATEGORIES</Link>
        </div>
      </nav>

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
