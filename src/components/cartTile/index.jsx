import { useContext } from "react";
import { ShoppingCartContext } from "../../context";


function CartTile({singleCartItem}){
    const {handleRemoveFromCart, handleAddToCart} = useContext(ShoppingCartContext)
    
    return (
        <>
            <div className="grid grid-cols-3 items-start gap-5">
                <div className="col-span-2 flex items-start gap-4">
                    <div className="w-28 h-28 max-sm:w-20 shrink-0 bg-gray-200 p-1 rounded-sm">
                        <img 
                            src={singleCartItem?.thumbnail} 
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="flex justify-between grow">
                        <h3 className="text-base font-bold w-[200px] text-ellipsis text-gray-900">{singleCartItem?.title}</h3>
                        <h3 className="font-lato font-extrabold text-gray-900">${singleCartItem?.totalPrice.toFixed(2)}</h3>
                    </div>

                </div>
                <div className="ml-auto grow-0 flex flex-col gap-4 items-center justify-center">
                    <div className="flex gap-[2px]">
                        <button 
                            onClick={() => handleRemoveFromCart(singleCartItem, false)}
                            disabled={singleCartItem?.quantity === 1}
                            className="disabled:opacity-65 border border-[#000] px-3 rounded-md"
                        >-</button>
                        <button 
                            onClick={() => handleAddToCart(singleCartItem)}
                            className="border border-[#000] px-3 rounded-md"
                        >+</button>
                    </div>

                    <div>
                        <p className="font-lato">
                            Quantity:<span className="ml-1 font-bold text-[16px]">{singleCartItem?.quantity}</span>
                        </p>
                    </div>

                    
                    <button 
                        onClick={() => handleRemoveFromCart(singleCartItem, true)}
                        className='hover:bg-white border border-black transition font-lato text-sm px-2 py-1 bg-black text-white font-extrabold rounded-lg'
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" className="text-orange-600">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6"></path>
                            </svg>
                    </button>
                </div>
                
            </div>
            <hr className="border-gray-500"/>
        </>
        
    )
}

export default CartTile;