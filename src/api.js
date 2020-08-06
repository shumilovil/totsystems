import axios from 'axios';

export const authorise = (formValues) => {
    return axios.get('http://localhost:4001/users/')
    .then(response => response.data);
}

export const getMessages = () => {
    return axios.get('http://localhost:4001/messages/')
    .then(response => response.data);
}


export const addMessage = (message, author, isBusiness) => {
    return axios.post('http://localhost:4001/messages/', {
        message,
        author,
        isBusiness
    })
    .then(response => response.data);
}

export const deleteMessage = (messageId) => {
    return axios.delete(`http://localhost:4001/messages/${messageId}`)
}

