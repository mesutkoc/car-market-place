import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { fetchProducts } from './Redux/productSlice';
import Dashboard from './Components/Dashboard';
import ProductDetail from './Components/ProductDetail';
import BasketCard from "./Components/PartialComponents/BasketCard";
import CheckOut from "./Components/PartialComponents/CheckOut";
import { fetchFilters } from './Redux/filterSlice';
import './App.scss';
import Header from './Components/Header';

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.products)
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchFilters());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      {
        loading ? <div>Loading Products...</div>
          : <div className="appWindow">
            <div>
              <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
                <Route path={`/productdetail/:i`} element={<ProductDetail />}></Route>
              </Routes>
            </div>
            <div className="basket">
              <BasketCard></BasketCard>
              <CheckOut></CheckOut>
            </div>
          </div>
      }

    </div>
  );
}

export default App;
