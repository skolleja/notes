import React from 'react';
import NoteCard from "./NoteCard";

class NoteList extends React.Component {
   state = {};

   render() {
      var list = this.props.items.map((elem) => <NoteCard item={elem}/>);
      return (
         <div>
         <div className='cards2'>
     
            <h1 className='name'>{this.props.name}<div className='createNew'>+Add</div></h1>
            <div className='localCards' >
                  {list} 
               </div>
    
         </div>
         </div>
      );
   }
}

export default NoteList;
