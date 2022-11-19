import styled from 'styled-components';

export const Container = styled.button`

    border:none;
    background-color:#fff;
    padding:15px 25px;
    color:#000;
    cursor: pointer;
    border-radius:8px;
    font-size:15px;
    font-weight:600;
    width:50%;
    transition: all .6s ease;

    &:hover {

        opacity:.8;
    }

    @media (max-width:768px) {

        width:100%;
    }
`