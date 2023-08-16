import React from 'react'
import useCotizador from '../hooks/useContext'

const Error = () => {
    const { error } = useCotizador()
    return (
        <div className='border text-center border-red-400 bg-red-100 text-red-700 py-3'>
            <p className=''>{error}</p>
        </div>
    )
}

export default Error