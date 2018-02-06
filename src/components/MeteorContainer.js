import React from 'react';
import Meteor from './Meteor'
import Nav from './Nav'
var API_KEY = process.env.REACT_APP_API_KEY
console.log(process.env)
class MeteorContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      meteorData: null,
      submitDate: '2018-01-01',
      showMeteor: true
    }
  }
  //LIFECYCLE
  componentDidMount(){

    console.log(API_KEY)
    fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.state.submitDate}&end_date=${this.state.submitDate}&api_key=${API_KEY}`)
    .then(res => res.json())
    .then( data => this.setState({
      meteorData: data.near_earth_objects
    }))
  }

  //HELPERS
  formatData(){

    if (this.state.meteorData !== null && this.state.meteorData !== undefined){
      debugger
      return this.state.meteorData[this.state.submitDate].map( (meteor) => {
        return <Meteor clickFn= {this.meteorWoah} name={meteor.name} velocity={meteor.close_approach_data[0].relative_velocity.miles_per_hour} />
      })
    }
  }

  navBarSubmitState = (value) => {
    this.setState({
      submitDate: value
    })
  }

  meteorWoah = () => {
    this.setState(prevState => ({
      showMeteor: !prevState.showMeteor
    }));
  }

  render(){
    let picture;
    console.log(this.state.showMeteor)
    if (this.state.showMeteor){
      picture = <div>
      <h1> Thats a fast one! </h1>
      <img src='./asteroid.jpg' />
      </div>
    }
    return (
    <div>
        {picture}
        <Nav submitFunction={this.navBarSubmitState} />
      <div className='meteor-container'>
        {this.state.meteorData !== null && this.formatData()}
      </div>
    </div>)
  }
}

export default MeteorContainer
