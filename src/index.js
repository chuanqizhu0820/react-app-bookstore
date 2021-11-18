import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import user from './icons8-user-50.png';
import store from './redux/configureStore';
import Books from './components/books';
import Categories from './components/categories';

import './css/index.css';

function App() {
  return (
    <Router>
      <header>
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
          <div id="avatar-div">
            <img src={user} alt="user pic" id="avatar" />
          </div>
        </nav>
      </header>
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
