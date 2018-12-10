import React, { Component} from 'react';
import polyglot from '../en-us';
import { initialGolfer } from './constants';

export default class GolferForm extends Component {
  constructor() {
    super();

    this.state = {
      golferToAdd: initialGolfer,
      newGolferFormOpen: false,
    }
  }

  openNewGolferForm = () => {
    this.setState(() => ({ newGolferFormOpen: true }));
  };

  closeNewGolferForm = () => {
    this.setState(() => ({
      golferToAdd: initialGolfer,
      newGolferFormOpen: false,
    }));
  };

  saveNewGolferForm = () => {
    // TODO: add golfer to leaderboard
    console.log('add golfer', this.state.golferToAdd);

    this.closeNewGolferForm();
  };

  handleChange = (e, key) => {
    const golferToAdd = { ...this.state.golferToAdd };
    golferToAdd[key] = e.target.value;
    this.setState(() => ({ golferToAdd }));
  };

  render() {
    return (
      <div>
        <button onClick={() => this.openNewGolferForm()}>{polyglot.t('BUTTONS.ADD_NEW')}</button>
        {this.state.newGolferFormOpen &&
          <span>
            <button onClick={() => this.saveNewGolferForm()}>{polyglot.t('BUTTONS.SAVE')}</button>
            <button onClick={() => this.closeNewGolferForm()}>{polyglot.t('BUTTONS.CANCEL')}</button>
            <form>
              <input
                type="text"
                placeholder={polyglot.t('FORMS.LABELS.FIRST_NAME')}
                value={this.state.golferToAdd.firstName}
                onChange={e => this.handleChange(e, 'firstName')}
              />
              <input
                type="text"
                placeholder={polyglot.t('FORMS.LABELS.LAST_NAME')}
                value={this.state.golferToAdd.lastName}
                onChange={e => this.handleChange(e, 'lastName')}
              />
              <input
                type="number"
                placeholder={polyglot.t('FORMS.LABELS.SCORE')}
                value={this.state.golferToAdd.score}
                onChange={e => this.handleChange(e, 'score')}
              />
            </form>
          </span>
        }
      </div>
    )
  }
}