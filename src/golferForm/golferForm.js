import React, { Component} from 'react';
import polyglot from '../en-us';

export default class GolferForm extends Component {
  constructor() {
    super();

    this.state = {
      newGolferFormOpen: false,
    }
  }

  openNewGolferForm = () => {
    this.setState(() => ({
      newGolferFormOpen: true,
    }));
  };

  render() {
    return (
      <div>
        <button onClick={() => this.openNewGolferForm()}>{polyglot.t('BUTTONS.ADD_NEW')}</button>
        {this.state.newGolferFormOpen &&
          <form>
            <input type="text" placeholder={polyglot.t('FORMS.LABELS.FIRST_NAME')} />
            <input type="text" placeholder={polyglot.t('FORMS.LABELS.LAST_NAME')} />
            <input type="number" placeholder={polyglot.t('FORMS.LABELS.SCORE')} />
          </form>
        }
      </div>
    )
  }
}