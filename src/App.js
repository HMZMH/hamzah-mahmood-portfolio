import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SocialsButtons from './components/SocialsButtons.js';
import AccessButtons from './components/AccessButtons.js';

function App() {
  return (

    <div id='app' className="container-fluid">

        <div id='fixed-components' className="row justify-content-start"><SocialsButtons/></div>

        <div id='content-components' className="row justify-content-center">
          <h1>Hi. I'm Hamzah.<br/>A software engineer.</h1>
        </div>

        <div id='fixed-components' className="row justify-content-start"><AccessButtons/></div>
        
      </div>

  );
}
export default App;