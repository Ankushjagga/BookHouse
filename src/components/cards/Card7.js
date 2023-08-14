import React from 'react'
import "./card.css";
import { NavLink } from 'react-router-dom';
import { items } from '../../data/data';

const Card7 = () => {

  const Notebook=  items.filter((ele)=>{
    return    ele.category==="Notebooks" ;
     }) 
  return (
    <>
 
{Notebook.map(user=>{
  return (
<NavLink to={`/shopitm/${user._id}`} className="card-link" key={user._id}>

     <div className="box" >
        <img src={`/images/${user.image}`} alt={user.name}/>
        <h4>{user.name}</h4>
        <span className='card-prices'>
            <p>{user.price}₹</p>
            {/* <button className='btns' title= "Add To Cart"><i class="fa-solid fa-cart-shopping"></i></button> */}

        </span>
      </div>
      </NavLink>
          )

        })} 
    </>
  )
}

export default Card7