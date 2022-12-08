import React from 'react'
import { useSelector } from 'react-redux'

const NavbarImage = () => {
    const dariRedux = useSelector(all => all);
    return (
        <div>
            <img src={dariRedux.navbarReducer.data.logo} alt="logo" />
        </div>
    )
}

export default NavbarImage
