import React from "react";
import BasketCard from "./PartialComponents/BasketCard";
import ProductList from "./ProductList";
import VerticalFilter from "./VerticalFilter";

function Dashboard() {
    return <div className="dashboard">
        <VerticalFilter></VerticalFilter>
        <ProductList></ProductList>
        <BasketCard></BasketCard>
    </div>;
}

export default Dashboard;
