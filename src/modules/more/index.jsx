/* eslint-disable react-hooks/rules-of-hooks */

import React from 'react'
import Link from 'next/link'

import useStore from '../../zustand'

const more = () => {
    const state = {
        count: useStore((state) => state.count),
    }

    return (
        <div className='w-full mt-10 text-center'>
            <p className='text-3xl mb-7'>You have {state.count} count</p>
            <div className='mt-5'>
                <Link href='/' passHref>
                    <a>Click here for back to home</a>
                </Link>
            </div>
        </div>
    )
}

export default more
