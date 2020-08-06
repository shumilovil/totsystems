import businessModeBackGround from './assets/background1.jpg';
import personalModeBackGround from './assets/background2.jpg';
const { default: styled } = require("styled-components");


export const MessagesArea = styled.div`
overflow: auto;
height: 700px;
background-image: url(${props => props.business ? businessModeBackGround : personalModeBackGround} );
background-position: center;
`

export const SingleMessageWrapper = styled.div`
display: flex;
justify-content: ${props => props.isOwnMessage ? 'flex-end' : 'flex-start'};
margin-left: 10px;
margin-right: 10px;
margin-top: 5px;
margin-bottom: 25px;
padding-top: 5px;
padding-bottom: 5px;
position: relative;
`

export const MessageText = styled.div`
text-align: left;
text-transform: none;
background-color: ${props => props.isOwnMessage ? '#effdde' : 'white'};
padding: 10px 10px 10px 10px;
border-radius: 10px;
margin-left: 5px;
`

export const StyledInput = styled.textarea`
width: 92%;
height: 80px;
outline: none;
margin-top: 20px;
padding-top: 20px;
padding-bottom: 20px;
padding-right: 0px;
padding-left: 2%;
background-color: #efefef;
text-align: left;
border: none;
border-radius: 20px;
text-transform: none;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`