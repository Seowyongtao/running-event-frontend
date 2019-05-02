import React from 'react';
import './App.css';
import Homepage from "./Container/Homepage/Homepage";
import {Route} from "react-router-dom";
import ShowEvent from "./Container/ShowEvent/ShowEvent"

class App extends React.Component {
  render(){

    return (
      <>
      <Route exact path={"/"} component={Homepage}/>
      <Route path={"/event"}   component={ShowEvent}/>
      </>
    );

  }
}

export default App;
