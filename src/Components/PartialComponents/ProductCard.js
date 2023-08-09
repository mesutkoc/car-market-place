import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemBasket } from "../../Helper";
import { addItemToBasket } from "../../Redux/basketSlice";
import './Product.scss';

function ProductCard({ item }) {
    const dispatch = useDispatch();
    const { basket } = useSelector((state) => state?.basket);
    const addItem = (item) => {
        const datas = addItemBasket({ basket, item })
        dispatch(addItemToBasket(datas))
    }

    return (
        <div className="productCard">
            <div>
                <img className="productImage" src={item?.image} alt='productImage' />
            </div>
            <div className="price">
                {item?.price} ₺
            </div>
            <div className="name">
                {item?.name}
            </div>
            <div className="addButton">
                <button className="button" onClick={() => { addItem(item) }}>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;
