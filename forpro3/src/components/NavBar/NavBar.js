import React from "react";
// import { useAuth0 } from "../../react-auth0-spa";
// import { Link } from "react-router-dom";
import Game2 from "../GameBoard/Game2";
import './NavBar.css';

const Navbar = () => {

    // const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <div id="navbar">
        <wrap>
         <div  class="button">Log In</div>
         <div  class="button">Lobby</div>
         <div  class="button">Log Out</div>
        </wrap>
      </div> 


        // <nav className="navbar  justify-content-center" id="NavBar">
        //     <form class="form-inline">
        //         <button class="btn btn-outline-success" type="button">Mlogin</button>
        //         <a className="navbar-brand" href="/">What the Face?!</a>
        //         <button class="btn btn-sm btn-outline-secondary" type="button">Slog out</button>
        //     </form>

        //     {/* {!isAuthenticated && (

        //         <button className="btn btn-light ml-auto"
        //             onClick={() => loginWithRedirect({})}>Login/Sign Up</button>
        //     } */}

        //     {/* {isAuthenticated &&  */}

        //     {/* <button className="btn btn-light ml-auto"
        //         onClick={() => logout()}>Log out</button> */}

        // </nav>
    );

}
export default Navbar;