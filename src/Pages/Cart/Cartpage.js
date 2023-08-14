import React, { useEffect } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/footer/Footer'
import "./Cartpage.css"
import { FaTrash } from 'react-icons/fa';
import Stripebutton from '../../components/Stripebutton/Stripebutton';
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem , setDecrease, setIncrease, totalamount} from "../../redux/cartSlice";
import { FaMinus, FaPlus } from "react-icons/fa";
import {toast} from "react-toastify"

const Cartpage = () => {


    const cart = useSelector((store) => store.cart.items);
    const initial = useSelector((store)=> store.cart)

  const dispatch = useDispatch();


  

  const handleClearCart = () => {
   if(window.confirm("do you rerally want to clear cart 😟?")){

     dispatch(clearCart());
     toast("Cart Clear Sucessfully 😄",{position: "top-right",
     autoClose: 2000,
     closeOnClick: false,
     pauseOnHover: false,
    draggable: true,
    type:"success",
    progress: undefined,
    theme: "dark",})
  };
}


  const remove = (id) => {
    if(window.confirm("do you rerally want to delete item 😟?")){
      dispatch(removeItem(id));

      toast("Cart Clear Sucessfully 😄",{position: "top-right",
      autoClose: 2000,
      closeOnClick: false,
      pauseOnHover: false,
     draggable: true,
     type:"success",
     progress: undefined,
     theme: "dark",})
   };

  };
  useEffect(() => {
    
  dispatch(totalamount())


  }, [dispatch, cart])
  

if(cart?.length===0){
  return (
    <>
    <Header/>
    <div className='empty'>No Item in the Cart 😟</div>
    <Footer/>
    </>
  )
  }


  return (
    <>
    <Header/>
    <div className="container" >
        <table border={"2px"}>
          <thead>

          <tr>
            <th width="100px">Item</th>
            <th width="50px">Price</th>
            <th width="100px">Quantity</th>
            <th width="50px">Subtol</th>
            <th width="52px">Remove</th>
          </tr>
          </thead>
          {cart?.map(elem=>{
            return (
<tbody key={elem._id}>

             <tr >
              <td>

              <figure><img src={`/images/${elem.image}`} alt={elem.name} className='cart-img'/></figure>
              <p>{elem.name}</p>
              </td>

              <td>

              {elem.price} ₹
              </td>
              <td className='quantity'>
              <div className="cart-button">
      <div className="amount-toggle">
        <button onClick={() =>dispatch( setDecrease(elem._id))}>
          <FaMinus />
        </button>
        <div className="amount-style">{elem.amount}</div>
        <button onClick={() => dispatch(setIncrease(elem._id))}>
          <FaPlus />
        </button>
      </div>
    </div>
              </td>
              <td className='subtotal'>{elem.price*elem.amount}₹ </td>
              <td onClick={()=>remove(elem._id)} style={{cursor:"pointer"}}> <FaTrash/></td>
          </tr>
         
          </tbody>
              )
          })}
          </table>
      
          </div>
         
          <span className='total'>
            <p>SubTotal :  {initial.total_amount} ₹</p>
          <p>Shipping Fees : {initial.shipping_fees}₹ </p>
          <hr/>
          <p>order total :  {initial.total_amount + initial.shipping_fees} ₹</p>
          </span>
          <div className='btnss'>

  <Stripebutton price={initial.total_amount+ initial.shipping_fees}  />
<button className='btn bts' onClick={() => handleClearCart()}>
clear Cart
</button>
  </div>
   <Footer/>
    </>
  )
}

export default Cartpage