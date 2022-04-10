
import { addClass, removeClass } from '../redux/AddRemoveClass/addremoveclass.actions'
import { useDispatch, useSelector } from 'react-redux'



function Test(){
    

  
        
    let Testt=useSelector((state)=>{
        return state.addremoveclassReducer.state
        })
   

    let dispatch=useDispatch()

        let aClass=()=>{
            dispatch(addClass())
        }

        let rClass=()=>{
            dispatch(removeClass())
        }
{/*useEffect(()=>{
    fetch('http://localhost:3000/BourgersData.json')
  .then(response =>response.json())
  .then(data =>dispatch(setBourgers(data)))

})*/}


    return(
        <>
            <h1 className={Testt} onMouseOver={aClass} onMouseOut={rClass}>Тест</h1>
           <p></p>
        </>
    )
}

export default Test