import React from "react";

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
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ width: '30%' }}><img src="https://b2cdemo.getswift.asia/media/catalog/product/cache/a9d97be5cf53dad9f1babe6243c87d2f/m/h/mh02-black_main.jpg" /></td>
                        <td>Product 4</td>
                        <td>Rp. 10.000</td>
                    </tr>
                    <tr>
                        <td style={{ width: '30%' }}><img src="https://b2cdemo.getswift.asia/media/catalog/product/cache/a9d97be5cf53dad9f1babe6243c87d2f/m/h/mh02-black_main.jpg" /></td>
                        <td>Product 5</td>
                        <td>Rp. 10.000</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </>
    )
}

export default Cart;