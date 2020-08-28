import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Cart() {
    const data = useSelector((state) => state.cart);
    const [datacart, setDataCart] = useState([]);
    useEffect(() => {
        const getData = () => {
            for (let key in data.cart) {
                setDataCart(prevArray => [...prevArray,
                {
                    img: data.cart[key].data.img,
                    title: data.cart[key].data.title,
                    qty: data.cart[key].data.qty,
                    price: data.cart[key].data.price
                },
                ]);
            }
        };
        getData();
    }, []);
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
                    <tbody>
                        {datacart.length > 0 ? (
                                datacart.map((val, index) => (
                                    <tr key={index}>
                                        <td style={{ width: '20%' }}><img style={{ maxWidth: '200px' }} src={val.img} /></td>
                                        <td><Link to={`/product?title=${val.title}`}>{val.title}</Link></td>
                                        <td>{val.price}</td>
                                        <td>{val.qty}</td>
                                        <td>{val.qty * val.price}</td>
                                    </tr>
                                ))
                        ) : (
                                <tr><td colSpan="5">Cart Empty</td></tr>
                            )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Cart;