import React from 'react'
// import img from "../../images/book.png"
// import img from "../../images/bag.jpg"
// import img from "../../images/notebook.png"
// import img from "../../images/stationary.png"
import { NavLink } from 'react-router-dom';
import "./card.css"
import { categories } from '../../data/data';


const Catrgory = () => {

  
  return (
 <>
{/* {{#if (isdefined food)}} */}
{/* {{#each food.latest}} */}
{/* <a href="/recipe/{{_id}}"> */}

{categories.map((cate)=>{
return (

<NavLink to ={`/categories/${cate.name}`} className="category-link" key={cate.name}>
  <div className="box" id="box-cate" >
        <img src={`/images/${cate.image}`} alt={cate.name}/>
        <h4>{cate.name}</h4>
       
      </div>
     </NavLink>
    )})}
 </>
  )
}

export default Catrgory