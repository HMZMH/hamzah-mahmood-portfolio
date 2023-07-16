import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SocialLinks from './components/SocialsLinks.js';
import BackgroundImages from './components/BackgroundImages.js';
import AboutMe from './components/AboutMe.js';

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

    <div className="container-fluid">

        <div className="row justify-content-start">

          <SocialLinks/>
        
        </div>

        <div className="row justify-content-center">

            <a className="background-images-div-style">
              
              <BackgroundImages/>
            
            </a>
            
            <div className="about-me-div-style">
              
              <AboutMe/>
            
            </div>

          </div>

        <div className='row justify-content-center'>

          <div className='button-style'>
              
              <button type="button" id='DarkButton' className="btn btn-dark" onClick={PageDark} style={{fontWeight:'bold'}}>
                Dark
              </button>

              <button type="button" id='LightButton' className="btn btn-light" onClick={PageLight} style={{display:'none'}}>
                Light
              </button>
          
          </div>

        </div>
        
      </div>

  );

}

export default App;
