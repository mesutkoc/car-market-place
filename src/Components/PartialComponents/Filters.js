import React from "react";
import './filter.scss';
import FilterItem from "./FilterItem";

function Filters({ item }) {
  const { name, data, type } = item;

  return (
    <div className="verticalFilterItem">
      <label>{name}</label>
      <div className="filter">
        {type !== 'radio' && <input
          type="text"
          id="searchBox"
          className="searchInput"
          placeholder="Search"
          onChange={(e) => console.log('e', e)}
        ></input>}
        <ul className="filterItems">
          {data?.map(listItem => <FilterItem listItem={listItem}  type={type}  key={listItem}></FilterItem>)}
        </ul>
      </div>
    </div>
  );
}

export default Filters;
