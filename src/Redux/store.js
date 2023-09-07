import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import reducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//linea sirve para conectar nuestra App con la extension Redux Devtools del navegador.

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)


export let store = createStore(
    persistedReducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))
    );
export let persistor = persistStore(store);


