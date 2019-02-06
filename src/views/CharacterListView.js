import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions

import {starWarsDisplay} from "../actions"
class CharacterListView extends React.Component {
  constructor() {
    super();


  }


  componentDidMount() {
    // call our action
    console.log("componentDidMount ....")
    this.props.starWarsDisplay();

  }

  render() {
    console.log("render ....");
    if (this.props.fetching) {
      return (
      <div>It's Loading</div>
      );
    }

    return (
        <div className="CharactersList_wrapper">

          <CharacterList characters={this.props.characters}/>
        </div>
    );

  }


}

function mapStateToProps(state) {
  console.log(state);
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching


  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
    mapStateToProps,
{
    /* action creators go here */
    starWarsDisplay
  }
)(CharacterListView);
