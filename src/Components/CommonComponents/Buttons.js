import crossButton from './assets/cross.svg';

const { default: styled } = require("styled-components");


export const Button = styled.button`
width: ${props => props.big ? '360px' : props.verySmall ? '60px' : '95px'};
padding: ${props => props.big ? '20px 30px' : props.verySmall ? '2px 7px' : '10px 15px'}; 
border-radius: 20px;
border: none;
background-color: #d7d7d7;    
cursor: pointer;
text-transform: ${props => props.verySmall ? 'none' : 'uppercase'};
z-index: 1;
font-weight: bold;
`



export const Option = styled.p`
background-color: ${props => props.chosen ? '#d7d7d7' : 'none'};
padding: 10px;
border-radius: 20px;
cursor: ${props => props.chosen ? 'default' : 'pointer'};
font-weight: bold;
`

export const Cross = styled.div`
width: 25px;
height: 25px;
position: absolute;
background-image: url(${crossButton});
cursor: pointer;
`
