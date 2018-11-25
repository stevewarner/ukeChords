import React from 'react';
import PropTypes from 'prop-types';

const Chord = props => (
  <div>
    <h2>{props.name.note + props.name.quality}</h2>
    <img src={require('../images/' + props.name.quality + '/' + props.name.note + '.png')} alt='chord diagram'/>
  </div>
);

Chord.propTypes = {
  name: PropTypes.shape({
    note: PropTypes.string,
    quality: PropTypes.string
  }),
};

export default Chord;
