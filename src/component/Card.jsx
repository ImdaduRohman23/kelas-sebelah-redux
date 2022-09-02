import React from 'react'
import CardImage from './CardImage'
import CardName from './CardName'
import { useState } from 'react'


const Card = () => {
    const [data, setData] = useState({
        nama: 'imdadu',
        avatar: 'https://reqres.in/img/faces/12-image.jpg'
    })

    return (
        <div>
            <CardName data={data}/>
            <CardImage data={data} />
        </div>
    )
}

export default Card
