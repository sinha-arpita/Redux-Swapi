import React from "react";


import Character from "./Character";

const CharacterList = props => {
  console.log(props);
  return (
      <div>
        {/*{props.error !==""?<p>{props.error}</p>:null}*/}
        {/*{props.fetching?(<h2>HOLD ON,WE ARE LOADING YOUR CHARACTER </h2>):null}*/}
    <ul>
      {props.characters.map(character => {
        return <Character key={character.name} character={character} />;
      })}
    </ul>
      </div>
  );
};
// function mapStateToProps(state){
//      return {
//        characters: state.characters,
//        fetching: state.fetching
//      }
// }

export default CharacterList
