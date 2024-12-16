import ProductListPage from "./pages/productList"
import ProductDetailsPage from "./pages/productDetails"
import CartListPage from "./pages/cartList"
import { Route, Routes } from "react-router-dom"

function App() {
  
  return (
    <>
      <Routes>
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/product-details/:id" element={<ProductDetailsPage />}/>
        <Route path="/cart" element={<CartListPage />}/>
      </Routes>
    </>
  )
}

export default App
