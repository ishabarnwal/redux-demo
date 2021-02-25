const counterReducer = (state =50, action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + action.in;
        case 'DECREMENT':
            return state - action.de;
            default :
            return false;
    }
}
export default counterReducer;