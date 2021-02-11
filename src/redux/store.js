import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middleWares = [logger];

//store takes root reducer and middleware(s) as input
const store = createStore(rootReducer, applyMiddleware(...middleWares));

export default store;
