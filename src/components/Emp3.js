import React from 'react'
import data from './data.json'

class Emp3 extends React.Component {
  render(){
    return(
      <div className="three">
       <h1 className="one">Name :</h1><h2 className="two">{data[2].name}</h2><br/>
       <h1 className="one">Age :</h1><h2 className="two">{data[2].age}</h2><br/>
       <h1 className="one">Address :</h1><h2 className="two">{data[2].address}</h2><br/>
       <h1 className="one">contactNo :</h1><h2 className="two">{data[2].contactNo}</h2><br/>
      </div>
    )
  }
}

module.exports = Emp3
