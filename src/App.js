import Books from "./components/books";
import Categories from "./components/categories";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
      <Router>
      <div>
        <Link to="/">Books</Link>
      </div>
      <div>
        <Link to="/categories">Categories</Link>
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
