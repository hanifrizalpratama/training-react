import React from 'react';
import { Link } from 'react-router-dom';
import { list } from './Data';

function ProductList(props) {
    return (
        <>
            {list.filter(filter => filter.category_id === props.category_id).map(list => (
                <div className="wrapper-category" key='{list.category_id}'>
                    <h2>{list.name}</h2>
                    <div className="category">
                        {
                            list.products.map((products) =>(
                                <div className="section-item" key={products.id}>
                                    <img src={products.img} />
                                    <div className="item">
                                        <p><Link to={`/product?title=${products.title}`}>{products.title}</Link></p>
                                        <p className="price">{products.price}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProductList;