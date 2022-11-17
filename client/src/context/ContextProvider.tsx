import React, { useReducer, Dispatch, createContext, useContext } from "react";
import reducer, { initialState, StateType, ActionType } from "../reducer";

type DispatchType = Dispatch<ActionType>;

// Creating context
export const AppContext = createContext<{state: StateType; dispatch: React.Dispatch<any>} | null>({state: initialState, dispatch: () => null});

function ContextProvider({ children }: { children : React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
        {children}
    </AppContext.Provider>
  );
}

export default ContextProvider;