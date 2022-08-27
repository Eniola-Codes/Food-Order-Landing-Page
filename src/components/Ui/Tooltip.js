import React from 'react';
import classes from './Tooltip.module.css';

const Tooltip = () =>
{
    return (
    <div className={classes.tooltip}>
        <span className={classes.tootip_content}>Item(s) added to cart</span>
    </div>
    )
}

export default Tooltip;