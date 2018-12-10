import React, { Component } from 'react';
import polyglot from '../en-us';
import styles from '../styles';

export default class Leaderboard extends Component {
  deleteGolfer = golfer => {
    this.setState(() => {

    });
  };

  render() {
    return (
      <table style={styles.tableStyle}>
        <thead>
          <tr style={styles.tableRowStyle}>
            <th style={{ ...styles.tableCellStyle, borderTop: 0, }}>{polyglot.t('NAME')}</th>
            <th style={{ ...styles.tableCellStyle, borderTop: 0, }}>{polyglot.t('SCORE')}</th>
            <th style={{ ...styles.tableCellStyle, borderTop: 0, }}></th>
          </tr>
        </thead>
        <tbody>
          {this.props.golfers.map((golfer, i) => {
            return <tr key={i} style={styles.tableRowStyle}>
              <td style={{ ...styles.tableCellStyle, borderTop: 0, }}>{`${golfer.lastName}, ${golfer.firstName}`}</td>
              <td style={{ ...styles.tableCellStyle, borderTop: 0, }}>{golfer.score}</td>
              <td style={{ ...styles.tableCellStyle, borderTop: 0, borderRight: 0 }}>
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