 import React from 'react';
import Core from './Core';
import NoteList from './../widgets/NoteList';

class Category extends React.Component {
   state = {};

   render() {
      var content = (
         <div>
            <NoteList name={this.props.match.params.name} items={['1', '2','3']}/>
         </div>
      );
      return (<Core content={content}/>);
   }
}

export default Category;
