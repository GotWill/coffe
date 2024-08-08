import { Coffe } from "./coffe";

export enum ActionTypes  {
    ADD_NEW_COFFE = "NEW_COFFE",
    DELETE_COFFE = "DELETE_COFFE",
    DECREMENT_COFFE_QNT = "DECREMENT_COFFE_QNT",
    INCREMENT_COFFE_QNT = "INCREMENT_COFFE_QNT",
    CLEAR_COFFE = "CLEAR_COFFE"
}





export function addNewCoffe(coffe: Coffe, quantity: number){
    return {
        type: ActionTypes.ADD_NEW_COFFE,
        payload: {
            coffe,
            quantity
           
        }
    }
}


export function deleteCoffeAction(id: number){
    return {
        type: ActionTypes.DELETE_COFFE,
        payload: {
            id,           
        }
    }
}

export function handleDecrementeCoffeAction(coffe: Coffe){
    return {
        type: ActionTypes.INCREMENT_COFFE_QNT,
        payload: {
            coffe,           
        }
    }
}

export function handleIncrementAction(coffe: Coffe){
    return {
        type: ActionTypes.DECREMENT_COFFE_QNT,
        payload: {
            coffe,           
        }
    }
}

export function clearCoffeAction(){
    return {
        type: ActionTypes.CLEAR_COFFE,
    }
}