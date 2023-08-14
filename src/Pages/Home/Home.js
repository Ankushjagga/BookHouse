import React from 'react'
import Header from '../../components/Header/Header'
import Card from '../../components/cards/Card'
import Catrgory from '../../components/cards/catrgory'
import Footer from '../../components/footer/Footer'
import Card2 from '../../components/cards/Card2'
import "./home.css"
import Card3 from '../../components/cards/Card3'
import { NavLink } from 'react-router-dom'
const Home = () => {



  return (
    <>
    <Header/>
    <div className='banner'>
      <div className='banner2'></div>
      <div className='banner-head'>
      <h1 className='categories'><span> The Book<span className='rad'>House</span>  </span></h1>
      <p>Stock up on a wide range of Stationary Items Here.<br/> Get a huge selection of Stationary including <span className='rad'> Notebooks , <br/>Pencils, Bags, Books ,Keychains ,Files </span>and so on .<br/> You are certain to <span className='rad'> find something that you need 😄</span></p>

      <NavLink to="/exploreLatest"> <button className='explore '>  Explore</button></NavLink> 
      </div>
    </div>
        <h1 className='categories'><span className='sp'>  Catego<span className='rad'>ries</span>  </span></h1>
        <div className='category'>

    <Catrgory/>
   
    </div>
        <h1 className='categories'><span className='sp'>  Latest <span className='rad'>Items</span>  </span></h1>
<h1 className='sub-category'>🖊️ Pen/Pencils </h1>
        <div className='card-price menu'>
        <Card/>
       
        </div>
        <h1 className='sub-category'> ⛓️ KeyChains </h1>
        <div className='card-price menu '>
        <Card2/>
        </div>
        <h1 className='sub-category'>📑 Assignment Files </h1>
        <div className='card-price menu'>
       <Card3/>
        </div>
        <div className='subscribe'>
            <h4>Get All The Latest Notification 🔔</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus incidunt repudia<br/> Illo provident quisquam quod sapiente dolor maxime temporibus fugiat corporis hic<br/> quasi voluptate tempora, quo et sed! Est voluptas ex praesentium.</p>
            <button className='btn'> Notify <i className="fa-solid fa-bell"></i></button>
        </div>
        <Footer/>
    </>
  )
}

export default Home