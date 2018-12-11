import React, { Component } from 'react';
import { ascend, prop, sortWith } from 'ramda';
import polyglot from '../en-us';
import styles from '../styles';

export default class Leaderboard extends Component {
  deleteGolfer = id => {
    this.props.onDelete(id);
  };

  getSortedGolfers = () => {
    const sortFields = [
      ascend(prop('score')),
      ascend(prop('lastName')),
    ];

    return sortWith(sortFields, this.props.golfers);
  };

  getStanding = golfer => {
    const standing = golfer.score - this.props.coursePar;
    return (standing <= 0 ? '' : '+') + standing;
  };

  stripeEvenRows = index => {
    // because index 0 (even) is row 1 (odd) - the logic might *look* backwards but it's not
    return index % 2 === 0 ? styles.oddRow : styles.evenRow;
  };

  render() {
    return (
      <table style={styles.tableStyle}>
        <thead>
          <tr>
            <th style={styles.tableHeaderStyle}>{polyglot.t('NAME')}</th>
            <th style={styles.tableHeaderStyle}>{polyglot.t('SCORE')}</th>
            <th style={styles.tableHeaderStyle}>{polyglot.t('STANDING')}</th>
            <th style={styles.tableHeaderLastChildStyle}></th>
          </tr>
        </thead>
        <tbody>
          {this.getSortedGolfers().map((golfer, i) => {
            return <tr key={golfer.id} style={this.stripeEvenRows(i)}>
              <td style={styles.tableCellStyle}>{`${golfer.lastName}, ${golfer.firstName}`}</td>
              <td style={styles.tableCellStyle}>{golfer.score}</td>
              <td style={styles.tableCellStyle}>{this.getStanding(golfer)}</td>
              <td style={styles.tableCellLastChildStyle}>
                <button
                  onClick={() => this.deleteGolfer(golfer.id)}
                  style={styles.textButtonStyle}
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