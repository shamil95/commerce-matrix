import React from 'react';
import {Routes, Route, Outlet, Link, BrowserRouter} from "react-router-dom";
import Home from "../Home/Home";
import Products from "../Products/Products";
import Basket from "../Basket/Basket";
import Layout from "../layout/Layout";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="products" element={<Products />} />
                    <Route path="basket" element={<Basket />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

