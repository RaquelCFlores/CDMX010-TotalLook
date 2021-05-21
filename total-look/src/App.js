import './App.css';
import Principal from './Views/Principal/Principal';
import Categories from './Components/ categories/ Categories.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from './Products'

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/products">
            <Products/>
          </Route>
          <Route path="/promotions">
            {/* <Promotions/> */}
          </Route>
          <Route path="/categories">
            <Categories/>
          </Route>
          <Route exact path="/">
            <Principal/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

