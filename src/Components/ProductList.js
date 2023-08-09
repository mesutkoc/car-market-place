import React from "react";
import { useSelector } from 'react-redux';
import './Components.scss';

function ProductList() {

    const { products } = useSelector((state) => state?.products);

    return <div className="productList">
        {products?.map(item => <div>
            {item.brand}
        </div>)}
    </div>;
}

export default ProductList;
