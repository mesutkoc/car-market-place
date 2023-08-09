import React from "react";
import BasketCard from "./PartialComponents/BasketCard";
import CheckOut from "./PartialComponents/CheckOut";
import ProductList from "./ProductList";
import VerticalFilter from "./VerticalFilter";

function Dashboard() {
    return <div className="dashboard">
        <VerticalFilter></VerticalFilter>
        <ProductList></ProductList>
        <div>
            <BasketCard></BasketCard>
            <CheckOut></CheckOut>
        </div>

    </div>;
}

export default Dashboard;
