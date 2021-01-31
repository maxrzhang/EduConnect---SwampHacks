import { Button, Input } from '@material-ui/core'
import React from 'react'
import { useState, useEffect } from 'react'
import { db, auth } from './firebase'
import Course from './Course'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

function SignUp() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscirbe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                console.log(authUser)
                setUser(authUser)

            } else {
                setUser(null)
            }
        })

        return () => {
            unsubscirbe()
        }
    }, [user, username])

    const SignUp = (event) => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((authUser) => {
            return authUser.user.updateProfile({
                displayName: username
            })
        })
        .catch((error) => alert(error.message))
    }

    const SignIn = (event) => {
        event.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
        .catch((error) => alert(error.message))

    }

    return (
        <div>
            
                <Input value={username} onChange={event => setUsername(event.target.value)} placeholder='username'></Input>
                    <br></br>
                <Input value={email} onChange={event => setEmail(event.target.value)} placeholder='email'></Input>
                    <br></br>
                <Input value={password} onChange={event => setPassword(event.target.value)} placeholder='password'></Input>
                    <br></br>
                    <br></br>
                {user ? (
                <Button onClick={() => {auth.signOut()}} variant='outlined'>Log out</Button>
                ): (
                <Button onClick={SignUp} variant='outlined'>Sign Up</Button>
                )}

                <form>
                    <Input value={username} onChange={event => setUsername(event.target.value)} placeholder='username'></Input>
                    <br></br>
                <Input value={password} onChange={event => setPassword(event.target.value)} placeholder='password'></Input>
                <Button onClick={SignIn} variant='outlined'>Log in</Button>
                </form>
        </div>
    )
    
}

export default SignUp
