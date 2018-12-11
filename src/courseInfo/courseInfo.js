import React, { Component } from 'react';

export default class CourseInfo extends Component {
  render() {
    const infoStyle = {
      margin: 0,
    };

    return (
      <div style={{marginTop: 20}}>
        <h3 style={infoStyle}>{this.props.info.name}</h3>
        <p style={infoStyle}>Par: {this.props.info.par}</p>
        <p style={infoStyle}>Location: {this.props.info.location}</p>
      </div>
    )
  }
}