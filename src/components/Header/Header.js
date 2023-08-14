import React,{ useState} from 'react'
import "./header.css"
import logo from "../../images/logo.png";
import { NavLink, useLocation } from 'react-router-dom'
import { useSelector } from "react-redux";

const Header = ({name}) => {
  const [isActive, setActive] = useState("false");
  // const {total_item} = useCartcontext()
  const {pathname}=useLocation()
  const ToggleClass = () => {
    setActive(!isActive); 
  };
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className='navbar'>

  <NavLink to="/" className="nav-lin">
<div className='title'>

<img src= {logo} alt='logo'/>
  <h2>  Book<span className='rad'><b>House</b></span></h2>
</div>
  </NavLink>
  <ul>

   <>
     <div className={ isActive ? "nav": "toggle"}>
<NavLink to = "/categories/Books" className={(pathname === '/categories/Books') ? 'active   lin' : 'nav-link lin'}  ><li>Books</li></NavLink>
<NavLink to = "/categories/Stationary" className={(pathname === '/categories/Stationary') ? 'active   lin' : 'nav-link lin'}  ><li>Stationary</li></NavLink>
<NavLink to = "/categories/Bags" className={(pathname === '/categories/Bags') ? 'active   lin' : 'nav-link lin'}  ><li>Bags</li></NavLink>
<NavLink to = "/shop" className={(pathname === '/shop') ? 'active   lin' : 'nav-link lin'}  ><li>Shop</li></NavLink>
<NavLink to = "/search" className='nav-link search'  ><li title='search'><i className="fa-solid fa-search"></i></li></NavLink>

<NavLink to = "/cart"><li className='cart car'><i className="fa-solid fa-cart-shopping"></i> <p className='cart-no'>{cartItems?.length}</p> </li></NavLink>

  
      </div>
      <div className='res-div'>

      <NavLink to = "/search" className='nav-link res-search '  ><li title='search'><i className="fa-solid fa-search"></i></li></NavLink>
      <NavLink to = "/cart"><li className='cart res-cart'><i className="fa-solid fa-cart-shopping res-cart"></i> <p className='cart-no'>{cartItems?.length}</p> </li></NavLink>
      </div>
      <div id="menu"  className={ isActive ? "fas fa-bars": "fas fa-times"} onClick={ToggleClass}></div>

   </>
      </ul> 
    
   </div>
  )
  
}

export default Header