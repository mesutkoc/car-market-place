import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setFilteredProducts } from "../Redux/productSlice";
import './Components.scss';

function ProductList() {
    const dispatch = useDispatch();
    const { products, filteredProducts } = useSelector((state) => state?.products);
    const { selectedFilters } = useSelector((state) => state.filters);
    useEffect(() => {
        dispatch(setFilteredProducts(selectedFilters))
    }, [dispatch, selectedFilters]);

    const listingProducts = useMemo(() => {
        return filteredProducts?.length > 0 ? filteredProducts : products;
    }, [products, filteredProducts]);

    return <div className="productList">
        {listingProducts?.map(item => <div>
            {item.brand}
        </div>)}
    </div>;
}

export default ProductList;
