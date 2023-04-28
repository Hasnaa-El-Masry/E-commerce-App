import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/actions';

const Cart = () => {

  const items = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const changeQtyHandler = (product, operator) => {
    if (operator === 'add') {
      dispatch(addToCart(product))
    }else{
      dispatch(removeFromCart(product))
    }
  }

  return (
    <div className="container py-5">
      <h1><i className='fa fa-shopping-cart'/> Your Cart</h1>
      <div className="row py-5">
        {
          items.length > 0 ?
            items.map((pro) => (

              <div className="col-12 bg-light p-5 my-5" key={pro.id}>

                <div className="row align-items-center">

                  <div className="col-6 text-center">
                    <img src={pro.image} alt={pro.title} width={200} height={200} />
                  </div>

                  <div className="col-6">
                    <h3>{pro.title}</h3>

                    <p className='lead fw-bold'>
                      {pro.qty}{' '} X ${pro.price} = ${pro.price * pro.qty}
                    </p>

                    <div className="buttons my-5">

                      <button className="btn btn-outline-dark me-3" onClick={() => changeQtyHandler(pro, 'remove')}>
                        <i className='fa fa-minus' />
                      </button>

                      <button className="btn btn-dark" onClick={() => changeQtyHandler(pro, 'add')}>
                        <i className='fa fa-plus' />
                      </button>

                    </div>
                  </div>

                </div>
              </div>
            ))
            :

            <p>There are no items added yet!</p>
        }

      </div>
      <button className='btn btn-outline-secondary'>Proceed to checkout</button>
    </div>
  )
}

export default Cart