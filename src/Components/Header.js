import React from "react";
import './Components.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from "react-redux";

function Header() {
    const { totalPrice } = useSelector((state) => state.basket)

    return <div className="header">
        <div className="headerComp">
            <div className="headerLogo">
                Eteration
            </div>
            <input
                type="text"
                id="searchBox"
                className="searchInput"
                placeholder="Search"
                onChange={(e) => console.log('e', e)}
            ></input>
        </div>

        <div className="basket">
            <FontAwesomeIcon icon={faCartArrowDown} style={{ color: "#f5f5f5", fontSize: '20px' }} />
            {totalPrice > 0 && <p>{totalPrice} ₺</p>}
        </div>
    </div>;
}

export default Header;
