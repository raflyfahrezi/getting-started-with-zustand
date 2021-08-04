import React from 'react'

const home = () => {
    return (
        <div className='w-full text-center mt-10'>
            <p className='text-3xl mb-7'>0</p>
            <button className='p-3 bg-green-300 rounded-md mr-5'>
                Increment
            </button>
            <button className='p-3 bg-red-300 rounded-md'>Decrement</button>
        </div>
    )
}

export default home
