import { applyMiddleware, compose, combineReducers, createStore } from "redux";
import { reducer as authReducer } from "./auth/reducer";
import { reducer as productReducer } from "./Product/reducer"
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  product:productReducer
});
export const Store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);



