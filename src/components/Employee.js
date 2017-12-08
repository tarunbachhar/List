import React from 'react'

class Employee extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      view:false
    }
    this.showEmployee =this.showEmployee.bind(this)
  }
  showEmployee(){
    this.setState({
      view:!this.state.view
    })
  }
  render(){
    var temp = {
      display: this.state.view ? 'block' : 'none'
    }
    return(

          <div>
          <div className="battan"><button className="btn btn-primary" onClick={this.showEmployee}>Employee</button></div>
          <div className="three" style={temp}>
           <h1 className="one">Name :</h1><h2 className="two">{this.props.item.name}</h2><br/>
           <h1 className="one">Age :</h1><h2 className="two">{this.props.item.age}</h2><br/>
           <h1 className="one">Address :</h1><h2 className="two">{this.props.item.address}</h2><br/>
           <h1 className="one">contactNo :</h1><h2 className="two">{this.props.item.contactNo}</h2><br/>
          </div>
          </div>

    )
  }
}

module.exports = Employee
