import React from 'react';


class NoteCard extends React.Component {
   state = {};
   buttonClick(){
      alert('hello');
   }

   render() {
      return (
         <div className='cards' >
         <div className='button' onClick={this.buttonClick.bind(this)}>button</div> 
            Я карточка №Я карточка №Я карточка №Я карточка №Я карточка №Я карточка №Я карточка №Я карточка №Я карточка №Я карточка №Я карточка №Я карточка №Я карточка №Я карточка №Я карточка №Я карточка №Я карточка №Я карточка №Я карточка №Я карточка №Я карточка №{this.props.item}
         </div>
          
      );
      
   }
}

   
   


export default NoteCard;
