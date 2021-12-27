import { ActionConstent } from "../constents/store"

export interface ZipcodeType {
    id: number | null
    zip: string
    latitude?: string
    longitude?: string
    createdAt?: string
    updatedAt?: string
}

export interface ZipcodeDistanceType {
    id: number
    zip: string
    toZipcodeId: number
    distance: number
}

export interface InitialStateType {
    zipcodes: ZipcodeType[]
    zipcodeDistances: ZipcodeDistanceType[]
}

export interface ActionType {
    type: ActionConstent
    payload?: any
}