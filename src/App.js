import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, setFilteredProducts } from './Redux/productSlice';
import './App.css';
import ProductList from './Components/ProductList';
import { fetchFilters } from './Redux/filterSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchFilters());
    dispatch(setFilteredProducts(['Tesla', 'BMW']))
  }, [dispatch]);

  const { products, filteredProducts } = useSelector((state) => state?.products);
  const modelFilters = useSelector((state) => state?.filters);
  console.log({ filteredProducts });
  return (
    <div className="App">
      <ProductList></ProductList>
    </div>
  );
}

export default App;
