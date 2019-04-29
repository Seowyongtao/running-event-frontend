import React from 'react';
import './App.css';
import Homepage from "./Container/Homepage/Homepage";
import {Route} from "react-router-dom";

class App extends React.Component {
  render(){

    return (
      <>
      <Route path={"/"} component={Homepage}/>
         
      </>
    );

  }
}

export default App;
