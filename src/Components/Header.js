import React, { useEffect, useState } from "react";
import './Components.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setSearchTerm } from "../Redux/filterSlice"

function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searhTerm, setSearchterm] = useState();
    const { totalPrice } = useSelector((state) => state.basket);

    useEffect(() => {
        dispatch(setSearchTerm(searhTerm))
    }, [dispatch, searhTerm])

    return <div className="header">
        <div className="headerComp">
            <div className="headerLogo" onClick={() => navigate(`/dashboard`)}>
                Eteration
            </div>
            <input
                type="text"
                id="searchBox"
                className="searchInput"
                placeholder="Search"
                onChange={(e) => setSearchterm(e.target.value)}
            ></input>
        </div>

        <div className="basket">
            <FontAwesomeIcon icon={faCartArrowDown} style={{ color: "#f5f5f5", fontSize: '20px' }} />
            {totalPrice > 0 && <p>{totalPrice} ₺</p>}
        </div>
    </div>;
}

export default Header;
