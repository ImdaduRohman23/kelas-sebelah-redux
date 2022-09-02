import { createStore } from "redux"; //1

const dataState = {
    data: {
        nama: 'imdadu',
        avatar: 'https://reqres.in/img/faces/12-image.jpg'
    }
}; //3

// function / reducer terminal memasukan state ke store
const dataReduce = (state = dataState) => {
    return state;
}

const store = createStore(dataReduce) 
export default store //2

//UNTUK MELIHAT PERBEDAAN REDUX DAN MAUAL: NAVBAR -> MANUAL, CARD -> REDUX
