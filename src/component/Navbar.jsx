import React from 'react'
import NavbarImage from './NavbarImage'
import NavbarName from './NavbarName'
import { useState } from 'react'


const Navbar = () => {
    const [data, setData] = useState({
        nama: 'imdadu',
        avatar: 'https://reqres.in/img/faces/12-image.jpg'
    })
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <NavbarName data={data}/>
            <NavbarImage data={data}/>
        </div>
    )
}

export default Navbar
