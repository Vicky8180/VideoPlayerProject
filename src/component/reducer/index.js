
import { combineReducers } from "redux";
import SelectedVideo from "./selectedVideo";
import ListState from "./ListState";

const rootReducer=combineReducers({
   ListState,
   SelectedVideo
    })

export default  rootReducer;