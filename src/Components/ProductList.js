import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setFilteredProducts } from "../Redux/productSlice";
import { setModelFilter, setBrandFilter } from "../Redux/filterSlice";
import ProductCard from "./PartialComponents/ProductCard";
import './Components.scss';
import { ITEMS_PER_ROW } from "../constants";

function ProductList() {
    const groupedItems = [];
    const dispatch = useDispatch();

    const { products, filteredProducts } = useSelector((state) => state?.products);
    const { selectedFilters, searchTerm } = useSelector((state) => state.filters);

    useEffect(() => {
        dispatch(setFilteredProducts(selectedFilters))
    }, [dispatch, selectedFilters]);

    useEffect(() => {
        dispatch(setModelFilter(filteredProducts.length > 0 ? filteredProducts : products))
        dispatch(setBrandFilter(filteredProducts.length > 0 ? filteredProducts : products))
    }, [dispatch, products, filteredProducts])

    const listingProducts = useMemo(() => {
        const items = filteredProducts?.length > 0 ? filteredProducts : products;
        return searchTerm ? items?.filter(type => type?.name?.toLowerCase().includes(searchTerm?.toLowerCase())) : items;
    }, [products, filteredProducts, searchTerm]);

    for (let i = 0; i < listingProducts.length; i += ITEMS_PER_ROW) {
        groupedItems.push(listingProducts.slice(i, i + ITEMS_PER_ROW));
    }

    return <div className="productList">
        {
            groupedItems.map((group, index) => (
                <div key={index} className="group">
                    {group?.map((item) => (
                        <ProductCard item={item} key={item.name} />
                    ))}
                </div>
            ))
        }

    </div>;
}

export default ProductList;
