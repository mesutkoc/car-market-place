import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './Redux/productSlice';
import './App.css';
import ProductList from './Components/ProductList';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { products } = useSelector((state) => state?.products);
  console.log(products);
  return (
    <div className="App">
      <ProductList></ProductList>
    </div>
  );
}

export default App;
