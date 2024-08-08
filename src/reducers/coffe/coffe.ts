import { produce } from "immer";
import { ActionTypes } from "./actions";

export interface Coffe {
    id: number;
    img: string;
    tags: string[];
    title: string;
    description: string;
    value: number;
}

export interface OrderItem {
    coffe: Coffe;
    quantity: number;
}

export interface OrderCoffeProps {
    items: OrderItem[];
}



export function CoffeReducer(state: OrderCoffeProps, action: any) {
    switch (action.type) {
        case ActionTypes.ADD_NEW_COFFE: {
            return produce(state, draft => {
                const { coffe, quantity } = action.payload;

                const coffeIndex = draft.items.find((item) => item.coffe.id === coffe.id)
                if (coffeIndex) {
                    coffeIndex.quantity += quantity
                    return
                } 
                 draft.items.push({ coffe, quantity });
            });
        }
        case ActionTypes.DELETE_COFFE: {
           return produce(state, draft => {
            const itemToRemoveId = draft.items.findIndex(
                (item) => item.coffe.id === action.payload.id,
              )
              draft.items.splice(itemToRemoveId, 1)
           })
           
        }
        case ActionTypes.INCREMENT_COFFE_QNT: {
            return produce(state, draft  =>{
                const { coffe } = action.payload;
                const coffeIndex = draft.items.findIndex((item) => item.coffe.id === coffe.id)

                if(coffeIndex !== -1){
                    draft.items[coffeIndex].quantity += 1
                }
            })
        }
        case ActionTypes.DECREMENT_COFFE_QNT: {
            return produce(state, draft  =>{
                const { coffe } = action.payload;
                const coffeIndex = draft.items.findIndex((item) => item.coffe.id === coffe.id)

                if(coffeIndex !== -1){
                    draft.items[coffeIndex].quantity -= 1
                }
            })
        }
        case ActionTypes.CLEAR_COFFE:
        return produce(state, draft => {
            draft.items = []
        })

        default:
            return state;
    }
}
