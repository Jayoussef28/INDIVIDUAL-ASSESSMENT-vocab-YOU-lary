import {
  deleteVocab,
  getVocab,
  getSingleVocab,
  filterHTML,
  filterPython,
  filterJavaScript

} from '../api/vocabData';
import addVocabForm from '../components/forms/addVocabForm';
import { showVocab } from '../pages/vocab';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-vocab')) {
    // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE vocab', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocab(firebaseKey).then(() => {
          getVocab(user.id).then(showVocab);
        });
      }
    }

    if (e.target.id.includes('edit-vocab-btn')) {
      const [, firebaseKey] = e.target.id.split('--');
      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(vocabObj));
    }

    if (e.target.id.includes('all-vocab')) {
      getVocab(user.uid).then((vocab) => showVocab(vocab));
    }

    if (e.target.id.includes('html-btn')) {
      filterHTML().then(showVocab);
    }

    if (e.target.id.includes('javascript-btn')) {
      filterJavaScript().then(showVocab);
    }

    if (e.target.id.includes('python-btn')) {
      filterPython().then(showVocab);
    }
  });
};

export default domEvents;
