import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/actions/fetchDataAction';

const Home = () => {
    const data = useSelector(oi => oi);
    console.log('cek', data)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData());
    }, []);


    return (
        <div>
            <h1>This is Home</h1>
        </div>
    )
}

export default Home
