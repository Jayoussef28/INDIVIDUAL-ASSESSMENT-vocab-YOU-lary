import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDOM';

const emptyVocab = () => {
  const domString = '<h1>No cards</h1>';
  renderToDOM('#store', domString);
};

const showVocab = (array) => {
  clearDom();

  let domString = '';
  array.forEach((item) => {
    domString += `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <h6 class="card-description">${item.definition}</h6>
            <h7 class="card-text">${item.language}</h7>
            <hr>
            <button id="edit-vocab-btn--${item.firebaseKey}" class="btn btn-link">Edit</button>
            <button id="delete-vocab-btn--${item.firebaseKey}" class="btn btn-link">Delete</button>
        </div>
      </div>`;
  });
  renderToDOM('#vocab-card', domString);
};

export { showVocab, emptyVocab };
