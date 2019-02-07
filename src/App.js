import React, { Component } from "react";
import {connect}from "react-redux"

import { CharacterListView } from "./views";
import "./styles/App.css";

class App extends Component {
  render() {
    // starting point for the app to statr mounting this component  and the whole app
    return <CharacterListView />;


  }
}

export default connect() (App);
