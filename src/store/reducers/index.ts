import { InitialStateType, ActionType } from '../../types'
import { ActionConstent } from '../../constents/store'

const reducer = (state: InitialStateType, actions: ActionType) => {
    switch (actions.type) {
        case ActionConstent.SET_ZIPCODES:
            return {
                ...state,
                zipcodes: actions.payload
            }
        case ActionConstent.SET_ZIPCODESDISTANCE:
            return {
                ...state,
                zipcodeDistances: actions.payload
            }
        case ActionConstent.ADD_ZIPCODE:
            var newZipcodes = [...state.zipcodes];
            newZipcodes.push({ id: null, zip: '' })
            return {
                ...state,
                zipcodes: newZipcodes
            }
        default:
            return state
    }
}

export default reducer