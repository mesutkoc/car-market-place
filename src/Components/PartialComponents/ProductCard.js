import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { addItemBasket } from "../../Helper";
import { addItemToBasket } from "../../Redux/basketSlice";
import './product.scss';

function ProductCard({ item }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { basket } = useSelector((state) => state?.basket);

    const addItem = (event, item) => {
        event.stopPropagation();
        const datas = addItemBasket({ basket, item })
        dispatch(addItemToBasket(datas))
    }

    const viewDetailPage = () => {
        navigate(`/productdetail/${item?.name}`)
    }

    return (
        <div className="productCard" onClick={() => viewDetailPage(item)}>
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
                <button className="button" onClick={(e) => { addItem(e, item) }}>Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;
