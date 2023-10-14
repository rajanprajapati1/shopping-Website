import { useState,useEffect } from 'react';
import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';
const KEY = "pk_test_51NkhTqSBY0hxZ5lMDhRqhjZ1tqaXyfMCTq40vzkQuvoxh1OqwAZUmeCSHvkKl4l1mQ2mQEdJBEqsnUKLqlqg6QMT002ewNTI1t";
const Pay = () => {
  const  [Stripetoken ,setStripetoken] = useState(null);
  const onToken = (token) =>{
      setStripetoken(token)
    }
    
  useEffect(()=>{
    const makeRequest = async () => {
      try {
        if (Stripetoken) {
          const res = await axios.post("http://localhost:8000/api/checkout/payment", {
            tokenId: Stripetoken.id,
            amount: 2000,
          });
          console.log(res.data);
        }
      } catch (error) {
        console.log(error)
      }
    }
    makeRequest();
  },[Stripetoken])

  return (
    <div style={{height:'100vh',display:"grid",placeItems:"center"}}>
    <StripeCheckout name='#Crux' image='logo192.png' 
    stripeKey={KEY}
    billingAddress
    shippingAddress
    description='your total is $20'
    amount={2000}
    token={onToken}
    >
      <button style={{background:'black',color:'white', padding:'1vw 3vw'}}>Pay Now</button>
      </StripeCheckout>
    </div>
  )
}

export default Pay;
