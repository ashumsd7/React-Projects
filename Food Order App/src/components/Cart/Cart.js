
import classes from './Cart.module.css'
const Cart = props =>{


    const cartItems= <ul className={classes['cart-items']}>{[
        {id:'c1', name: 'Susi', amount:2, price:11.22}
    ].map(item=>{<li>{item.name}</li>})}</ul>



    return <div>
        {cartItems}
        <div>
            <span>Total Amount</span>
            <span>32.67</span>
        </div>
        <div className={classes.actions}>

            <button className={classes['button--alt']}>Close</button>
            <button className={classes['button']}>Order</button>

        </div>
      
    </div>



}


export default Cart