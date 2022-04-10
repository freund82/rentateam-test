

let initialState={
    data:[]
}

let bourgersReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'SET_BOURGERS':
            return {
                ...state,
                data:state.data=action.data,
                /*bourgers:state.bourgers="new"*/
                /*bourgers:state.bourgers.concat(action.bourgers),*/
                /*...state, bourgers:state.bourgers.concat(action.bourgers),*/
            }
        case 'INCREASE_COUNTER':
            return{...state, data:state.data.map(value=>({...value, count:value.count+value.id===action.id?1:0 }))
        }
            default:return state
    }
}

export {bourgersReducer}