import '../styles/AccessButtons.css';
import 'bootstrap/dist/css/bootstrap.css';

function PageDark() {
    document.querySelector(".btn.btn-dark").style.display = "none";
    document.querySelector(".btn.btn-light").style.display = "inline";

    document.body.style.backgroundImage = 'linear-gradient(to top left, black, darkcyan)';

    document.querySelectorAll('h1, h2, h3, h4, h5, h6, span, li, td, th, div, strong, em, i, b, a').forEach(element => element.style.color = 'lightcyan');
    document.querySelectorAll('p').forEach(element => element.style.color = 'cyan');
  }
  
  function PageLight() {
    document.querySelector(".btn.btn-dark").style.display = "inline";
    document.querySelector(".btn.btn-light").style.display = "none";

    document.body.style.backgroundImage = 'linear-gradient(to bottom right, white, cyan)';

    document.querySelectorAll('h1, h2, h3, h4, h5, h6, span, li, td, th, div, strong, em, i, b, a').forEach(element => element.style.color = 'black');
    document.querySelectorAll('p').forEach(element => element.style.color = 'darkslategray');
  }

function AccessButtons() {
  return(
    <div>

        <button id='access-button' className="btn btn-dark" onClick={PageDark}>
          Dark
        </button>

        <button id='access-button' className="btn btn-light" onClick={PageLight} style={{display:'none'}}>
          Light
        </button>
    
    </div>
  );
}
export default AccessButtons;