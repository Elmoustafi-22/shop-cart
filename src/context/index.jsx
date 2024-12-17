import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export const ShoppingCartContext = createContext(null);

export default function ShoppingCartProvider({children}){
    const [loading, setLoading] = useState(true);
    const [productList, setProductList] = useState([]);
    const [productDetails, setProductDetails] = useState(null)
    const [cartItems, setCartItems] = useState([])
    const navigate = useNavigate()

    async function fetchListOfProducts() {
        try {
            const apiResponse = await fetch('https://dummyjson.com/products')
            const result = await apiResponse.json()
            
            if(result && result?.products) {
                setProductList(result?.products)
                setLoading(false)
            }
        } catch(error){
            console.log(error)
        }
    }

    function handleAddToCart(cartProduct) {
        let existingCartItems = [...cartItems]
        const findIndexOfCurrentItem = existingCartItems.findIndex(cartItems => cartItems.id === cartProduct.id)

        if (findIndexOfCurrentItem === -1) {
            existingCartItems.push({
                ...cartProduct,
                quantity : 1,
                totalPrice : cartProduct?.price
            }) 
        } else {
            console.log('its here')
        }
        setCartItems(existingCartItems)
        localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
        navigate('/cart')
    }

    useEffect(() => {
        fetchListOfProducts();
    }, [])

    return (
        <ShoppingCartContext.Provider value={{
            productList, 
            loading, 
            setLoading, 
            productDetails, 
            setProductDetails,
            handleAddToCart,
            cartItems,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}