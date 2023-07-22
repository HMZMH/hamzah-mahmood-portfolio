import '../styles/AccessButtons.css';
import 'bootstrap/dist/css/bootstrap.css';

function PageDark() {
    document.getElementById("dark-button").style.display = "none";
    document.getElementById("light-button").style.display = "inline";
    document.body.style.backgroundImage = 'linear-gradient(to top left, black, darkcyan)';
    document.body.style.color = 'white';
    document.querySelectorAll('a').forEach(link => link.style.color = 'white');
  }
  
  function PageLight() {
    document.getElementById("dark-button").style.display = "inline";
    document.getElementById("light-button").style.display = "none";
    document.body.style.backgroundImage = 'linear-gradient(to bottom right, white, cyan)';
    document.body.style.color = 'black';
    document.querySelectorAll('a').forEach(link => link.style.color = 'black');

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