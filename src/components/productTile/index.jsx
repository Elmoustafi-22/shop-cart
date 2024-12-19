import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import { toast } from "react-toastify";


function ProductTile({singleProductTile}){

    const navigate = useNavigate()

    const {handleAddToCart, cartItems} = useContext(ShoppingCartContext)

    function handleNavigateToProductDetailsPage(productId) {
        navigate(`/product-details/${productId}`)
    }
    
    return (
        <div className="relative group border border-cyan-700 p-6 cursor-pointer">
            <div className="overflow-hidden aspect-square">
                <img  
                    src={singleProductTile?.thumbnail}
                    alt={singleProductTile?.title}
                    className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125"
                />  
            </div>
            <div className="flex items-start justify-between mt-4 space-x-4">
                <div className="font-lato font-bold text-gray-900 sm:text-sm text-xs md:text-base">
                    <p className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap">{singleProductTile?.title}</p>
                </div>
                <div className="text-right">
                    <p className="text-xs font-bold font-lato sm:text-sm md:text-[14px] text-gray-900">${singleProductTile?.price}</p>
                </div>
            </div>
            <button 
                onClick={() => handleNavigateToProductDetailsPage(singleProductTile?.id)}
                className="px-5 mt-5 w-full py-2 rounded-none text-lato font-bold text-lg bg-black text-white">
                View details
            </button>
            <button 
                
                onClick={() => {
                    handleAddToCart(singleProductTile)
                    toast.success("Added to cart!")
                }}
                className=" px-5 mt-5 w-full py-2 rounded-none text-lato font-bold text-lg bg-black text-white">
                Add to cart
            </button>
        </div>
    )
}

export default ProductTile;