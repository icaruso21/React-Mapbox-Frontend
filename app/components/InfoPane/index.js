/**
 *
 * InfoPane
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function InfoPane(props) {
  return (<div>
      <p> Latitude: {props.lat} </p>
      <p> Longitude: {props.lon} </p>
      <p> Zoom: {props.zm} </p>
    </div>
  )
}

InfoPane.propTypes = {};

export default InfoPane;
