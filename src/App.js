import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SocialsButtons from './components/SocialsButtons.js';
import AccessButtons from './components/AccessButtons.js';
import Tile1 from './components/Tile1.js';
import Tile2 from './components/Tile2.js';
import Tile3 from './components/Tile3.js';
import Tile4 from './components/Tile4.js';

function App() {
  return (

    <div id='app' className="container-fluid">

        <div id='fixed-components' className="row justify-content-start"><SocialsButtons/></div>

        <div id='content-components' className="row justify-content-center">
          <h1>Hi. I'm Hamzah.<br/>A software engineer.</h1>
          <Tile1/>
          <Tile2/>
          <Tile3/>
          <Tile4/>
        </div>

        <div id='fixed-components' className="row justify-content-start"><AccessButtons/></div>
        
      </div>

  );
}
export default App;