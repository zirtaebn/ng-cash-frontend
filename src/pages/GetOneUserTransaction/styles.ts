import styled from 'styled-components';

export const Container = styled.div`

    width:100%;
    height:100%;
    background-color:#fff;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`

export const Header = styled.div`

    display:flex;
    align-items:center;
    justify-content:center;
    
    h1 {
        margin-left:5px;

        @media(max-width:425px){

            font-size:30px;
        }

        @media(max-width:375px){

            font-size:25px;
        }

        @media(max-width:320px){

            font-size:24px;
        }
    }

    svg {

        width:30px;
    }

`
export const Username = styled.p`   

    margin: 10px 0;
    font-size:30px;

    @media(max-width:375px){

        font-size:25px;
    }
    
`

export const Value = styled.div`

    font-size:25px;
    font-weight:600;

    @media(max-width:375px){

        font-size:20px;
    }
`

export const Date = styled.p`

    margin-top:10px;
`