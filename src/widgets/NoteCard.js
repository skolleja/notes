import React from 'react';

class NoteCard extends React.Component {
   state = {};

   render() {
      return (
         <div>
            Я карточка №{this.props.item}
         </div>
      );
   }
}

export default NoteCard;
