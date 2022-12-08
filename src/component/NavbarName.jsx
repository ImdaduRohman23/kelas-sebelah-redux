import React from 'react'
import { useSelector } from 'react-redux'

const NavbarName = () => {
    const {navbarReducer} = useSelector(haha => haha)
    return (
        <div>
            <h1>{navbarReducer.data.company}</h1>
        </div>
    )
}

export default NavbarName
