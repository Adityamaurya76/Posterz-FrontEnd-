import React, { useState } from 'react';
import "./Navbar.scss"
import { Link } from 'react-router-dom';
import {BsCart2} from 'react-icons/bs'
import Cart from '../cart/Cart';
import { useSelector } from 'react-redux';

function Navbar() {
    const [openCart,setopenCart]= useState(false);
const categories= useSelector(state => state.categoryReducer.categories);
const cart= useSelector(state => state.cartReducer.cart);
let totalItem=0;
cart.forEach(item => totalItem +=item.quantity)

  return (
    <>
    <nav className='Navbar'>
        <div className="container nav-container">
        
            <div className="nav-left">
                <ul className="link-group">
                {categories?.map((category) => (
                                <li className="hover-link" key={category.id}>
                                    <Link
                                        className="link"
                                        to={`/category/${category.attributes.key}`}
                                    >
                                        {category.attributes.title}
                                    </Link>
                                </li>
                            ))}
                </ul>
            </div>
            <div className="nav-center">
            <Link to="/">
                            <h1 className="banner">Book's Haven.</h1>
                        </Link>
            </div>
            <div className="nav-rigth">
                <div className="nav-cart hover-link" onClick={()=> setopenCart(!openCart)}>
                   <BsCart2  className="icon"/> 
                   {totalItem >0 &&
                   <span className='cart-count'>{totalItem}</span>
                   }
                </div>
            </div>
        </div>
    </nav>
    {openCart &&   <Cart onClose={()=> setopenCart(false)}/>}
    </>
  )
}

export default Navbar