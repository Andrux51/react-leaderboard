import Polyglot from 'node-polyglot';

const phrases = {
  BUTTONS: {
    ADD_NEW: 'Add New Golfer',
    DELETE: 'Del',
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
};

export default new Polyglot({phrases});
