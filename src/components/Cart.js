import React from 'react';
import { useCart } from "react-use-cart";
import './Cart.css'


export default function Cart() {

    const { isEmpty, totalUniqueItems, items, totalItems, updateItemQuantity, removeItem, emptyCart, cartTotal } = useCart();
    if(isEmpty) return <h3 className='right'>Cart is Empty</h3>

    return (

        <section className='right'>
            <div className='row'>
                <div className="row-12">
                    <h5>Cart({totalUniqueItems}) total items : ({totalItems})</h5>
                    <table className="table table-light table-hover m-0">
                        <tbody>
                            {items.map((item, index) =>{
                                return(
                                <tr key={index}>
                                    <td>
                                        <img src={item.img} style={{height: '6rem'}} />
                                    </td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                    <td>Quantity ({item.quantity})</td>
                                    <td>
                                        <button className='btn btn-info ms-2'
                                        onClick={()=> updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                        <button className='btn btn-info ms-2'
                                        onClick={()=> updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                        <button className='btn btn-danger ms-2'
                                        onClick={()=>removeItem(item.id)}>Remove Item</button>
                                    </td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="col-auto ms-auto">
                    <h2>Total : {cartTotal}</h2>
                </div>
            </div>
        </section>
    )
}
