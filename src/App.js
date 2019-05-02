import React from 'react';
import './App.css';
import Homepage from "./Container/Homepage/Homepage";
import {Route} from "react-router-dom";
import ShowEvent from "./Container/ShowEvent/ShowEvent";
import RegisterModal from "./Container/RegisterModal/RegisterModal"

class App extends React.Component {
  render(){

    return (
      <>
      <Route exact path={"/"} component={Homepage}/>
      <Route path={"/event"}   component={ShowEvent}/>
      <Route path={"/registration/:id"} component={RegisterModal}/>
      </>
    );

  }
}

export default App;
