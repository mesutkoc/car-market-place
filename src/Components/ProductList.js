import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setFilteredProducts } from "../Redux/productSlice";
import { setModelFilter, setBrandFilter } from "../Redux/filterSlice";
import './Components.scss';

function ProductList() {
    const dispatch = useDispatch();
    const { products, filteredProducts } = useSelector((state) => state?.products);
    const { selectedFilters } = useSelector((state) => state.filters);
    useEffect(() => {
        dispatch(setFilteredProducts(selectedFilters))
    }, [dispatch, selectedFilters]);

    useEffect(() => {
        dispatch(setModelFilter(filteredProducts.length > 0 ? filteredProducts : products))
        dispatch(setBrandFilter(filteredProducts.length > 0 ? filteredProducts : products))
    }, [dispatch, products, filteredProducts])

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
