import React from "react";
import { useSelector } from "react-redux";
import Filters from "./PartialComponents/Filters";

function VerticalFilter() {
    const { modelFilters, brandFilters } = useSelector((state) => state?.filters);

    const filters = [{ name: 'Brand', data: brandFilters, type: 'checkbox' }, { name: 'Model', data: modelFilters, type: 'checkbox' }]

    return (
        <div>
            {
                filters?.map((item, index) => <Filters item={item} key={index}></Filters>)
            }
        </div>
    );
}

export default VerticalFilter;
