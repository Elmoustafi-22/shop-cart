import ProductListPage from "./pages/productList"
import ProductDetailsPage from "./pages/productDetails"
import CartListPage from "./pages/cartList"
import { Route, Routes } from "react-router-dom"
import { ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header"

function App() {
  
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />}/>
        <Route path="/cart" element={<CartListPage />}/>
      </Routes>
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        newestOnTop={true} 
        closeOnClick 
        pauseOnHover
      />
    </>
  )
}

export default App
