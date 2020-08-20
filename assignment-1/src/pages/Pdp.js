import React from "react";
import { useLocation, Link } from "react-router-dom";

function Pdp() {
    let query = new URLSearchParams(useLocation().search);
    return (
        <>
            <div className="pdp">
                <img src="https://b2cdemo.getswift.asia/media/catalog/product/cache/50dfd146a0eaf4fd913e00072e909ed4/m/h/mh02-black_main.jpg" />
                <div className="pdp-info">
                    <h2>{query.get("title")}</h2>
                    <p>Rp. 10.000</p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
        </>
    )
}

export default Pdp;