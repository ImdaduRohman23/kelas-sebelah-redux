import React from 'react'
import { useSelector } from 'react-redux'

const CardImage = () => {
    const dariRedux = useSelector((datas) => datas);
    return (
        <div>
            <img src={dariRedux.dataReducer.data.avatar} alt="name" />
        </div>
    )
}

export default CardImage
