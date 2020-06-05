import React, {useState} from 'react';
import fakeData from '../../fakeData/fake';
import Information from '../Information/Information';
import Cart from '../PaymentCart/PaymentCart'
import './User.css'

const User = () => {
    const allData = fakeData.slice(0,15);
    const [user,setUser] = useState(allData)
    const [cart,setCart] = useState([]);
    const handlePaymentCart = (users)=>{
        const newCart = [...cart,users]
        setCart(newCart)
    }

    return (
        <div className='user-container'>
            <div className='employee-container'>
                {user.map(users => <Information handlePaymentCart ={handlePaymentCart} 
                user={users}></Information>)}
            </div>

            <div className='cart-container'>
                <div className ='paymentCart'>
                  <Cart cart = {cart}></Cart> 
                </div>
            </div>
        </div>
    );
};
export default User;