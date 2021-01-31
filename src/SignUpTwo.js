import { Input } from '@material-ui/core'
import { React, useEffect, useState } from 'react'

function SignUpTwo() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <Input value={username} onChange={event => setUsername(event.target.value)} placeholder='username'></Input>
                    <br></br>
            <Input value={email} onChange={event => setEmail(event.target.value)} placeholder='email'></Input>
                    <br></br>
            <Input value={password} onChange={event => setPassword(event.target.value)} placeholder='password'></Input>           
        </div>
    )
}

export default SignUpTwo
