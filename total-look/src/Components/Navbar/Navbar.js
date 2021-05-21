import logo from '../../assets/logo.png';
import cart from '../../assets/cart.png'
// import Searcher from './Searcher/Searcher'
import './Navbar.css';

const Navbar =()=>{
    return(
        <div className='navbar'>
            <img src={logo} className="logo" alt="logo" />
            {/* <Searcher/> */}
            <img src={cart} className="cart" alt="shoppingCart" />
        </div>
    )
}

export default Navbar;