import React from 'react'

const OrderStatusModal = () => {
  return (
    <>
        <div className='absolute flex flex-col bg-white p-2 shadow-2xl'>
            <button className='text-left'>Confirmed Order</button>
            <button className='text-left'>Shipped Order</button>
            <button className='text-left'>Delivered Order</button>
        </div>
    </>
  )
}

export default OrderStatusModal;