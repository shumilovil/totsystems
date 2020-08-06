const { default: styled } = require("styled-components");

export const Avatar = styled.img`
max-width: ${props => props.big ? '60px' : '35px'};
max-height: ${props => props.big ? '60px' : '35px'};
border-radius: 10px
`





