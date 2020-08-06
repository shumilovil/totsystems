import React, { useState, useEffect } from 'react';
import { Title } from '../CommonComponents/Titles';
import { Avatar } from '../CommonComponents/Pictures';
import './MainArea.css';
import { Button, Option } from '../CommonComponents/Buttons';
import { getMessages, addMessage } from '../../api'
import { Message } from './Message/Message';
import { MessagesArea, StyledInput } from '../CommonComponents/Backgrounds';
import { useFormik } from 'formik';


const validate = values => {
    const errors = {};
    if (!values.message) {
        errors.message = 'This field is required';
    }    

    return errors;
}

export const MainArea = (props) => {

    const [isBusinessMode, setBusinessMode] = useState(true);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        getMessages().then(response => {
            setMessages(response)
        })
    }, [isBusinessMode])

    const toggleBusinessMode = () => {
        setBusinessMode(!isBusinessMode)
    }

    const refreshMessages = async () => {
        const newMessages = await getMessages();
        setMessages(newMessages);
    }

    const formik = useFormik({
        initialValues: {
            message: ''
        },
        validate,
        onSubmit: async (values) => {
            await addMessage(values.message, props.userData, isBusinessMode) 
            await refreshMessages();                                 
            formik.handleReset();                                                          
        }
    });

    return (
        <div className='mainArea'>
            <div className='extraMainAreaWrapper'>
                <div className='avatarWrapper'>
                    <Avatar big src={props.userData.avatar} />
                    <Title>{props.userData.name}</Title>
                </div>
                <div className='logoutWrapper'>
                    <Button onClick={props.logOut}>Log Out</Button>
                </div>
                <div className='communicationModes'>
                    <Option chosen={isBusinessMode ? true : false} onClick={isBusinessMode ? null : toggleBusinessMode}>Business Themes</Option>
                    <Option chosen={!isBusinessMode ? true : false} onClick={!isBusinessMode ? null : toggleBusinessMode}>Personal Themes</Option>
                </div>
                <MessagesArea business={isBusinessMode ? true : false}>
                    <div className='messagesWrapper'>
                        {
                            messages.map(message => {
                                if (message.isBusiness === isBusinessMode) {
                                    return (
                                        <Message key={message.id}
                                        id={message.id}
                                        message={message.message}
                                        avatar={message.author.avatar} 
                                        name={message.author.name}
                                        isOwnMessage={message.author.id === props.userData.id ? true : false}
                                        refreshMessages={refreshMessages}/>
                                    )
                                } else {
                                    return null
                                }                                
                            })
                        }
                    </div>
                </MessagesArea>
                <form onSubmit={formik.handleSubmit}>
                <div>
                    <StyledInput 
                        id="message"
                        name="message"
                        type="text"
                        placeholder='Type your message here'
                        onChange={formik.handleChange}
                        value={formik.values.message}
                        onBlur={formik.handleBlur}                        
                    />
                </div>               
                <div className="sendMessageButton">
                    <Button big type="submit">Send message</Button>
                </div>
            </form>
            </div>
            
        </div>
    )
}



