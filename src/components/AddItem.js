import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { decreaseCounter, increaseCounter } from '../redux/counterRedux/counter.actions';





const AddItemMenu=styled.div`
    display:none;
    width:10.4rem;
    height:4rem;
    position:absolute;
    bottom:42%;
    right:17%;
    z-index:1000;
    color:#fff;
    background:#000;
    border-radius:50rem;
`;

const DeleteItem=styled.span`
    position:absolute;
    top:50%;
    left:1.4rem;
    z-index:1000;
    width:1.2rem;
    height:0.2rem;
    background:#fff;
    cursor:pointer;
`;

const Add=styled.span`
    position:absolute;
    top:50%;
    right:1.4rem;
    z-index:1000;
    width:1.2rem;
    height:0.2rem;
    background:#fff;
    cursor:pointer;
    &:after{
        content:"";
        display:block;
        width:1.2rem;
        height:0.2rem;
        background:#fff;
        cursor:pointer;
        transform:rotate(90deg);
    }
`;

const Amount=styled.span`
    position:absolute;
    top:55%;
    left:50%;
    z-index:1000;
    transform:translate(-50%, -50%);
    font-family: 'Barlow Condensed', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
`;

function AddItem(props){
  
/*useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => dispatch(increaseCounter(json)))
})*/

    let dispatch=useDispatch()

    let increaseBtn=()=>{
        dispatch(increaseCounter())
    }

    let decreaseBtn=()=>{
        dispatch(decreaseCounter())
    }

    //view data from store
    let viewCounter=useSelector((state)=>{
        return state.counterReducer.count
        
    })

    return(
        
        <AddItemMenu id={props.id} className="AddItem">
            <DeleteItem onClick={decreaseBtn}></DeleteItem>
            <Amount>{viewCounter}</Amount>
            <Add onClick={increaseBtn}></Add>
    </AddItemMenu>
    )
}

export default AddItem