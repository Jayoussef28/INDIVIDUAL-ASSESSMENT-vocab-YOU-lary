import { getVocab } from '../api/vocabData';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { showVocab } from '../pages/vocab';
import filterButtons from '../components/buttons/filterButtons';

const startApp = () => {
  domBuilder();
  domEvents();
  formEvents();
  filterButtons();
  navBar();
  logoutButton();
  navigationEvents();

  getVocab().then((vocab) => showVocab(vocab));
};

export default startApp;
