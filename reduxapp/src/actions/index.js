export const increment = (incrementVal,temp) => {
    return{
        type : "INCREMENT",
        in : incrementVal,
        tmp : temp
    }
}
export const decrement = (decrementVal,temp) => {
    return{
        type : "DECREMENT",
        de : decrementVal,
        tmp : temp
    }
}