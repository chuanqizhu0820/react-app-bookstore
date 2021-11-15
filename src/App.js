import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Books from './components/books';
import Categories from './components/categories';
import './App.css';

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

export default App;
