import React, { Component } from 'react';
import ImageContainer from '../Image/ImageContainer';
import YouPic from '../YoPicContainer/YouPic';
import ChatBox from '../ChatBox/ChatBox';

import 'bootstrap/dist/css/bootstrap.css';
import NavBar from '../NavBar/NavBar';
import './Game.css';


class Game2 extends Component {
render() {
       return (
           <div className="flexbox-container">
            <NavBar />
           <ImageContainer /> 
           <YouPic />
           <ChatBox />

</div>

        );  
 };

}




export default Game2;