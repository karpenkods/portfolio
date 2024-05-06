import { combineReducers, configureStore } from '@reduxjs/toolkit'

import snackbarReducer from './slices/snackbar-slice'

const rootReducer = combineReducers({
  snackbar: snackbarReducer
})

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
