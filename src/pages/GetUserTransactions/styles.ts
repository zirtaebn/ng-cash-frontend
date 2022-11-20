import styled from 'styled-components';

export const Container = styled.div`

    width:100%;
    height:100%;
    background-color:#fff;
    display:flex;
    flex-direction:column;
    align-items:center;

    
`
export const Header = styled.div`

    margin:80px 0 20px 0;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
        
    h1 {
        font-weight:300;
        margin-bottom:5px;
    }
`
export const Buttons = styled.div`

    display:flex;

    button {

        border:1px solid #000;
        background-color:#fff;
        padding:10px 25px;
        color:#000;
        cursor: pointer;
        border-radius:8px;
        font-size:15px;
        font-weight:600;
        width:100%;
        transition: all .5s ease;
        margin:0 10px;

        &:hover {

            background-color:#000;
            color:#fff
        }

        
    }

    @media(max-width:768px){

        flex-direction:column;

        button {

            margin: 10px 0;
        }

            
    }
`

export const Transactions = styled.div`

    width:70%;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding: 20px 0;

    @media(max-width:425px){

        width:100%;
    }
`

export const Transaction = styled.div`

    display:flex;
    justify-content:space-between;
    align-items:center;
    width:30%;
    height:40px;
    height:auto;
    margin:20px 0;
    cursor: pointer;
    border-bottom: 1px solid #808080;
    padding-bottom:10px;

    @media(max-width:768px){

        width:60%;
    }

    @media(max-width:425px){

        width:80%;
    }

`