/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react'

import useStore from '../../zustand'

const home = () => {
    const state = {
        count: useStore((state) => state.count),
        increment: useStore((state) => state.increment),
        decrement: useStore((state) => state.decrement),
    }

    return (
        <div className='w-full text-center mt-10'>
            <p className='text-3xl mb-7'>{state.count}</p>
            <button
                onClick={state.increment}
                className='p-3 bg-green-300 rounded-md mr-5'
            >
                Increment
            </button>
            <button
                onClick={state.decrement}
                className='p-3 bg-red-300 rounded-md'
            >
                Decrement
            </button>
        </div>
    )
}

export default home
