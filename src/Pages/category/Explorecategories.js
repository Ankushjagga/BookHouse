import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/footer/Footer'
import { NavLink , useParams } from 'react-router-dom';
import "./category.css"
import { items } from '../../data/data';
const Explorecategories = () => {
// const truncate = (str)=>{

//   return str.length > 10 ? str.substring(0, 50) + "..." : str;
// }
let { id } = useParams();

  const data=  items.filter((ele)=>{
    return  (
        ele.category===id 
        )  
        
     }) 
  return (
    
    <>
    <Header/>
    <span className="link-rec">
    <ol style={{display: "flex",margin:"1rem", alignItems:"center"}}> 
        <li ><NavLink to ="/"style={{textDecoration:"underline", marginRight:".3rem"}} className="hov">Home </NavLink> / </li>
        <li style={{opacity: .6, marginLeft:".3rem"}}>Explore Categories/{id}</li>
    </ol>
</span>
<div className='menu'>
    {data.length?
    data.map((data)=>{
        return (
<NavLink to={`/shopitm/${data._id}`} className="card-link" key={data._id}>

            <div className="box" >
        <img src={`/images/${data.image}`} alt={data.name}/>
        <h4>{data.name}</h4>
        <span className='card-prices'>
            <p>{data.price} ₹</p>
            {/* <button className='btns' title= "Add To Cart"><i class="fa-solid fa-cart-shopping"></i></button> */}

        </span>
</div>
</NavLink>
            )
        })
        : <h1 className='nodata'>No Data Found 😟</h1>}
        </div>
    <Footer/>
    </>
  )
}

export default Explorecategories