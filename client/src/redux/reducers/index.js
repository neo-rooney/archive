import { combindeReducers } from "redux";
import { connectRouter } from "connected-react-router";

const createRootReducer = (history) =>
  combindeReducers({
    router: connectRouter(history),
  });

export default createRootReducer;
