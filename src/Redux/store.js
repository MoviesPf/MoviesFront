import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//linea sirve para conectar nuestra App con la extension Redux Devtools del navegador.
const store = createStore(
    reducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))
    );

export default store;