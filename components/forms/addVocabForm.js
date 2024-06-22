import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDOM';

// USING THIS FORM FOR BOTH CREATE AND UPDATE
const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `update-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="title">Vocab Word</label>
        <input type="text" class="form-control" id="title" aria-describedby="vocabWord" placeholder="Enter Vocab Word" value="${obj.title || ''}" required>
      </div>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Vocab Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div>
      <div class="form-group">
        <label for="language">Language</label>
        <input type="text" class="form-control" id="language" placeholder="Language" value="${obj.language || ''}" required>
      </div>
      </div>
  
      <button type="submit" class="btn btn-primary">Submit Vocab
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabForm;
