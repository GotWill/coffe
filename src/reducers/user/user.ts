import { produce } from "immer";
import { actionTypesUser } from "./actions";

export interface userInfoProps {
    city: string,
    complement: string,
    neighborhood: string,
    number: number,
    road: string,
    uf: string;
}


export interface userProps {
    user: userInfoProps
}

export function UserReducer(state: userInfoProps, action: any) {
    switch (action.type) {
        case actionTypesUser.ADD_INFO:
            return produce(state, draft => {
                draft.city = action.payload.city
                draft.complement = action.payload.complement
                draft.neighborhood = action.payload.neighborhood
                draft.number = action.payload.number
                draft.road = action.payload.road
                draft.uf = action.payload.uf
            })
        case actionTypesUser.DELETE_INFO:
            return produce(state, draft => {
                draft.city = ''
                draft.complement = ''
                draft.neighborhood = ''
                draft.number = 0
                draft.road = ''
                draft.uf = ''
            })

        default:
            return state
    }
}