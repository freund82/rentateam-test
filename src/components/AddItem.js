import styled from 'styled-components'

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

const delBtn=document.getElementById("del")

function AddItem(){
    return(
        <AddItemMenu className="AddItem">
            <DeleteItem id="del"></DeleteItem>
            <Amount id="counter"></Amount>
            <Add></Add>
        </AddItemMenu>
    )
}

export default AddItem