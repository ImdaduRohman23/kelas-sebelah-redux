const initState = {
    data: 10
};

const stateReducer = (state = initState, action) => {
    switch (action.type) {
        case 'TAMBAH':
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
};

export default stateReducer