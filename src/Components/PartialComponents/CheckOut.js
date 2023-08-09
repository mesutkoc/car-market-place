import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTotalPrice } from "../../Redux/basketSlice";
import './Product.scss';

function CheckOut() {
    const dispatch = useDispatch();
    const { basket } = useSelector((state) => state?.basket);

    const totalPrice = useMemo(() => {
        return basket?.reduce((acc, item) => acc + (item?.price * item?.count), 0)
    }, [basket])

    useEffect(() => {
        dispatch(setTotalPrice(totalPrice))
    }, [dispatch, totalPrice])

    return (
        <div>{
            basket?.length > 0 && <p>Total Price: <span className="totalPrice">{totalPrice} ₺</span></p>
        }</div>
    );
}

export default CheckOut;
