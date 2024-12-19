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
            existingCartItems[findIndexOfCurrentItem] = {
                ...existingCartItems[findIndexOfCurrentItem],
                quantity : existingCartItems[findIndexOfCurrentItem].quantity + 1,
                totalPrice : (existingCartItems[findIndexOfCurrentItem].quantity  + 1)* existingCartItems[findIndexOfCurrentItem].price
            }
        }
        setCartItems(existingCartItems)
        localStorage.setItem('cartItems', JSON.stringify(existingCartItems));
        navigate('/cart')
        
    }

    function handleRemoveFromCart(getProductDetails, isFullRemove){
        let existingCartItems = [...cartItems]
        const indexOfCartItem = existingCartItems.findIndex(item => item.id === getProductDetails.id)

        if(isFullRemove){
            existingCartItems.splice(indexOfCartItem, 1)
        } else {
            existingCartItems[indexOfCartItem] = {
                ...existingCartItems[indexOfCartItem],
                quantity : existingCartItems[indexOfCartItem].quantity - 1,
                totalPrice: (existingCartItems[indexOfCartItem].quantity - 1) * existingCartItems[indexOfCartItem].price
            }
        }
        localStorage.setItem('cartItems', JSON.stringify(existingCartItems))
        setCartItems(existingCartItems)
    }

    useEffect(() => {
        fetchListOfProducts();
        setCartItems(JSON.parse(localStorage.getItem('cartItems') || []))
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
            handleRemoveFromCart,
            }}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
}