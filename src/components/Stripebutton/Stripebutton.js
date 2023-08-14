import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { toast } from 'react-toastify';
// import { useCartcontext } from '../../context/Cart';
import { clearCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
const Stripebutton = ({ price }) => {
const dispatch = useDispatch()

        const priceForStripe = price * 100;
        const publishableKey = 'pk_test_51JEoa7SEIJGjBh5JpAUIH87r9gsGsW1Y3XHBChJbiNnKr7DFvsYGLig1HtFTNtUTfREqLaxojcRu5xCIlQhQgl0h00P77mzfZw';
      
        const onToken = token => {
          if (token) {
            // clearAfterPayment();
            dispatch(clearCart())
            toast("Payment Sucessfull 😄",{position: "top-right",
            autoClose: 2000,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            type:"success",
            progress: undefined,
            theme: "dark",})
          
            
          }
        };

//         const stripe= async()=>{ 
//             try{
            
//               const res= await fetch("/getdata",{
//                 method:"GET",
//                 headers:{
//                   "Content-Type":"application/json"
//                 },
//               })
//               const data = await res.json();
              
//               console.log(data); 
//               setuser({...user,name:data.name,email:data.email});
//               if(res.status!==200 || !data){
//                 history("/login")
//                 toast(data,{position: "top-right",
//                 autoClose: 2000,
//                 hideProgressBar: true,
//                 closeOnClick: false,
//                 pauseOnHover: false,
//                 draggable: true,
//                 type:"error",
//                 progress: undefined,
//                 theme: "dark",})
              
//                 }
//               }    
//             catch(err){
//               console.log(err);
//               // alert("you need to loin first");
//             }
             
            
//             }
// useEffect(() => {
//  stripe()
// }, [])


      
  return (
    <StripeCheckout
    label='Pay Now'
    name='CART CHECKOUT'
    billingAddress
    shippingAddress
    image='/images/book.png'
    description={`Your total is ₹ ${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    currency="INR"
  />
  )
}

export default Stripebutton