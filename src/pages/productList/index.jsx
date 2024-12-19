import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../context'
import ProductTile from '../../components/productTile'

function ProductListPage() {
  const {productList, loading}  = useContext(ShoppingCartContext)


  // if (loading) return (
  //   <section className="py-12 bg-white sm:py-16 lg:py-20">
  //     <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
  //       <div className="max-w-md mx-auto text-center ">
  //         <h2 className="text-3xl sm:text-4xl text-gray-950 font-extralight font-worksans">Our Featured Products</h2>
  //         <h3 className='mt-10 text-center font-lobster font-extralight text-3xl'>Loading data! please wait...</h3>
  //       </div>
  //     </div>
  //   </section>
  // )

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mt-10 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-md mx-auto text-center ">
          <h2 className="text-3xl sm:text-4xl text-gray-950 font-light font-worksans">Our Featured Products</h2>
        </div>
        <div className='mt-10 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8'>
          {
            productList && productList.length > 0 ?
            productList.map(singleProductTile => <ProductTile key={singleProductTile?.id} singleProductTile={singleProductTile}/>)
            : <h3>No products</h3>
          }
        </div>
      </div>
    </section>
  )}

export default ProductListPage
