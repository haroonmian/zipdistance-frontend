import React, { createContext, useReducer } from 'react'
import { InitialStateType, ActionType } from '../types'
import reducers from './reducers'
import initialState from '../store/states'

interface Props { }

export const Context = createContext<[InitialStateType, React.Dispatch<ActionType>]>([initialState, () => null])

const Store: React.FC<Props> = ({ children }) => {

    const [sate, dispatch] = useReducer(reducers, initialState)

    return (
        <Context.Provider value={[sate, dispatch]}>{children}</Context.Provider>
    )
}

export default Store