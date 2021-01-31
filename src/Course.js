import React from 'react'
import App from './App'
import History from './History'
import Physics from './Physics'
import English from './English'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './style.css'
import physics from './Physics Swamphacks.jpg'
import chemistry from './Chemistry Swamphacks.jpg'
import math from './Math Swamphacks.jpg'
import biology from './Biology Swamphacks.jpg'

function Course() {
    return (
        <div className='body'>
            <Router>
                <Route path='/forum' exact>
                    <div className='banner-home'>EDUCONNECT</div>
                            <div className='cards'>
            <div className='subject-card card'>
                <img className='photo' src={physics}></img>
                <div className='footer'>
                    <Switch>
                    <Link style={{ textDecoration: 'none' }} to='/forum/physics'><span className='desc'>Go to Physics</span></Link>
                </Switch>
                </div>
            </div>

            <div className='subject-card card'>
                <img className='photo' src={biology}></img>
                <div className='footer'>
                    <Switch>
                    <Link style={{ textDecoration: 'none' }} to='/forum/english'><span className='desc'>Go to Biology</span></Link>
                </Switch>
                </div>
            </div>

            <div className='subject-card card'>
                <img className='photo' src={math}></img>
                <div className='footer'>
                    <Switch>
                    <Link style={{ textDecoration: 'none' }} to='/forum/math'><span className='desc'>Go to Math</span></Link>
                </Switch>
                </div>
            </div>

            <div className='subject-card card'>
                <img className='photo' src={chemistry}></img>
                <div className='footer'>
                    <Switch>
                    <Link style={{ textDecoration: 'none' }} to='/forum/history'><span className='desc'>Go to Chemistry</span></Link>
                </Switch>
                </div>
            </div>

            </div>

            
            
        

  
                
                </Route>
                
                <Route path='/forum/math'>
                    <App />
                </Route>

                <Route path='/forum/history'>
                    <History />
                </Route>

                <Route path='/forum/physics'>
                    <Physics />
                </Route>

                <Route path='/forum/english'>
                    <English />
                </Route>
            </Router>
            
            
        </div>
    )
}

export default Course
