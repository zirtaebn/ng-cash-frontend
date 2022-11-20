import styled from 'styled-components';

export const Container = styled.main`

    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color:#fff;

    h1 {

        margin-bottom:20px;
    }
`

export const Logout = styled.div`

    position: fixed;
    top:0px;
    right:0;
    width:100%;
    display:flex;
    justify-content:end;
    padding:10px 15px 0 0;

    button {
        
        border:none;
        background-color:#fff;
        padding:15px 25px;
        color:#000;
        cursor: pointer;
        border-radius:8px;
        font-size:15px;
        font-weight:600;
        width:10%;
        transition: all .6s ease;
        

        &:hover {

            opacity:.8;
        }

        
        @media(max-width:768px){

            width:25%;
            
        }

        @media(max-width:425px){

            width:45%;
            
        }
    }

`

export const Balance = styled.div`

    background-color:#fff;
    color:#000;
    width:40%;
    height: 10%;
    display:flex;
    align-items:center;
    align-items:center;
    padding: 40px 0;
    border-radius:15px;

    span { 

        height:30px;
        background-color:#000;
        border-radius:5px;
        flex:1;
        margin:0 50px;
    }

    div {  

        width:35px;
        height:35px;
        margin-right:10px;
        cursor: pointer;
        display:flex;
        align-items:center;
        justify-content:center;
    
    }

    @media(max-width:768px){

        width:65%;
        padding: 45px 0;
    }

    @media(max-width:425px){

        width:90%;
        padding: 50px 0;
    }
`

export const BalanceDetails = styled.div`

    flex:1;
    font-size:55px;

    @media(max-width:425px){

        margin-left:10px;
        font-size:45px;
    }
`

export const Buttons = styled.div`

    width:40%;
    display:flex;

    button {

        margin:15px 10px;
    }

    @media(max-width:768px){

        width:65%;
    }

    @media(max-width:425px){

        width:90%;

        button {

            margin:15px 5px;
        }
    }

`
