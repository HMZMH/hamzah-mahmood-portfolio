import '../styles/AccessButtons.css';
import 'bootstrap/dist/css/bootstrap.css';

function PageDark() {
    document.getElementById("dark-button").style.display = "none";
    document.getElementById("light-button").style.display = "inline";
    document.body.style.backgroundImage = 'linear-gradient(to right, #232323, black)';
    document.body.style.color = 'white';
  }
  
  function PageLight() {
    document.getElementById("dark-button").style.display = "inline";
    document.getElementById("light-button").style.display = "none";
    document.body.style.backgroundImage = 'linear-gradient(to right, white, gray)';
    document.body.style.color = 'black';
  }

function AccessButtons() {
  return(

    <div id='socials-links' className='img-fluid'>

        <button id='dark-button' className="btn btn-dark" onClick={PageDark}>Dark</button>
        <button id='light-button' className="btn btn-light" onClick={PageLight} style={{display:'none'}}>Light</button>
    
    </div>
  
  );
}
export default AccessButtons;