import React from "react";
import { useSelector } from "react-redux";
import BasketCard from "./PartialComponents/BasketCard";
import CheckOut from "./PartialComponents/CheckOut";
import ProductList from "./ProductList";
import VerticalFilter from "./VerticalFilter";

function Dashboard() {
    const { loading } = useSelector((state) => state.products)

    if (loading) {
        return <div>Loading Products</div>
    }

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
