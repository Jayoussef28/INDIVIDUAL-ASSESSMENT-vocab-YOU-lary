import renderToDOM from '../../utils/renderToDOM';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="main-container">
  <div id="filter-button-container"></div>
  <div id="vocab-card"></div>
  <div id="form-container"></div>
  </div`;

  renderToDOM('#app', domString);
};

export default domBuilder;
