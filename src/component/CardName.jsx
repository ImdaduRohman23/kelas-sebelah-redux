import React from 'react'
import { useSelector } from 'react-redux'

const CardName = () => {
    const dariRedux = useSelector((haha) => haha);
    console.log(dariRedux)
    return (
        <div>
            <h1>{dariRedux.data.nama}</h1>
        </div>
    )
}

export default CardName
