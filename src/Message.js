import React from 'react'
import './Message.css'
import dame from './dame.jpg'

function Message({ message, username }) {
    const isUser = username === message.username

    return (
        <div className={`message ${isUser && 'message__user'}`}>
            <div className='message-top'>
                <img className='profile-image' src={dame}></img>
                <div className='message-top-name-title'>
                    <div className='title'>{message.messageTitle} </div>
                    <div className='username'>{message.username}</div>
                </div>
            </div>
            <div className='message-text'>{message.message}</div>
        </div>
    )
}

export default Message
