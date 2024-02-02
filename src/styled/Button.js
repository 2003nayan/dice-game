import styled from "styled-components";

export const Button = styled.button`
min-width: 220px; 
padding: 10px 18px;
border-radius: 5px;
background-color: #000;
color: #FFF;
border: none;
font-size: 16px;
transition: 0.4s background ease-in;
cursor: pointer;
border: 2px solid transparent;

&:hover{
    background-color: white;
    color: black;
    border: 2px solid black;
    transition: 0.3s background ease-in;
    
}
`;

export const OutlineButton = styled(Button)`
    background-color: white;
    border: 1px solid black;
    color: black;
    
    &:hover{
    background-color: black;
    color: white;
    border: 2px solid transparent;
    }
`;