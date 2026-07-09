import './App.css';
import { Layout } from './components/layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import TraditionalProducts from './components/traditionalProducts/TraditionalProducts';
import TraditionalProductsDetail from './components/traditionalProducts/TraditionalProductDetail';
import Management from './components/management/Management';
import Login from './components/login/Login';
import Register from './components/register/Register';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute';
import CouponsManager from "./components/couponsManager/CouponsManager";


function App() {

  return (

    <Routes>
      <Route element={<Layout />}>
        {/*<Route path="/" element={<Products Message="Nuestros Productos"/>} />
        <Route path="/destacados" element={<Products
          Message={"Productos Destacados"} featured={true}/>} />
        <Route path="/productos" element={<Products
          Message={"Nuestros Productos"} />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/alta" element={<ContainerForm />} />*/}
        <Route path="/" element={<TraditionalProducts Message="Productos Tradicionales" />} />
        <Route path="/productos-tradicionales-destacados" element={<TraditionalProducts
          Message={"Productos Tradicionales Destacados"} featured={true} />} />
        <Route path="/productos-tradicionales" element={<TraditionalProducts
          Message={"Productos Tradicionales"} />} />
        <Route path="/producto-tradicional/:id" element={<TraditionalProductsDetail />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registro' element={<Register />} />
        <Route
          element={
            <ProtectedRoute allowedRoles={["admin"]} />
          }
        >
          <Route path="/gestion" element={<Management />} />
          <Route path="/admin/cupones" element={<CouponsManager />}/>
        </Route>
      </Route>
    </Routes>);

}

export default App;
