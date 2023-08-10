import React from "react";
import ProductList from "./ProductList";
import VerticalFilter from "./VerticalFilter";

function Dashboard() {
    return <div className="dashboard">
        <VerticalFilter></VerticalFilter>
        <ProductList></ProductList>
    </div>;
}

export default Dashboard;
