import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';

export default function Homepage() {
    return (
        <>
            <div className="banner">
                <img src="https://b2cdemo.getswift.asia/media/weltpixel/owlcarouselslider/images/h/5/h5_h2.png" />
            </div>
            <div className="wrapper">
                <ProductList category_id="1"/>
                <Link to={`category/1`}><button>View More</button></Link>
                <ProductList category_id="2"/>
                <Link to={`category/2`}><button>View More</button></Link>
            </div>
        </>
    );
}
