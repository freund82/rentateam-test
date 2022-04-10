
import { INCREASE_COUNTER, DECREASE_COUNTER } from "./counter.actionTypes";



let counterReducer=(state=[], action)=>{
    switch(action.type){
        case INCREASE_COUNTER:
        
                    
                return {
                
                   
                    /*...state,
                    count:action.count+1*/
                }
                /*state[0].count+1*/
                /*...state,
               count:state.count+1*/
             
            /*[...state, {id: action.id, count: 0}]*/
                /*...state,
                count:state.count+1*/
                /*...state,
                count:[...state.count, action.price],*/
                /*можно еще и так count:[state.count, action.price],*/
               /*count:[state.count, action.price],*/
                /*count:state.count+1*/
            
         
        case DECREASE_COUNTER:
            return{
                
                /*count:(state.count-1>1)?state.count-1:1,*/
            }
        default:return state
    }
}

export {counterReducer}