import React from 'react';
import { SingleMessageWrapper, MessageText } from '../../CommonComponents/Backgrounds';
import './Message.css';
import { Avatar } from '../../CommonComponents/Pictures';
import { MessageAuthorName } from '../../CommonComponents/Titles';
import { Cross } from '../../CommonComponents/Buttons';
import { deleteMessage } from '../../../api';

export const Message = (props) => {

    const handleMessageDelete = async () => {
        await deleteMessage(props.id);
        await props.refreshMessages();
    }

    return (
        <SingleMessageWrapper isOwnMessage={props.isOwnMessage}>
            <Avatar src={props.avatar} />
            {props.isOwnMessage ? <Cross className='crossButton' onClick={handleMessageDelete}/> : null}
            <MessageText isOwnMessage={props.isOwnMessage}>
                <MessageAuthorName>{props.isOwnMessage ? 'Me' : props.name}</MessageAuthorName>
                <br />
                {props.message}
            </MessageText>
        </SingleMessageWrapper>

    )
}