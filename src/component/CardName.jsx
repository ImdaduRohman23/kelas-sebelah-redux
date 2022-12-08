import React from 'react'
import { useSelector } from 'react-redux'

const CardName = () => {
    const nama = useSelector((haha) => haha.dataReducer.data.nama); //dg distraktor
    return (
        <div>
            <h1>{nama}</h1>
        </div>
    )
}

export default CardName
