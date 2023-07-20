import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SocialLinks from './components/SocialsLinks.js';
import AboutMe from './components/AboutMe.js';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project3 from './components/Project3';

function PageDark() {
  document.getElementById("dark-button").style.display = "none";
  document.getElementById("light-button").style.display = "block";
  document.body.style.backgroundImage = 'linear-gradient(to right, #232323, black)';
  document.body.style.color = 'white';
}

function PageLight() {
  document.getElementById("dark-button").style.display = "block";
  document.getElementById("light-button").style.display = "none";
  document.body.style.backgroundImage = 'linear-gradient(to right, white, gray)';
}

function App() {
  return (

    <div className="container-fluid">

        <div className="row justify-content-start"><SocialLinks/></div>

        <div id='app-buttons' className="row justify-content-start">    
          <button id='dark-button' className="btn btn-dark" onClick={PageDark}>Dark</button>
          <button id='light-button' className="btn btn-light" onClick={PageLight} style={{display:'none'}}>Light</button>
        </div>

        <div id='content-container' className="row">
          <div id='content-div-0' className="col-md-3">
            <AboutMe/>
          </div>
          <div id='content-div-1' className="col-md-3">
            <Project1/>
          </div>
          <div id='content-div-2' className="col-md-3">
            <Project2/>
          </div>
          <div id='content-div-3' className="col-md-3">
            <Project3/>
          </div>
        </div>
        
      </div>

  );
}
export default App;
