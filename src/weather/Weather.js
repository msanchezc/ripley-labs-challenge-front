import React from 'react'

class Weather extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <p>Time: {this.props.weather.time}</p>
        <p>Temperature: {this.props.weather.temperature}</p>
      </div>
    )
  }
}

export default Weather