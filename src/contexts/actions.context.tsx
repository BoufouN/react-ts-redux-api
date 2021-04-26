import {createContext} from 'react';
import { Actions }  from "../redux/actions/all.actions";

export const ActionsContext = createContext<Actions | null>(null);
ActionsContext.displayName = "Actions"
export const ActionsProvider = ActionsContext.Provider