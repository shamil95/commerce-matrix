import React, {useEffect} from 'react';
import {Button, Carousel} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {getProducts, setProductAndOpenModal} from "../../redux/actions/products";
import {RightOutlined} from "@ant-design/icons";

const Slider = () => {
    const dispatch = useDispatch();
    const {marketProducts} = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const handleClickProduct = (product) => {
        dispatch(setProductAndOpenModal(product, true));
    }

    return (
        <>
        <Carousel style={{width: '500px'}} autoplay>
            {marketProducts.map((product, index) => (
                <div key={index}>
                    <img
                        style={{ width: "100%", maxHeight: "150px" }}
                        src={product.image}
                        onClick={() => handleClickProduct(product)}
                    />
                </div>
            ))}
        </Carousel>
            <RightOutlined />
        </>
    )
};

export default Slider;
