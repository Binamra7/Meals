// import { useContext } from 'react'
// import React from 'react'
// import CartIcon from "../Cart/CartIcon"
// import classes from "./HeaderCartButton.module.css"
// import CartContext from '../../store/cart-context'


// const HeaderCartButton = (props) => {

//     const cartCtx = useContext(CartContext);
//     const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
//         return curNumber + item.amount;
//     },0);

//     return (
//         <button className={classes.button} onClick={props.onClick}>
//             <span className={classes.icon}>
//                 <CartIcon/>
//             </span>
//             <span>
//                 Your Cart
//             </span>
//             <span className={classes.badge}>
//                 3
//             </span>
//         </button>
//     )
// }
// export default HeaderCartButton;

import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;