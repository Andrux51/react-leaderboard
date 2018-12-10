import React, { Component } from 'react';
import polyglot from '../en-us';
import styles from '../styles';

export default class Leaderboard extends Component {
  deleteGolfer = golfer => {
    this.setState(() => {

    });
    console.log('hi');
  };

  render() {
    return (
      <table style={styles.tableStyle}>
        <thead>
          <tr>
            <th>{polyglot.t('NAME')}</th>
            <th>{polyglot.t('SCORE')}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.golfers.map((golfer, i) => {
            return <tr key={i}>
              <td>{`${golfer.lastName}, ${golfer.firstName}`}</td>
              <td>{golfer.score}</td>
              <td>
                <button
                  onClick={() => this.deleteGolfer(golfer.id)}
                  style={styles.deleteButtonStyle}
                >
                  {polyglot.t('BUTTONS.DELETE')}
                </button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    )
  }
}