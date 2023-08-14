import React from 'react'
import { NavLink } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/footer/Footer';
import { items } from '../../data/data';
const Explorelatest = () => {
    // const truncate = (str)=>{
    
    //   return str.length > 10 ? str.substring(0, 50) + "..." : str;
    // }
    
    
      return (
        <>
        <Header/>
        <h1 className='categories'><span className='sp'>  Explore <span className='rad'>Latest</span>  </span></h1>

     <div className='menu'>

    {items.map(user=>{
        return (
    <NavLink to={`/shopitm/${user._id}`} className="card-link" key={user._id}>
    
         <div className="box">
            <img src={`/images/${user.image}`} alt={user.name}/>
            <h4>{user.name}</h4>
            <span className='card-prices'>
                <p>{user.price}₹ </p>
    
            </span>
          </div>
          </NavLink>
              )
    
            })} 
            </div>
            <Footer/>
        </>
      )
    }

export default Explorelatest