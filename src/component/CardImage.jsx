import React from 'react'

const CardImage = ({data}) => {
    return (
        <div>
            <img src={data.avatar} alt="" />
        </div>
    )
}

export default CardImage
