import React from "react";
import { useSelector } from "react-redux";
import { SORTING_LIST } from "../constants";
import Filters from "./PartialComponents/Filters";

function VerticalFilter() {
    const { modelFilters, brandFilters } = useSelector((state) => state?.filters);

    const filters = [{ name: 'Sort By', data: SORTING_LIST, type: 'radio' }, { name: 'Brand', data: brandFilters, type: 'checkbox' }, { name: 'Model', data: modelFilters, type: 'checkbox' }]

    return (
        <div>
            {
                filters?.map((item, index) => <Filters item={item} key={index}></Filters>)
            }
        </div>
    );
}

export default VerticalFilter;
