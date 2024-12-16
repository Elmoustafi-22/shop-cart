import { createContext, useEffect, useState } from "react";


export const ShoppingCartContext = createContext(null);

export default function ShoppingCartProvider({children}){
    const [loading, setLoading] = useState(true);
    const [productList, setProductList] = useState([]);

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

    useEffect(() => {
        fetchListOfProducts();
    }, [])

    return (
        <ShoppingCartContext.Provider value={{productList, loading}}>
            {children}
        </ShoppingCartContext.Provider>
    )
}