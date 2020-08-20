import React from 'react';
import { Link } from 'react-router-dom';

const list = [
    {
        category_id: "1",
        name: "New Arrivals",
        products:
            [{
                id: "1",
                title: "New Product 1",
                price: "Rp. 10.000",
                img: "https://b2cdemo.getswift.asia/media/catalog/product/cache/50dfd146a0eaf4fd913e00072e909ed4/m/h/mh02-black_main.jpg"
            }, {
                id: "2",
                title: "New Product 2",
                price: "Rp. 10.000",
                img: "https://b2cdemo.getswift.asia/media/catalog/product/cache/50dfd146a0eaf4fd913e00072e909ed4/m/h/mh13-blue_main.jpg"

            }, {
                id: "3",
                title: "New Product 3",
                price: "Rp. 10.000",
                img: "https://b2cdemo.getswift.asia/media/catalog/product/cache/50dfd146a0eaf4fd913e00072e909ed4/m/h/mh12-green_main.jpg"
            }]
    },
    {
        category_id: "2",
        name: "Best Sellers",
        products:
            [{
                id: "4",
                title: "Product 4",
                price: "Rp. 10.000",
                img: "https://b2cdemo.getswift.asia/media/catalog/product/cache/50dfd146a0eaf4fd913e00072e909ed4/m/h/mh11-white_main.jpg"
            }, {
                id: "5",
                title: "Product 5",
                price: "Rp. 10.000",
                img: "https://b2cdemo.getswift.asia/media/catalog/product/cache/50dfd146a0eaf4fd913e00072e909ed4/m/h/mh10-blue_main.jpg"

            }, {
                id: "6",
                title: "Product 6",
                price: "Rp. 10.000",
                img: "https://b2cdemo.getswift.asia/media/catalog/product/cache/50dfd146a0eaf4fd913e00072e909ed4/m/h/mh08-brown_main.jpg"
            }]
    }
]

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