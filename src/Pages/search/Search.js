import React,{useState, useEffect} from 'react'
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';
import { AiOutlineSearch } from "react-icons/ai";
import { items } from '../../data/data';
import { NavLink } from 'react-router-dom';
import "./search.css"
import"../../components/cards/card.css"
import { filterData } from '../../data/utilis';
function Search() {
    const [item, setitem] = useState([]);
    const [filteritem, setfilteritem] = useState([]);
    const [searchText, setSearchText] = useState("");



useEffect(() => {
  setitem(items)
  
}, [])


const onTextChange=(event)=>{
 
        setSearchText(event.target.value)
        const data = filterData(searchText, item);
        // update the state - restaurants
        setfilteritem(data);

  
}



    return (
    
        <div>
              <Header />
              <div className='find'>
                <input type="text" placeholder="search ur product 😄 " className="searchfind"  value={searchText} onChange={onTextChange}/>
                <AiOutlineSearch className='searchicon'  />
              </div>
          
<div className='menu'>
{filteritem.length?

filteritem.map(item=>{
return(

    <NavLink to={`/shopitm/${item._id}`} className="card-link"  key={item._id}>

<div className="box">
   <img src={`/images/${item.image}`} alt={item.name}/>
   <h4>{item.name}</h4>
   <span className='card-prices'>
       <p>{item.price}₹ </p>
       {/* <button className='btns' title= "Add To Cart" onClick={()=> setcart([...cart,user])}  {...toast.success("items added sucess")} >
         <i class="fa-solid fa-cart-shopping"></i></button> */}

   </span>
 </div>

 </NavLink>
)
})

:<h1 className='placeh'>No Product Found 😟</h1>
}
</div>
            <Footer/>
        </div>
    )
}

export default Search