import React, { Component } from 'react';
import polyglot from './en-us';
import styles from './styles';
import GolferForm from './golferForm/golferForm';
import Leaderboard from './leaderboard/leaderboard';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      golfers: [{
        id: 0,
        firstName: 'John',
        lastName: 'Daly',
        score: 99,
      }],
    };
  }

  render() {
    return (
      <div id="appMain" style={styles.appStyle}>
        <h1>{polyglot.t('APP_NAME')}</h1>
        <GolferForm />
        <Leaderboard golfers={this.state.golfers} />
      </div>
    );
  }
};
