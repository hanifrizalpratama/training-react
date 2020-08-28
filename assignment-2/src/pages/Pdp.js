import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { list } from "../components/Data";
import { useDispatch } from 'react-redux';
import { cart } from "../redux/action/cart";

function Pdp() {
    let query = new URLSearchParams(useLocation().search);
    const [count, setCount] = useState(0);

    const dispatch = useDispatch();

    const Addcart = (id) => {
        dispatch(
          cart({
            id: id,
            img: document.getElementById("img").src,
            title: document.getElementById("title").innerText,
            qty: parseInt(document.getElementById("qty").value),
            price: parseInt(document.getElementById("price").innerText)
          })
        )
      };

    return (
        <>
            {list.map(list => (
                <div className="wrapper-pdp" key='{list.category_id}'>
                    {
                        list.products.map((products) => {
                            if (products.title === query.get("title")) {
                                return (
                                    <div className="pdp" key={products.id}>
                                        <img id="img" src={products.img} />
                                        <div className="pdp-info">
                                            <h2 id="title">{query.get("title")}</h2>
                                            <p>Rp. <div id="price" style={{ display: 'inline-block' }}>{products.price}</div></p>
                                            <p>{products.desc}</p>
                                            <button style={{ background: '#ccc', color: '#232323' }} onClick={() => { if (count > 0) { setCount(count - 1) } }}>-</button>
                                            <input style={{ width: '30px', display: 'inline-block', textAlign: 'center' }} id="qty" type="text" min="0" value={count} readOnly />
                                            <button style={{ background: '#ccc', color: '#232323' }} onClick={() => setCount(count + 1)}>+</button>
                                            <button onClick={() => { if (count > 0) { Addcart(products.id) }}}>Add To Cart</button>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            ))}
        </>
    )
}

export default Pdp;