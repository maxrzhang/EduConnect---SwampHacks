import React, { useState, useEffect } from 'react'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Message from './Message';
import { db } from './firebase';
import firebase from 'firebase'
import './style.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'


function English() {
  const[input, setInput] = useState('')
  const [title, setTitle] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState()

  useEffect(() => {
    db.collection('english-messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [] )

  useEffect(() => {
    setUsername(prompt('What is your temporary name?'))
  }, [] )



  const sendPost = (event) => {
    event.preventDefault()

    db.collection('english-messages').add({
      message: input,
      messageTitle: title,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('')
    setTitle('')
    console.log(input)
    console.log(title)
    console.log(messages)
  }

  return (
    <div className="App">
      <div className='banner-english'><span className='subject-name'>Biology</span></div>
      
      <div className='a'>
      <h1 className='greeting'>Hello {username} <Switch>
                    <Link style={{ textDecoration: 'none', color: 'black'}} to='/forum'><Button color='primary' variant='outlined'>Go Back</Button> </Link>
                </Switch>  </h1></div>
      <form className='form'>
        <input  className='input' value={input} onChange={event => setInput(event.target.value)} placeholder="Enter the Post Body"></input>
        <input  className='input' value={title} onChange={event => setTitle(event.target.value)} placeholder="Enter the Post Title"></input>
        <Button disabled={!input} variant='outlined' type='submit' onClick={sendPost}>Post</Button>
      </form>

      {
        messages.map((message) => (
          <Message messageTitle={message} username={username} message={message}/>
        ))
      }

    </div>
  );
}

export default English;
