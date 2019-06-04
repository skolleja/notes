import React from 'react';
import Core from './Core';
import NoteList from './../widgets/NoteList';

class Note extends React.Component {
   state = {};

   render() {
      var content = (
         <div>
            <NoteList name="Personal" items={['1', '2']}/>
         </div>
      );
      return (<Core content={content}/>);
   }
}

export default Note;
