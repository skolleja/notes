import React from 'react';
import Core from './Core';
import NoteList from './../widgets/NoteList';

class Main extends React.Component {
   state = {};

   render() {
      const content = (
         <div>
            <NoteList name="Personal" items={['1', '2']}/>
            <NoteList name="Work" items={['1', '2']}/>
            <NoteList name="Archive" items={['1', '2']}/>
         </div>
      );
      return (<Core content={content}/>);
   }
}

export default Main;
