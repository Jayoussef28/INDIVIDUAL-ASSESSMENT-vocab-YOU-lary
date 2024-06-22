import renderToDOM from '../../utils/renderToDOM';

const filterButtons = () => {
  const domString = `
  <div class="filter">

    <button type="button" class="btn btn-outline-info" id="html-btn">HTML</button>
    <button type="button" class="btn btn-outline-info" id="javascript-btn">JavaScript</button>
    <button type="button" class="btn btn-outline-info" id="python-btn">Python</button>
</div>

  `;
  renderToDOM('#filter-button-container', domString);
};

export default filterButtons;
