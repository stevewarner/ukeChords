import React, { Component } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Chord from './components/Chord';
import './App.css';

class App extends Component {

  state = {
    chord: {
      note: 'C',
      quality: 'maj',
    }
  }

  handleChordChange = (property, value) => {
    //console.log(property, value);
    this.setState({
      chord: {
        note: this.state.chord.note,
        quality: this.state.chord.quality,
        [property]: value
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Form 
          chord={this.state.chord} 
          handleChordChange={this.handleChordChange}
        />
        <Chord name={this.state.chord}/>
      </div>
    );
  }
}

export default App;
