import './App.css';
// import Navbar from './Components/Navbar/Navbar'
// import Footer from './Components/Footer/Footer'
import Principal from './Views/Principal/Principal';
import Categories from './Components/ categories/ Categories.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from './Products'

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <div className="App">
//         <Principal/>
//       </div>
//       <footer>
//         <Footer/>
//       </footer>
//       <Categories/>
//       <Products/>
//     </div>
//   );
// }

// export default App;

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



    // <>
    //   <div className="App">
    //     <Principal/>
    //   </div>
     
    //   <Categories/>
    //   <Products/>
    // </>
  );
}

export default App;

