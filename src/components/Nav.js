import React from 'react'

class Nav extends React.Component {

  handleDateSubmit = (e) => {
    e.preventDefault()
    this.props.submitFunction(e.target.firstElementChild.value)
  }

  render(){
    return(
      <div>
        <h2>Asteroid Race</h2>
        <label> Choose a date!</label><br></br>
        <form onSubmit={this.handleDateSubmit}>
          <input type='date'></input>
          <input type='submit' value='RACE!'></input>
        </form>
      </div>
    )
  }
}

export default Nav
