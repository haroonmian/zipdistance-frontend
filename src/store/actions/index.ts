import axios from '../../axios'
import { ActionConstent } from '../../constents/store'
import { ActionType, ZipcodeDistanceType, ZipcodeType } from '../../types'

export const setZipcodes = (payload: ZipcodeType[]): ActionType => {
    return {
        type: ActionConstent.SET_ZIPCODES,
        payload: payload
    }
}

export const addZipcode = (): ActionType => {
    return {
        type: ActionConstent.ADD_ZIPCODE,
    }
}

export const setZipcodeDistances = (payload: ZipcodeDistanceType): ActionType => {
    return {
        type: ActionConstent.SET_ZIPCODESDISTANCE,
        payload: payload
    }
}

export const searchZip = async (zipcode: string) => {
    let { data } = await axios.get('zipcodes/search/' + zipcode);
    return data
}

export const zipcodeDistance = async (zipcodes: ZipcodeType[]): Promise<ActionType> => {
    let { data } = await axios.post('zipcodes/measuredistance', zipcodes)
    return setZipcodeDistances(data.data)
}