import { INCREASE_COUNTER, DECREASE_COUNTER } from "./counter.actionTypes";




let increaseCounter=(item)=>{

    return{
        type:INCREASE_COUNTER,
        payload:'increase',
        id:item
    }
}

let decreaseCounter=()=>{
    return{
        type:DECREASE_COUNTER,
        payload:'decrease'
    }
}

export {increaseCounter, decreaseCounter}