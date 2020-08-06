import React, { useState } from 'react';
import { SingleMessageWrapper, MessageText } from '../../CommonComponents/Backgrounds';
import './Message.css';
import { Avatar } from '../../CommonComponents/Pictures';
import { MessageAuthorName } from '../../CommonComponents/Titles';
import { Cross, Button } from '../../CommonComponents/Buttons';
import { deleteMessage, updateMessage } from '../../../api';
import { useFormik } from 'formik';

const validate = values => {
    const errors = {};
    if (!values.messageEdit) {
        errors.messageEdit = 'This field is required';
    }
    return errors;
}

export const Message = (props) => {

    const [isEditMode, setEditMode] = useState(false);

    const handleEditMode = () => {
        formik.handleReset();
        setEditMode(!isEditMode);
    }    

    const handleMessageDelete = async () => {
        await deleteMessage(props.id);
        props.refreshMessages();
    }

    const formik = useFormik({
        initialValues: {
            messageEdit: props.message
        },
        validate,
        onSubmit: async (values) => {
            handleEditMode()
            await updateMessage(props.id, props.userData, values.messageEdit, props.isBusinessMode)
            props.refreshMessages();
        }
    });   

    return (
        <div>
            <SingleMessageWrapper isOwnMessage={props.isOwnMessage}>
                <Avatar src={props.avatar} />
                {props.isOwnMessage ? <Cross className='crossButton' onClick={handleMessageDelete} /> : null}
                <MessageText isOwnMessage={props.isOwnMessage}>
                    <MessageAuthorName>{props.isOwnMessage ? 'Me' : props.name}</MessageAuthorName>
                    <br />
                    {
                        isEditMode && props.isOwnMessage
                        ? <form onSubmit={formik.handleSubmit}>
                        <div>
                            <textarea className='inputEdit'
                                id="messageEdit"
                                name="messageEdit"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.messageEdit}
                                onBlur={formik.handleBlur}
                            />
                        </div>                        
                    </form> 
                        : props.message
                    }
                </MessageText>
                {
                    props.isOwnMessage 
                ? <Button verySmall className='editOrSaveButton' onClick={isEditMode ? formik.handleSubmit : handleEditMode}>{isEditMode ? 'Save' : 'Edit'}</Button> 
                    : null
                }
                {
                   isEditMode ? <Button verySmall className='cancelButton' onClick={handleEditMode}>Cancel</Button>  : null 
                }
            </SingleMessageWrapper>
        </div>

    )
}



