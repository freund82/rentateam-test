
export let setBourgers=(data)=>{
    console.log(data)
    return{
        type:'SET_BOURGERS',
    data,
    }
    
}

export let increaseCounter=(data)=>{

    return{
        type:'INCREASE_COUNTER',
        payload:'increase',
        data,
    }
}

export let delBourgers=(data)=>({
    type:'DEL_BOURGERS',
    data,
})