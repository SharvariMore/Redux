const initialState = {
    message: 'My 1st React Redux Project'
};

const reducer = (state = initialState, action) => {
    const newState = {...state};

    if (action.type === "Message Change") {
            newState.message = "Thankyou for watching project";
    }
    return newState;
};

export default reducer;
