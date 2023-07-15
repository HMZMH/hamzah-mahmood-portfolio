import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SocialLinks from './components/SocialsLinks.js';
import BackgroundImages from './components/BackgroundImages.js';
import AboutMe from './components/AboutMe.js';
import MyName from './images/My_Name.png';

function PageDark() {
  document.getElementById("DarkButton").style.display = "none";
  document.getElementById("LightButton").style.display = "block";
  document.body.style.backgroundImage = 'linear-gradient(to top, #232323, black)';
  document.body.style.color = 'white';
}

function PageLight() {
  document.getElementById("DarkButton").style.display = "block";
  document.getElementById("LightButton").style.display = "none";
  document.body.style.backgroundImage = 'linear-gradient(to top, white, gray)';
}

function App() {
  return (

    <div class="d-flex justify-content-center">

      <SocialLinks/>

      <div className='Accessibility-Menu'>
          <button type="button" id='DarkButton' class="btn btn-dark" onClick={PageDark} style={{fontWeight:'bold'}}>Dark</button>
          <button type="button" id='LightButton' class="btn btn-light" onClick={PageLight} style={{display:'none'}}>Light</button>
      </div>

      <img src={MyName} id='NameImage' alt="My name" class="img-fluid" style={{zIndex:'0', marginTop:'40vh', position:'absolute'}}/>

      <a class="hover-link">
        <BackgroundImages/>
      </a>

      <div class="AboutDiv">
        <AboutMe/>
      </div>

    </div>

  );
}

export default App;
