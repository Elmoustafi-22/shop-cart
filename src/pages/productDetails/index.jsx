import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ShoppingCartContext } from '../../context';
import { toast } from 'react-toastify';

function ProductDetailsPage() {
  const {id} = useParams();
  const {
      productDetails, 
      setProductDetails, 
      loading, 
      setLoading,
      handleAddToCart,
      cartItems
    } = useContext(ShoppingCartContext)


  async function fetchProductDetails() {
    try{
      const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
      const result = await apiResponse.json()
      
      if (result) {
        setProductDetails(result)
        setLoading(false)
      }
    } catch (error){
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchProductDetails();
  }, [id])

  if (loading) return (
    <div className='flex items-center justify-center p-20 mx-auto my-auto'>
      <p className='font-lobster font-extralight text-3xl'>Product details loading! please wait...</p>
    </div>
  )

  return (
    <div>
      <div className='p-6 lg:max-w-7xl max-w-4xl mx-auto'>
        <div className='grid items-center grid-cols-1 lg:grid-cols-5 gap-12 shadow-sm p-6'>
          <div className='lg:col-span-3 w-full lg:sticky top-0 text-center'>
            <div className='px-4 py-10 rounded-xl shadow-lg relative'>
              <img 
                src={productDetails?.thumbnail}
                alt={productDetails?.title}
                className='w-4/5 object-cover'
              />
              <div className='mt-6 flex flex-wrap justify-center gap-6 mx-auto'>
                {
                  productDetails?.images?.length > 0 ?
                  productDetails?.images.map(imageItem =>(
                    <div className='rounded-xl p-4 shadow-md' key={imageItem}>
                      <img 
                        src={imageItem} 
                        alt='image'
                        className='w-24 cursor-pointer'
                      />
                    </div>
                  ))
                  : null
                }
              </div>
            </div>
          </div>
          <div className='lg:col-span-2'>
            <h2 className='text-2xl font-lato text-[#333] font-extrabold'>
              {productDetails?.title}
            </h2>
            <div className='flex flex-wrap gap-4 mt-4'>
              <p className='font-bold font-lato text-xl'>${productDetails?.price}</p>
            </div>
            <div>
              <button 
                onClick={() => {
                  handleAddToCart(productDetails)
                  toast.success("Items added to cart!")
                }}
                className=' mt-5 rounded font-lato min-w-[200px] px-4 py-3 border border-[#333] bg-transparent text-sm font-semibold'
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}

export default ProductDetailsPage
