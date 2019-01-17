import React from 'react';
import {Route} from 'react-router-dom';
import NavBar from './NavBar';
import Questions from './Questions/Questions';
import Question from './Question/Question';
import Callback from './Callback';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path='/' component={Questions} />
        <Route exact path='/callback' component={Callback} />
        <Route exact path='/question/:questionId' component={Question} />
        App
      </div>
    );
  }
}

export default App;
