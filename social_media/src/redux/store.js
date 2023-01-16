import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import appReducer from "./reducer";


const middleware=[thunk]
const store = createStore(appReducer,applyMiddleware(...middleware))


export default store