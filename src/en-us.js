import Polyglot from 'node-polyglot';

const phrases = {
  APP_NAME: 'Super Awesome Golf Leaderboard',
  BUTTONS: {
    ADD_NEW: 'Add New Golfer',
    CANCEL: 'Cancel',
    DELETE: 'Del',
    SAVE: 'Save',
  },
  FORMS: {
    LABELS: {
      FIRST_NAME: 'First Name',
      LAST_NAME: 'Last Name',
      SCORE: 'Score',
    },
  },
  NAME: 'Name',
  SCORE: 'Score',
  STANDING: 'Standing',
};

export default new Polyglot({phrases});
