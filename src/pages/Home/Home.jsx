import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    const data = useSelector(oi => oi);
    console.log('cek', data)
    const dispatch = useDispatch();
    const getData = () => {
        axios.get('https://reqres.in/api/users?page=2')
            .then(res => {
                dispatch({
                    type: 'FETCH_DATA',
                    payload: res.data.data
                })
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        getData();
    }, []);


    return (
        <div>
            <h1>This is Home</h1>
        </div>
    )
}

export default Home
