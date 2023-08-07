import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { fetchProducts, setFilteredProducts } from './Redux/productSlice';
import Dashboard from './Components/Dashboard';
import ProductDetail from './Components/ProductDetail';
import { fetchFilters, setFilters } from './Redux/filterSlice';
import './App.scss';
import Header from './Components/Header';

function App() {
  const dispatch = useDispatch();
  const [userfilter, setUserFilter] = useState({});
  const { modelFilters, selectedFilters } = useSelector((state) => state?.filters);
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchFilters());
    dispatch(setFilters({ brand: ['Tesla', 'BMW'], model: ['Roadster', 'Mustang'] }))
    dispatch(setFilteredProducts({ brand: ['Tesla', 'BMW'], model: ['Roadster', 'Mustang'] }))
  }, [dispatch]);

  const { products, filteredProducts } = useSelector((state) => state?.products);
  console.log(filteredProducts);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path={`/productdetail/:i`} element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
