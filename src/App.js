import './styles/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SocialLinks from './components/SocialsLinks.js';
import BackgroundImages from './components/BackgroundImages';
import AboutMe from './components/AboutMe';

function App() {

  return (

    <div className='Page'>

      <SocialLinks/>

      <BackgroundImages/>

      <AboutMe/>

    </div>

  );

}

export default App;
