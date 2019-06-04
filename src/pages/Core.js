import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import './Core.css';
import {Link} from "react-router-dom";

class Core extends React.Component {
   state = {};

   render() {
      return (
         <div className="notes">
            <Navbar bg="dark"
                    variant="dark"
                    className="notes-Header">
               <Link to="/"><Navbar.Brand href="#home"> Notes </Navbar.Brand></Link>
               <Nav className="mr-auto">
                  <Link to="/category/personal"><Nav.Link href="#personal"> Personal </Nav.Link></Link>
                  <Link to="/category/work"><Nav.Link href="#work"> Work </Nav.Link></Link>
                  <Link to="/category/archive"><Nav.Link href="#archive"> Archive </Nav.Link></Link>
               </Nav>
            </Navbar>
            {this.props.content}
         </div>
      );
   }
}

export default Core;
