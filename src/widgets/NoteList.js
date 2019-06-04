import React from 'react';
import NoteCard from "./NoteCard";

class NoteList extends React.Component {
   state = {};

   render() {
      var list = this.props.items.map((elem) => <NoteCard item={elem}/>);
      return (
         <div>
            <h1>{this.props.name}</h1>
            {list}
         </div>
      );
   }
}

export default NoteList;
