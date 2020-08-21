import React from "react";
import { useLocation, Link } from "react-router-dom";
import { list } from "../components/Data";

function Pdp() {
    let query = new URLSearchParams(useLocation().search);
    return (
        <>
            {list.map(list => (
                <div key='{list.category_id}'>
                    {
                        list.products.filter(filter => filter.title === query.get("title")).map((products) =>(
                            <div className="pdp" key={products.id}>
                                <img src={products.img} />
                                <div className="pdp-info">
                                    <h2>{query.get("title")}</h2>
                                    <p>{products.price}</p>
                                    <p>{products.desc}</p>
                                    <select>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
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