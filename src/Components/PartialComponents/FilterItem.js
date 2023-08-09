import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from '../../Redux/filterSlice';
import { setSelectedFilters } from '../../Helper'
function FilterItem({ listItem, type, name }) {
    const dispatch = useDispatch();
    const { selectedFilters } = useSelector((state) => state.filters);

    const setUserFilter = ({ listItem, name }) => {
        if (name === 'Sort By') {
            name = 'Sort'
        }
        const datas = setSelectedFilters({ selectedFilters, listItem, name })
        dispatch(setFilters(datas))
        console.log({ datas });
    }

    return (
        <li className='item' onChange={() => setUserFilter({ listItem, name })} >
            <input
                type={type}
                id="checkbox"
                className="checkbox"
                value={listItem}
                name='listItem'
            ></input>
            {listItem}
        </li >
    );
}

export default FilterItem;
