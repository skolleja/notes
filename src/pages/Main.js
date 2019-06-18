import React from 'react';
import Core from './Core';
import NoteList from './../widgets/NoteList';
import { Navbar } from 'react-bootstrap';

class Main extends React.Component {
   state = {};

   render() {
      const content = (
         <nav className='notes-Header'>
            <NoteList name="Personal" items={['1', '2','1', '2','1', '2','1', '2','1', '2','1', '2','1', '2','1', '2','1', '2','1', '2','1', '2','1', '2','1', '2',]}/>
            <NoteList name="Work" items={['1', '2']}/>
            <NoteList name="Archive" items={['1', '2']}/>
            
         </nav>
      
      );
     
      return (<Core content={content}/>);
   }
   
}

export default Main;
