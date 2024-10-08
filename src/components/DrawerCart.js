import React, {useEffect, useState} from 'react';
import EmptyCart from "@/components/cart/EmptyCart";
import CartFooter from "@/components/cart/CartFooter";
import CartHeader from "@/components/cart/CartHeader";
import CartItem from "@/components/cart/CartItem";
import {useDispatch, useSelector} from "react-redux";
import {toggleDrawerCart} from "@/slice/drawerSlice";

function DrawerCart() {

    const cartItems = useSelector((state) => state.cart.items);
    const [cartProducts, setCartProducts] = useState([]);
    const dispatch = useDispatch();
    const drawerCartVisible = useSelector((state)=>state.drawer.drawerCartVisible);

    useEffect(() => {
        setCartProducts(cartItems);
    }, [cartItems]);


    return (
        <div>
            <div className={`rc-drawer rc-drawer-right ${drawerCartVisible? "rc-drawer-open": ""} `} tabIndex={-1}>
                {
                    drawerCartVisible? (<div   onClick={() => dispatch(toggleDrawerCart())} className="rc-drawer-mask"/>) : ""
                }
                <div
                    tabIndex={0}
                    aria-hidden="true"
                    data-sentinel="start"
                    style={{
                        width: 0,
                        height: 0,
                        overflow: "hidden",
                        outline: "none",
                        position: "absolute"
                    }}
                />
                <div className={`rc-drawer-content-wrapper ${drawerCartVisible? "": "rc-drawer-content-wrapper-hidden"}`} style={{width: 378, right: 0}}>
                    <div className="rc-drawer-content" aria-modal="true" role="dialog">
                        <div className="flex flex-col justify-between w-full h-full">
                            <CartHeader toggleDrawerCart={toggleDrawerCart}/>
                            {
                                cartProducts.length>0? (<CartItem cartProducts={cartProducts}/>) : (<EmptyCart/>)
                            }


                            <CartFooter/>
                        </div>
                    </div>
                </div>
                <div
                    tabIndex={0}
                    aria-hidden="true"
                    data-sentinel="end"
                    style={{
                        width: 0,
                        height: 0,
                        overflow: "hidden",
                        outline: "none",
                        position: "absolute"
                    }}
                />
            </div>
        </div>


    );
}

export default DrawerCart;