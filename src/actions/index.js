// we'll need axios
import axios from "axios"
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
export const FETCHING="FETCHING";
export const SUCCESS="SUCCESS";
export const FAILURE="FAILURE";

export function starWarsDisplay () {

    return (dispatch) => {
        dispatch({type: FETCHING, payload:[]})


        axios.get("https://swapi.co/api/people/")
            .then(res => {
                console.log("success msg",res.data.results);
                dispatch({
                    type: SUCCESS,
                    payload: res.data.results
                })
            })
            .catch(err => {
                dispatch({
                    type: FAILURE,
                    payload: "character not found"
                })
            })

    }
}
