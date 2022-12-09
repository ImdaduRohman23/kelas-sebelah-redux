import React from 'react'
import { useSelector } from 'react-redux'

const Result = () => {
    const state = useSelector(oi => oi);
    console.log(state)
    return (
        <div>
            <h3>{state.data}</h3>
        </div>
    )
}

export default Result
