import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Principal from './Views/Principal/Principal';
import Categories from './Components/ categories/ Categories.js'

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Principal/>
      </div>
      <footer>
        <Footer/>
      </footer>
      <Categories/>
    </div>
  );
}

export default App;
