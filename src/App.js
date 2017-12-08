import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import data from './components/data.json'
import Employee from './components/Employee'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      json:[],

    }

  }
  componentDidMount(){
    this.setState({
      json:data
    })
  }
  componentWillUnmount(){
    this.setState({
        json:[]
    })
  }

  render(){
    var employee = {
      display : this.state.view ? 'block': 'none'
    }
    var temp = this.state.json
    temp = temp.map(function(item,index){
        return(
          <Employee
          key={index}
          item={item}
          />
        )
    })

    return(
          <div>{temp}</div>
    )
  }
}

module.exports = App
