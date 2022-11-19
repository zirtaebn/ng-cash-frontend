import styled from 'styled-components';

export const Container = styled.main`

    width:70%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    
    
    h1 {

        color:#fff;
        font-size:50px;
        font-weight:600;
    }

    div {

        display:flex;
        align-items:center;
        justify-content:space-around;
        width:100%;

        @media (max-width:768px) {

            flex-direction:column;
        }
    }

    @media (max-width:768px) {

        width:80%;
    }


`
