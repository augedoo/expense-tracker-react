import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

export const types = {
  ADD_TRANSACTION: 'ADD_TRANSACTION',
  DELETE_TRANSACTION: 'DELETE_TRANSACTION',
};

// Initial state
const initialState = {
  transactions: [],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Delete transaction
  const deleteTransaction = (id) => {
    dispatch({
      type: types.DELETE_TRANSACTION,
      payload: id,
    });
  };

  // Add transaction
  const addTransaction = (transaction) => {
    dispatch({
      type: types.ADD_TRANSACTION,
      payload: transaction,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
