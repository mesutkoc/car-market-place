import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setFilteredProducts } from './Redux/productSlice';
import './App.css';
import ProductList from './Components/ProductList';
import { fetchFilters, setFilters } from './Redux/filterSlice';

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
      <ProductList></ProductList>
    </div>
  );
}

export default App;
