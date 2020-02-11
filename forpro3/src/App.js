import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Game2 from './components/GameBoard/Game2';
import Image from './components/Image/ImageContainer';
import YouPic from './components/YoPicContainer/YouPic';
import ChatBox from './components/ChatBox';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import './App.css';




function App() {
  return (

   





   

    <Router>
      <div id="parentDiv">
        <Switch>
          {/* <Route exact path="/" component={Login} />
          <Route exact path="/lobby" component={Lobby} /> */}
          <Route exact path="/game2" component={Game2} />
          <Route exact path="/image" component={Image} />
          <Route exact path="/youpic" component={YouPic} />
          <Route exact path="/chatbox" component={ChatBox} />
        </Switch>






      </div>
    </Router>

     


  );
}

export default App;
