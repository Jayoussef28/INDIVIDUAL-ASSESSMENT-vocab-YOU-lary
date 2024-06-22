import { signIn } from '../../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `<h1 id = "loginHeader"> Welcome To Vocab-YOU-lary!</h1> 
  <br> 
  <button id="google-auth" class="btn btn-danger">LOGIN</button>`;
  document.querySelector('#app').innerHTML = domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
