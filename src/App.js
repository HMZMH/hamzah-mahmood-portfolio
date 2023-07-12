import './App.css';
import SocialLinks from './components/SocialsLinks.js';
import NavigationPanel from './components/NavigationPanel';
import AboutMeContent from './components/AboutMeContent';
import EducationContent from './components/EducationContent';
import ProjectsContent from './components/ProjectsContent';
import WaveVector from './images/Wave_Vector.png';

function App() {
  return (
    <div className='Page'>

      <NavigationPanel/>

      <SocialLinks/>

      <div className='Header-1'>
          <h1>Hamzah Mahmood</h1>
      </div>
      
      <div className='Header-2'>
          <h2>Software Engineer | Frontend Developer</h2>
      </div>

      <AboutMeContent/>

      <EducationContent/>
      <br/>

      <img src={WaveVector} alt='WaveVector' className='Wave-Vector'/>
      
      <ProjectsContent/>
      <br/>

    </div>
  );
}

export default App;
