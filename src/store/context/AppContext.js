import React, { createContext, useReducer } from 'react';
import { AppContextReducer } from '../reducer/AppContextReducer';

export const AppContextContext = createContext();

export const AppContextProvider = props => {
  const { children } = props;
  const initState = {
    activeMainTheme: 'light'
  }

  const [state, dispatch] = useReducer(AppContextReducer, initState)

  return (
    <AppContextContext.Provider value={ { state, dispatch } }>
      { children }
    </AppContextContext.Provider>
  )
}