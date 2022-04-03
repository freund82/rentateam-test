import styled from 'styled-components'

const MakeOderMenu=styled.div`
    position:absolute;
    top:43%;
    right:20%;
    z-index:1000;
    width:4rem;
    height:4rem;
    border-radius:50%;
    background:#fff;
    box-shadow:  0 0.3rem 0.3rem rgba(0,0,0,0.08);
`;

const Add=styled.span`
    position:absolute;
    top:50%;
    right:1.4rem;
    z-index:1000;
    width:1.2rem;
    height:0.2rem;
    background:#000;
    cursor:pointer;
    &:after{
        content:"";
        display:block;
        width:1.2rem;
        height:0.2rem;
        background:#000;
        cursor:pointer;
        transform:rotate(90deg);
    }
`;

function MakeOder(){
    return(
        <MakeOderMenu className="MakeOder">
            <Add></Add>
        </MakeOderMenu>
    )
}

export default MakeOder