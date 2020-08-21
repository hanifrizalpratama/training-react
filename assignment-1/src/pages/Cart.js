import React from "react";
import { list } from "../components/Data";

function Cart() {
    return (
        <>
            <div className="wrapper">
                <h2>Cart</h2>
                <table className="cart">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Subtotal</th>
                    </tr>
                </thead>
                
                    {list.map(list => (
                        <tbody key='{list.category_id}'>
                            {
                                list.products.map((products) =>(
                                    <tr key={products.id}>
                                        <td style={{ width: '20%' }}><img style={{ maxWidth : '200px' }} src={products.img} /></td>
                                        <td>{products.title}</td>
                                        <td>{products.price}</td>
                                        <td>1</td>
                                        <td>{products.price}</td>
                                    </tr>
                                ))
                            }
                            </tbody>
                    ))}
            </table>
            </div>
        </>
    )
}

export default Cart;