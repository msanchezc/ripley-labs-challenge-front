import React from 'react'
import './Weather.css'

class Weather extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="Weather">
        <h1>{this.props.weather.city}</h1>
        <small>{this.props.weather.timezone}</small>
        <h2>{this.props.weather.time}</h2>
        {this.props.weather.summary}
        <p>{this.props.weather.temperature} &#8451;</p>
      </div>
    )
  }
}

export default Weather