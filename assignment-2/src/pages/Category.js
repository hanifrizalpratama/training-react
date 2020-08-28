import React from 'react';
import ProductList from "../components/ProductList";
import { Route, Switch, useRouteMatch, useParams } from "react-router-dom";

function Category() {
    let { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={`${path}/:id`}>
                <CategoryList />
            </Route>
        </Switch>
    )
}

function CategoryList() {
    let { id } = useParams();
    return (
        <>
            <div className="wrapper">
                <ProductList category_id={id}/>
            </div>
        </>
    )
}

export default Category;