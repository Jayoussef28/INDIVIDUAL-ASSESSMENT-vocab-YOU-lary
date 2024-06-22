import { getVocab } from '../api/vocabData';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/shared/domBuilder';
import navBar from '../components/shared/navBar';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';
import navigationEvents from '../events/navigationEvents';
import { showVocab } from '../pages/vocab';
import filterButtons from '../components/buttons/filterButtons';

const startApp = (user) => {
  domBuilder();
  domEvents(user);
  formEvents(user);
  filterButtons();
  navBar();
  logoutButton();
  navigationEvents(user);

  getVocab(user.uid).then((vocab) => showVocab(vocab));
};

export default startApp;
