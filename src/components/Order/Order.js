import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import PageTitle from '../PageTitle/PageTitle';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../utilities/fakedb';
import './Order.css';

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart();
    const navigate = useNavigate();

     const removeItem = (product) => {
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id)
    }

    return (
        <>
        <PageTitle title="Order"></PageTitle>
        <div className='shop-container'>
            <div className="review-container">
                {
                    cart.map(product => <ReviewItem key={product._id} product={product} removeItem={() => removeItem(product)}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    {/* <Link to='/inventory'>
                        <button className='btn btn-danger'>Proceed Checkout</button>
                    </Link>
                    Or... */}
                    <button onClick={() => navigate('/shipment')} className='btn btn-danger'>Proceed Shipping</button>
                </Cart>
            </div>
        </div>
        </>
    );
};

export default Order;
