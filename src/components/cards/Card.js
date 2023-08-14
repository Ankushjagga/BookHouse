import React from 'react'
import "./card.css";
import { NavLink } from 'react-router-dom';
import { items } from '../../data/data';
const Card = () => {

  const pencil=  items.filter((ele)=>{
    return    ele.category==="Pencil" ;
     }) 
  return (
    <>
 
{pencil.map(user=>{
  return (
<NavLink to={`/shopitm/${user._id}`} className="card-link"  key={user._id}>

     <div className="box">
        <img src={`/images/${user.image}`} alt={user.name}/>
        <h4>{user.name}</h4>
        <span className='card-prices'>
            <p>{user.price}₹ </p>
            {/* <button className='btns' title= "Add To Cart" onClick={()=> setcart([...cart,user])}  {...toast.success("items added sucess")} >
              <i class="fa-solid fa-cart-shopping"></i></button> */}

        </span>
      </div>
      </NavLink>
          )

        })} 
    </>
  )
}

export default Card