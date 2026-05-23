import './App.css';
import { Layout } from './components/layout/Layout';
import Products from './components/products/Products';
import { ContainerForm } from './components/productsForm/ContainerForm';
import { Routes, Route } from 'react-router-dom';
import ProductDetail from './components/products/ProductDetail';


function App() {

  return (

    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Products Message="Nuestros Productos"/>} />
        <Route path="/destacados" element={<Products
          Message={"Productos Destacados"} featured={true}/>} />
        <Route path="/productos" element={<Products
          Message={"Nuestros Productos"} />} />
        <Route path="/alta" element={<ContainerForm />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
      </Route>
    </Routes>);

}

export default App;
