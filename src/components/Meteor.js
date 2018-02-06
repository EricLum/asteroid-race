import React from 'react'
import {CardPanel} from 'react-materialize'
class Meteor extends React.Component {

  handleFlip = (e) => {
    this.props.clickFn()
  }

  render(){
    return(
      <CardPanel className = 'meteor teal lighten-4 white-text' onClick = {this.handleFlip}>
        <h3>{this.props.name}</h3>
        <h4>Speed: {Math.round(this.props.velocity)} miles per hour</h4>
      </CardPanel>
    )
  }
}

export default Meteor
