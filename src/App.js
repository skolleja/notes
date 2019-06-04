import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from './pages/Main';
import Category from './pages/Category';

class App extends React.Component {
   render() {
      return (
         <Router>
               <Route exact path="/" component={Main} />
               <Route path="/category/:name" component={Category} />
         </Router>
         );
   }
}

export default App;
