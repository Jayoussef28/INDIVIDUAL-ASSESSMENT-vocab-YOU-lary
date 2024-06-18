import renderToDOM from '../../utils/renderToDOM';

const navBar = () => {
  const domString = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-5">
    <div class="container-fluid">
      <a class="navbar-brand title" href="#">Vocab-YOU-lary!</a>
        
          <a class="nav-link" href="#" id="create-entry">
            Create Entry 
          </a>
           <a class="nav-link" href="#" id="all-vocab">
            All Vocab <span class="sr-only">(current)</span>
          </a>
      
          <div id="logout-button"></div>
        </div>
      
      </nav>`;
  renderToDOM('#navigation', domString);
};

export default navBar;
