import React from 'react'
import { useSelector } from 'react-redux'

const CardName = () => {
    const {data} = useSelector((haha) => haha); //dg distraktor
    return (
        <div>
            <h1>{data.nama}</h1>
        </div>
    )
}

export default CardName
