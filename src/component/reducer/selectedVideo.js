const initialState = []; 

const SelectedVideo = (state = initialState, action) => {
  switch (action.type) {
    case "svideo":

console.log(action.payload)
      return action.payload; 
    default:
      return state;
  }
};

export default SelectedVideo;

