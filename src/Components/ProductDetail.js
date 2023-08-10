import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItemBasket } from "../Helper";
import { addItemToBasket } from "../Redux/basketSlice";

import './Components.scss';

function ProductDetail() {
  const { i } = useParams();
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  const { basket } = useSelector((state) => state?.basket);

  const product = useMemo(() => {
    return products?.filter(item => item?.name === i)
  }, [i, products])

  const addItem = (item) => {
    const datas = addItemBasket({ basket, item })
    dispatch(addItemToBasket(datas))
  }

  if (!product[0]) {
    return <div>Loading...</div>
  }

  return (
    <div className="productDetail">
      <div className="product">
        <img src={product?.[0]?.image} alt='productImage' />
      </div>
      <div className="info">
        <div className="detailInfo">
          <p className="name">{product?.[0]?.name}</p>
          <p className="price">{product?.[0]?.price} ₺</p>
        </div>
        <div>
          <button className="addButton" onClick={() => addItem(product?.[0])}>Add to Cart</button>
        </div>
        <div className="description">
          <span>{product?.[0]?.description}</span>
        </div>
      </div>
    </div>);
}

export default ProductDetail;
