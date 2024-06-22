import { getVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';
import addVocabForm from '../components/forms/addVocabForm';
import { signOut } from '../utils/auth';

const navigationEvents = () => {
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#all-vocab').addEventListener('click', () => {
    getVocab().then(showVocab);
  });

  document.querySelector('#create-entry').addEventListener('click', () => {
    addVocabForm();
  });
};

export default navigationEvents;
