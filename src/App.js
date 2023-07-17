import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SocialLinks from './components/SocialsLinks.js';
import AboutMe from './components/AboutMe.js';

function PageDark() {
  document.getElementById("dark-button").style.display = "none";
  document.getElementById("light-button").style.display = "block";
  document.body.style.backgroundImage = 'linear-gradient(to top, #232323, black)';
  document.body.style.color = 'white';
}

function PageLight() {
  document.getElementById("dark-button").style.display = "block";
  document.getElementById("light-button").style.display = "none";
  document.body.style.backgroundImage = 'linear-gradient(to top, white, gray)';
}

function App() {
  return (

    <div className="container-fluid">

        <div className="row justify-content-start">
            <div id='social-links-div'><SocialLinks/></div>
          </div>

          <div className="row justify-content-center">
              <div id="about-me-div"><AboutMe/></div>
            </div>

          <div className='row justify-content-start'>
            <div id='app-buttons'>    
                <button id='dark-button' className="btn btn-dark" onClick={PageDark}>Dark</button>
                <button id='light-button' className="btn btn-light" onClick={PageLight} style={{display:'none'}}>Light</button>
            </div>
          </div>
        
      </div>

  );
}
export default App;
