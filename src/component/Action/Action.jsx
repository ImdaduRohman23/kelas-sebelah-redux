import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Action = () => {
    const dispatch = useDispatch();
    const {data} = useSelector(all => all);
    console.log(data)

    const handleAdd = () => {
        dispatch({
            type: 'TAMBAH',
            payload: data+1
        })
    }
    return (
        <div>
            <button onClick={handleAdd}>Add</button>
            <button>Mines</button>
            <button>Reset</button>
        </div>
    )
}

export default Action
