import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import bancosReducer from './bancoDuck'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    bancos: bancosReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export function generarStore(){   
    const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))   
    return store
}

export function generarPersistor(store){
    const persistor = persistStore(store)
    return persistor
}

