import React, { Component} from 'react';
import polyglot from '../en-us';
import { initialGolfer } from './constants';
import styles from '../styles';

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

    this.props.onSubmit(this.state.golferToAdd);

    this.closeNewGolferForm();
  };

  handleChange = (e, key) => {
    const golferToAdd = { ...this.state.golferToAdd };
    golferToAdd[key] = e.target.value;
    this.setState(() => ({ golferToAdd }));
  };

  render() {
    return (
      <div style={styles.baseStyles}>
        <div className="pageActionsGroup">
          {!this.state.newGolferFormOpen &&
            <button
              type="button"
              onClick={() => this.openNewGolferForm()}
            >
              {polyglot.t('BUTTONS.ADD_NEW')}
            </button>
          }
        </div>
        {this.state.newGolferFormOpen &&
          <span>
            <form className="newGolferForm">
              <label className="formInputLabel">
                <span>{polyglot.t('FORMS.LABELS.FIRST_NAME')}</span>
                <input
                  type="text"
                  placeholder={polyglot.t('FORMS.LABELS.FIRST_NAME')}
                  value={this.state.golferToAdd.firstName}
                  onChange={e => this.handleChange(e, 'firstName')}
                />
              </label>
              <label className="formInputLabel">
              <span>{polyglot.t('FORMS.LABELS.LAST_NAME')}</span>
                <input
                  type="text"
                  placeholder={polyglot.t('FORMS.LABELS.LAST_NAME')}
                  value={this.state.golferToAdd.lastName}
                  onChange={e => this.handleChange(e, 'lastName')}
                />
              </label>
              <label className="formInputLabel">
              <span>{polyglot.t('FORMS.LABELS.SCORE')}</span>
                <input
                  type="number"
                  placeholder={polyglot.t('FORMS.LABELS.SCORE')}
                  value={this.state.golferToAdd.score}
                  onChange={e => this.handleChange(e, 'score')}
                />
              </label>
              <div className="formButtonGroup">
                <button
                  type="submit"
                  className="formButton"
                  onClick={() => this.saveNewGolferForm()}
                >
                  {polyglot.t('BUTTONS.SAVE')}
                </button>
                <button
                  type="button"
                  className="formButton"
                  onClick={() => this.closeNewGolferForm()}
                  style={styles.textButtonStyle}
                >
                  {polyglot.t('BUTTONS.CANCEL')}
                </button>
              </div>
            </form>
          </span>
        }
      </div>
    )
  }
}