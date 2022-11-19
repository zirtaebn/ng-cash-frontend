import styled from 'styled-components';

export const Container = styled.div`

    display:flex;
    flex-direction:column;
    align-items:center;
    width:25%;
    height:50%;
    text-align:center;

    svg {

        color:green;
        margin-top:10px;
    }

    @media (max-width:768px) {

        width:40%;
    }

    @media (max-width:425px) {

        width:70%;
    }

`

export const Form = styled.form`

    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height:100%;

    label {

        margin:5px;
        font-weight:400;
        width:100%;
        text-align:left;
    }

    input { 

        border:none;
        outline:none;
        border-bottom: 1px solid #000;
        padding:10px 0;
        margin-bottom:10px;
        width:100%;
    }

    p {
        color: #ff0000;
        font-size:14px;
    }

    p::before {
        display: inline;
        content: "⚠ ";
    }

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
        margin-top:10px;


        &:hover {

            background-color:#000;
            color:#fff
        }
    }

`