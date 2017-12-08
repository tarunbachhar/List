import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router,Route,NavLink } from  'react-router-dom'
import App from './App.js'
import Collection from './Collection.js'
import './style.css'

ReactDOM.render(
  <Router>
  <div>
   <nav>
   <button className="btn btn-success base"><NavLink to='/'>base</NavLink></button><br/>
   <button className="btn btn-success routin"><NavLink to='/collection'>Routing</NavLink></button>
   </nav>
   <div>
   <Route exact path='/' component={App}/>
   <Route exact path='/collection' component={Collection}/>
  </div>
  </div>
  </Router>,
  document.getElementById('root')
)
