import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { 
        persistStore,
        persistReducer,
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER, 
    } from 'redux-persist'

import storage from 'redux-persist/lib/storage'
import inputsSlece from '../features/inputs/inputsSlice'
import sectionSlice from '../features/section/sectionSlice'
import uniqueIdSlice from "../features/uniqueId/uniqueIdSlice";


const rootReducer = combineReducers({
    sections:sectionSlice,
    inputs:inputsSlece,
    uniqueId:uniqueIdSlice
})


const persistConfig = {
    key: 'root',
    storage,
    blacklist:['inputs']
}


const persistedReducer = persistReducer(persistConfig,rootReducer)


const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    
})



export const persistor = persistStore(store)
export default store