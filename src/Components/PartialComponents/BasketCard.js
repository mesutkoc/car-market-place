import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItemToBasket } from "../../Redux/basketSlice";
import { changeCount } from "../../Helper";
import './Product.scss';

function BasketCard() {
    const dispatch = useDispatch();
    const { basket } = useSelector((state) => state?.basket);

    const addItem = ({ product, type }) => {
        const datas = changeCount({ basket, product, type })
        dispatch(addItemToBasket(datas))
    }

    return (
        <div className="basketCard">
            {
                basket?.length === 0 && <p>Empty Basket</p>
            }
            {basket?.map(product =>
                <div className="basketCardInfo">
                    <div className="cardText">
                        <p className="name">{product?.name}</p>
                        <p className="price">{product?.price} ₺</p>
                    </div>
                    <div className="productCount">
                        <button onClick={() => addItem({ product, type: 'decrease' })}>-</button>
                        <span>{product?.count}</span>
                        <button onClick={() => addItem({ product, type: 'increase' })}>+</button>
                    </div>
                </div>)
            }
        </div >
    );
}

export default BasketCard;
