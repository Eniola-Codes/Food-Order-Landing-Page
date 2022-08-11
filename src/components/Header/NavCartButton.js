import React from 'react';
import classes from './NavCartButton.module.css';

const NavCartButton = () =>
{

    return ( 
        <div className={classes.cart__button}>
             <i className="bi bi-cart"></i>
            Cart
            <div className={classes.badge}>
                3
            </div>
        </div>
    )
}

export default NavCartButton;