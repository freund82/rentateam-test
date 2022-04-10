let initialState={
    state:''
}

let addremoveclassReducer=(state=initialState, action)=>{
    switch(action.type){
        case 'ADD_CLASS':
            return {
                state:state='active'
            }
           
        case 'REMOVE_CLASS':
            return {
                state:state=''
            }
            default:return state
    }
}

export {addremoveclassReducer}