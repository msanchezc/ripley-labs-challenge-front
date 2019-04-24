import React from 'react';
import io from 'socket.io-client'
import Weather from './weather';
import Map from './map';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      weather: {
        Santiago: null,
        Zurich: null,
        Auckland: null,
        Sydney: null,
        Londres: null,
        Georgia: null
      }
    }
  }

  componentDidMount() {
    this.socket = io('https://ripley-labs-challenge.herokuapp.com');
    this.socket.on('update', data => {
      this.setState({weather: data});
      console.log(this.state.weather);
    })
  }

  render () {
    return (
      <div className="App">
        <div className="App-main">
          { this.state.weather.Santiago && <Weather weather={this.state.weather.Santiago} /> }
          { this.state.weather.Zurich && <Weather weather={this.state.weather.Zurich} /> }
          { this.state.weather.Auckland && <Weather weather={this.state.weather.Auckland} /> }
          { this.state.weather.Sydney && <Weather weather={this.state.weather.Sydney} /> }
          { this.state.weather.Londres && <Weather weather={this.state.weather.Londres} /> }
          { this.state.weather.Georgia && <Weather weather={this.state.weather.Georgia} /> }
        </div>
        
        <Map />
      </div>
    )
  }
}

export default App;
