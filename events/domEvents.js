import { deleteVocab, getVocab } from '../api/vocabData';
import { showVocab } from '../pages/vocab';

const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-vocab')) {
    // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE vocab', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteVocab(firebaseKey).then(() => {
          getVocab().then((vocab) => showVocab(vocab));
        });
      }
    }
  });
};

export default domEvents;
