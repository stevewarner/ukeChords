import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

  handleNoteChange = (e) => {
    this.props.handleChordChange("note", e.target.value);
  }

  handleQualityChange = (e) => {
    this.props.handleChordChange("quality", e.target.value);
  }

  render() {
    return (
      <form>
        <select value={this.props.chord.note} onChange={this.handleNoteChange}>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
            <option value="G">G</option>
          </select>

        <select defaultValue={this.props.chord.quality} onChange={this.handleQualityChange}>
          <option value="maj">maj</option>
          <option value="m">m</option>
          <option value="maj7">maj7</option>
          <option value="m7">m7</option>
          <option value="7">7</option>
          
        </select>
      </form>
    )
  }
}

Form.propTypes = {
    chord: PropTypes.shape({
      note: PropTypes.string,
      quality: PropTypes.string
    }),
    handleChordChange: PropTypes.func.isRequired
}

export default Form;