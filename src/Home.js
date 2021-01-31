import React from 'react'
import App from './App'
import Course from './Course'
import SignUpTwo from './SignUpTwo'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './style.css'
import { Button } from '@material-ui/core'

function Home() {
    return (
        <div className='home'>
            <Router>
                <Route path='/' exact>
                    
                
                <div className='center-text'>
                    <div className='big-logo'>EDUCONNECT</div>
                    <div className='description'>Connecting students with students to create a better way to student.</div>
                    <div className='link'>
                        
                            <Switch>
                    <Link style={{ textDecoration: 'none', color: 'black'}} to='/forum'><Button color='primary' variant='outlined'>Go to Forum</Button> </Link>
                </Switch>   
                                           
                    </div>
                </div>

                
                </Route>
                <Route path='/forum'>
                    <Course/>
                </Route>

                
            </Router>

        </div>

    )
}

export default Home
