import { userInfoProps } from "./user";

export enum actionTypesUser {
    ADD_INFO = "ADD_INFO",
    DELETE_INFO = "DELETE_INFO"
}


export function addInfoUserAction({city, complement, neighborhood, number, road, uf}: userInfoProps) {
    return {
        type: actionTypesUser.ADD_INFO,
        payload: {
            city, complement, neighborhood, number, road, uf
        }

    }
}

export function DELETE_INFO() {
    return {
        type: actionTypesUser.DELETE_INFO,
    }
}