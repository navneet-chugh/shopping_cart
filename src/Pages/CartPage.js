import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove_from_cart, checkout } from "../actions/shoppingAction";

const CartPage = () => {

    const cartItem = useSelector(state => state);
    const [check, setCheck] = useState(false);
    let totalAmount = 0;
    for (let i = 0; i < cartItem.length; i++) {
        totalAmount += cartItem[i].price;
    }
    console.log(cartItem);
    const dispatch = useDispatch();


    return (
        <div className="page-setting">

            <h1 className="heading">My Cart</h1>

            <div className="cart-section">

                <div className="cards-div carts">
                    {
                        cartItem.length > 0 && cartItem.map((product) => (
                        <div className="product-card">
                            <div className="product-img">
                                <img src={product.thumbnail} />
                            </div>
                            <div className="product-details">
                                <p>Title : {product.title} </p>
                                <p>Price :  ${product.price} </p>
                            </div>
                            <button className="btn" onClick={() => {
                                dispatch(remove_from_cart(product.id))
                            }}>Remove From Cart</button>
                        </div>
                        ))
                    }
                </div>

                {
                    cartItem.length > 0 && <div className="amounts">
                        <div>
                            <h3 className="amount-header">Checkout List</h3>
                        </div>
                        <div className="all-products">

                            {
                                cartItem.map((product) => (
                                    <div>
                                        <span>1. {product.title}</span>
                                        <span>{`$${product.price}`}</span>
                                    </div>
                                ))
                            }
                        </div>

                        <div>
                            <hr></hr>
                            <div className="total-price">
                                <span>Total</span>
                                <span>${totalAmount}</span>
                            </div>
                            <hr></hr>
                        </div>

                        <div className="btn-container">
                            <button id="checkout-btn" onClick={() => {
                                dispatch(checkout())
                                setCheck(true)
                            }}>Click To Checkout</button>
                        </div>
                    </div>
                }


            </div>

            {
                check && alert("Items have been checkout out.")
            }

            {
                cartItem.length === 0 && <h1 className="heading">Your card is empty</h1>
            }

        </div>
    )
}

export default CartPage;