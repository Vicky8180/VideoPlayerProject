const initialState = []; 

const ListState = (state = initialState, action) => {
  switch (action.type) {
    case "liststate":

console.log(action.payload)
      return action.payload; 
    default:
      return state;
  }
};

export default ListState;

