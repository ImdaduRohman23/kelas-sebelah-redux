import React from 'react'
import CardImage from './CardImage'
import CardName from './CardName'
import { useState } from 'react'
import { useSelector } from 'react-redux'


const Card = () => {
    //7
    // const reduxData = useSelector((hehe) => hehe)

    // console.log('rD', reduxData)

    // const [data, setData] = useState({
    //     nama: 'imdadu',
    //     avatar: 'https://reqres.in/img/faces/12-image.jpg'
    // })

    return (
        <div>
            <CardName />
            <CardImage />
        </div>
    )
}

export default Card
