import React, { Component } from 'react';
import { append, last, reject } from 'ramda';
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
        score: 72,
      }, {
        id: 1,
        firstName: 'Joe',
        lastName: 'Daly',
        score: 75,
      }, {
        id: 2,
        firstName: 'Bill',
        lastName: 'Preston',
        score: 75,
      }, {
        id: 3,
        firstName: 'Ted',
        lastName: 'Logan',
        score: 70,
      }],
    };
  }

  addGolfer = golfer => {
    // future: form validation error messages
    if(!golfer.lastName || !golfer.firstName) return false;

    // future: could definitely be improved with a GUID/UUID type id
    golfer.id = +1 + last(this.state.golfers).id;

    this.setState(() => ({
      golfers: append(golfer, this.state.golfers),
    }));
  };

  deleteGolfer = id => {
    this.setState(() => ({
      golfers: reject(golfer => golfer.id === id, this.state.golfers),
    }));
  };

  render() {
    return (
      <div id="appMain" style={styles.appStyle}>
        <h1 style={styles.baseStyle}>{polyglot.t('APP_NAME')}</h1>
        <GolferForm onSubmit={golfer => this.addGolfer(golfer)} />
        <Leaderboard golfers={this.state.golfers} coursePar={this.state.courseInfo.par} onDelete={id => this.deleteGolfer(id)} />
      </div>
    );
  }
};
