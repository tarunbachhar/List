import React from 'react'
import { BrowserRouter as Router,Route,NavLink } from  'react-router-dom'
import Emp1 from './components/Emp1'
import Emp2 from './components/Emp2'
import Emp3 from './components/Emp3'
import Emp4 from './components/Emp4'
import './style.css'

class Collection extends React.Component {
  render(){
    return(
       <Router>
         <div>
          <nav>
            <NavLink className="emp1" to='/emp1'>Emp1</NavLink>
            <NavLink className="emp2" to='/emp2'>Emp2</NavLink>
            <NavLink className="emp3" to='/emp3'>Emp3</NavLink>
            <NavLink className="emp4" to='/emp4'>Emp4</NavLink>
          </nav>
          <div>
           <Route exact path='/emp1' component={Emp1}/>
           <Route exact path='/emp2' component={Emp2}/>
           <Route exact path='/emp3' component={Emp3}/>
           <Route exact path='/emp4' component={Emp4}/>
          </div>
         </div>
       </Router>
    )
  }
}

module.exports = Collection
