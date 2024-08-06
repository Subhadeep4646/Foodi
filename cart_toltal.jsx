import React from 'react'

function cart(cart) {
    const calculatecartamount=()=>{
        let total=0;
        cart.foreach((item)=>{
         total+=item.price;
        })
        return total;
    }
  return (
    <div>
      <h2 className='text-lg font-bold'>{cart[0].restaurant.name}</h2>
      <h2 className='font-bold'>My Order</h2>
      {
        cart&cart.map((item,index)=>(
            <div className='flex mt-5 flex-col gap-3 items-center' key={index}>
                <Image src={item.productImage}
                alt={item.productName}
                width={30}
                height={40}
                className='h-[40px] w-[40px] rounded-lg object-cover'
                />
              <h2>{item?.productName}</h2>
                </div>
        ))
      }
      <Button>checkout ${calculatecartamount()}</Button>
    </div>


  )
}

export default cart
