import './App.css';
import Home from './Pages/Home/Home';
import { Route ,Routes } from 'react-router-dom';
import Shop from './Pages/Shop/Shop';
import Category from './Pages/category/category';
import Shopitem from './Pages/ShopItems/Shopitem';
import Explorecategories from "./Pages/category/Explorecategories"
import Explorelatest from './Pages/ExploreLatest/Explorelatest';
import Cartpage from './Pages/Cart/Cartpage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Error from './Pages/Error/Error';
import Search from './Pages/search/Search';
 
function App() {
  

  return (

    <>
 
    <Routes>
<Route exact path="/" element={<Home/>}/>
<Route exact path="/shop" element={<Shop/>}/>
<Route exact path="/cart" element={<Cartpage/>}/>
<Route exact path="/category" element={<Category/>}/>
<Route exact path="/shopitm/:id" element={<Shopitem/>}/>
<Route exact path="/categories/:id" element={<Explorecategories/>}/>
<Route exact path="/exploreLatest" element={<Explorelatest/>}/>
<Route exact path="/search" element={<Search/>}/>
<Route exact  path ="/*"  element={<Error/>} ></Route>

    </Routes>

<ToastContainer/>
    </>
  );
}

export default App;
