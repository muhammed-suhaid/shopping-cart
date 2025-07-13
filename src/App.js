import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct';
import ViewAllProduct from './components/ViewAllProduct';
import SearchProduct from './components/SearchProduct';
import DeleteProduct from './components/DeleteProduct';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ViewAllProduct />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/search-product" element={<SearchProduct />} />
          <Route path="/delete-product" element={<DeleteProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
