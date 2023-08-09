import React, { useState, useMemo } from "react";
import './filter.scss';
import FilterItem from "./FilterItem";

function Filters({ item }) {
  const [term, setTerm] = useState();

  const { name, data, type } = item;

  const userType = (e) => {
    setTerm(e.target.value);
  }

  const filterList = useMemo(() => {
    return term ? data?.filter(type => type?.toLowerCase().includes(term?.toLowerCase())) : data;
  }, [data, term]);

  return (
    <div className="verticalFilterItem">
      <label>{name}</label>
      <div className="filter">
        {type !== 'radio' && <input
          type="text"
          id="searchBox"
          className="searchInput"
          placeholder="Search"
          onChange={(e) => userType(e)}
        ></input>}
        <ul className="filterItems">
          {filterList?.map(listItem => <FilterItem listItem={listItem} type={type} name={name} key={listItem}></FilterItem>)}
        </ul>
      </div>
    </div>
  );
}

export default Filters;
