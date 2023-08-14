import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/footer/Footer'
import { NavLink } from 'react-router-dom'
import Card from '../../components/cards/Card'
const category = () => {
  return (
 <>
 <Header/>
 <span className="link-rec">
    <ol style={{display: "flex",margin:"1rem", alignItems:"center"}}> 
        <li ><NavLink to ="/"style={{textDecoration:"underline", marginRight:".3rem"}} className="hov">Home </NavLink> / </li>
        <li style={{opacity: .6, marginLeft:".3rem"}}>Explore Categories</li>
    </ol>
</span>
   <h1 className='categories'><span className='sp'>  Boo<span className='rad'>ks</span>  </span></h1>
   <div className='card-price menu'>
        <Card/>
      
      
        </div>
 <Footer/>
 </>
  )
}

export default category