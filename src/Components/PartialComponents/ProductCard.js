import React from "react";
import './product.scss';

function ProductCard({ item }) {
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
                <button className="button">Add to Cart</button>
            </div>
        </div>
    );
}

export default ProductCard;
