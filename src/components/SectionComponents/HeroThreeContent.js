import React, {useContext} from 'react';
import classes from './HeroThreeContent.module.css'
import HeroThreeForm from './HeroThreeForm';
import CartContext from '../store/cartcontext';

const HeroThreeContent = (props) =>
{
  const cartCtx = useContext(CartContext);

  const price = `₦${props.price.toFixed(2)}`;

  const onAddToCartHandler = (amount) =>
{
    cartCtx.addItem({
  id: props.id,
  name:props.name,
  amount : amount,
  price: props.price,
  src: props.src
});
}

    return (
    <div className={classes.dish_content}>
      <div className={classes.dish_image_div}>
        <img src={props.src} alt="Dish"/>
      </div>
      <div className={classes.dish_text_div}>
        <p>{props.name}</p>
      </div>
      <div className={classes.dish_price_div}>
        <p className="my-auto">{price}</p>
       <HeroThreeForm onAddToCart={onAddToCartHandler}/>
      </div>
    </div>
)
}

export default HeroThreeContent;




// import React, { useContext } from 'react';
// import classes from './HeroThreeContent.module.css'
// import HeroThreeForm from './HeroThreeForm';
// import CartContext from '../store/cartcontext';


// const HeroThreeContent = (props) =>
// {
// // const cartCtx = useContext(CartContext);

// const price = `₦${props.price.toFixed(2)}`;

// const onAddToCartHandler = (amount) =>
// {
//     // cartCtx.addItem({
//     //   id: props.id,
//     //   name:props.name,
//     //   amount : amount,
//     //   price: props.price
//     // });
// }


//     return (
//     <div className={classes.dish_content}>
//       <div className={classes.dish_image_div}>
//         {/* <img src={props.src} alt="Dish"/> */}
//       </div>
//       <div className={classes.dish_text_div}>
//         <p>{props.name}</p>
//       </div>
//       <div className={classes.dish_price_div}>
//         <p className="my-auto">₦{props.price}</p>
//        <HeroThreeForm onAddToCart={onAddToCartHandler}/>
//       </div>
//     </div>
// )
// }

// export default HeroThreeContent;