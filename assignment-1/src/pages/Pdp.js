import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { list } from "../components/Data";

function Pdp() {
    let query = new URLSearchParams(useLocation().search);
    const [count, setCount] = useState(0);
    return (
        <>
            {list.map(list => (
                <div className="wrapper-pdp" key='{list.category_id}'>
                    {
                        list.products.filter(filter => filter.title === query.get("title")).map((products) =>(
                            <div className="pdp" key={products.id}>
                                <img src={products.img} />
                                <div className="pdp-info">
                                    <h2>{query.get("title")}</h2>
                                    <p>{products.price}</p>
                                    <p>{products.desc}</p>
                                    <button style={{ background: '#ccc', color: '#232323' }} onClick={() => {if(count > 0){setCount(count - 1)}}}>-</button>
                                    <p style={{ width: '30px', display: 'inline-block', textAlign: 'center' }}>{count}</p>
                                    <button style={{ background: '#ccc', color: '#232323' }} onClick={() =>  setCount(count + 1)}>+</button>
                                    <Link to="/Cart"><button>Add To Cart</button></Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            ))}
        </>
    )
}

export default Pdp;