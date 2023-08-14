import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/footer/Footer'
import { NavLink } from 'react-router-dom'
import Card4 from '../../components/cards/Card4'
import Card5 from '../../components/cards/Card5'
import Card6 from '../../components/cards/Card6'
import Card7 from '../../components/cards/Card7'
const Shop = () => {
  return (
   <>
   <Header/>
   <span className="link-rec">
    <ol style={{display: "flex",margin:"1rem", alignItems:"center"}}> 
        <li ><NavLink to ="/"style={{textDecoration:"underline", marginRight:".3rem"}} className="hov">Home </NavLink> / </li>
        <li style={{opacity: .6, marginLeft:".3rem"}}>Explore Items</li>
    </ol>
</span>
   <h1 className='categories'><span className='sp'>  Boo<span className='rad'>ks</span>  </span></h1>
   <div className='card-price menu'>
        
        <Card5/>
      
        </div>
        <h1 className='categories'><span className='sp'>  Stati<span className='rad'>onary</span>  </span></h1>
   <div className='card-price menu'>
        <Card6/>
       
      
        </div>
        <h1 className='categories'><span className='sp'>  Ba<span className='rad'>gs</span>  </span></h1>
   <div className='card-price menu'>
        <Card4/>
      
      
        </div>
        <h1 className='categories'><span className='sp'>  Note<span className='rad'>Books</span>  </span></h1>
   <div className='card-price menu'>
        <Card7/>
      
      
        </div>
   <Footer/>
   </>
  )
}

export default Shop