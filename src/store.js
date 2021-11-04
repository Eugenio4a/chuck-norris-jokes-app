import { createStore } from "redux";

function reducer(
  state = {
    activeRadio: [],
    randomJoke: [],
    availableCategories: [],
    chosenCategory: [],
  },
  action
) {
  switch (action.type) {
    case "activeRadio": {
      return { ...state, activeRadio: action.payload };
    }
    case "getRandomJoke": {
      return { ...state, randomJoke: action.payload };
    }
    case "getCategory": {
      return { ...state, availableCategories: action.payload };
    }
    case "chooseCategory": {
      return { ...state, chosenCategory: action.payload };
    }
    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
