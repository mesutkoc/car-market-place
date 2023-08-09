import React from "react";

function FilterItem({ listItem, type }) {
    return (
        <li className='item' onChange={() => console.log(listItem)} >
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
