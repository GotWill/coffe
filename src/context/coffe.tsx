import { createContext, ReactNode, useEffect, useReducer, useState } from 'react'
import { Coffe } from '../data/items'
import { CoffeReducer, OrderCoffeProps } from '../reducers/coffe/coffe';
import { addNewCoffe, clearCoffeAction, deleteCoffeAction, handleDecrementeCoffeAction, handleIncrementAction } from '../reducers/coffe/actions';
import { userInfoProps, UserReducer } from '../reducers/user/user';
import { addInfoUserAction, DELETE_INFO } from '../reducers/user/actions';




type paymentType = "CREDITCARD" | "DEBITCARD" | "MONEY" | '';

interface CoffeContextProps {
    orderCoffe: OrderCoffeProps
    addNewCoffeList: (coffe: Coffe, quantity: number) => void;
    deleteCoffe: (id: number) => void;
    userInfo: userInfoProps;
    addNewInfoUser: (user: userInfoProps) => void
    decrementCoffeQnt: (data: Coffe) => void;
    incrementCoffeQnt: (data: Coffe, quantity: number) => void
    deleteUserInfo: () => void;
    clearCoffe: () => void
    payment: paymentType,
    setPaymentCard: (opt: paymentType) => void
    clearPayment: () => void
}

export const CoffeContext = createContext({} as CoffeContextProps)

interface CoffeContextProviderProps {
    children: ReactNode
}

export const CoffeContextProvider = ({ children }: CoffeContextProviderProps) => {
    const [orderCoffe, dispatch] = useReducer(CoffeReducer, {
        items: [],
    }, (initialState) => {
        const getCoffeStorgae = localStorage.getItem("@coffe")
        if (getCoffeStorgae) {
            return JSON.parse(getCoffeStorgae)
        }
        return initialState
    })


    const [userInfo, dispatchUser] = useReducer(UserReducer, {
        city: '',
        complement: '',
        neighborhood: '',
        number: 0,
        road: '',
        uf: ''
    }, (initialState) => {
        const getUserInfoStorage = localStorage.getItem("@coffe-user")

        if (getUserInfoStorage) {
            return JSON.parse(getUserInfoStorage)
        }

        return initialState
    })

    
    

    const [payment, setPayment] = useState<paymentType>('')


    function addNewCoffeList(coffe: Coffe, quantity: number) {
        dispatch(addNewCoffe(coffe, quantity))
    }

    function deleteCoffe(id: number) {
        dispatch(deleteCoffeAction(id))
    }

    function decrementCoffeQnt(data: Coffe) {
        dispatch(handleDecrementeCoffeAction(data))
    }


    function incrementCoffeQnt(data: Coffe, quantity: number) {
        if (quantity > 1) {
            dispatch(handleIncrementAction(data))
            return
        }
        dispatch(deleteCoffeAction(data.id))
    }

    function clearCoffe(){
        dispatch(clearCoffeAction())
    }

    function clearPayment(){
        console.log("aqui eu limppo")
        setPayment('')
    }


    function addNewInfoUser(user: userInfoProps) {

        console.log("adddd", user)

        dispatchUser(addInfoUserAction(user))

    }
    function deleteUserInfo() {
        dispatchUser(DELETE_INFO())
    }

    function setPaymentCard(opt: paymentType) {
        setPayment(opt)
    }

    

    useEffect(() => {
        const storageSet = JSON.stringify(orderCoffe)
        localStorage.setItem("@coffe", storageSet)

    }, [orderCoffe])

    useEffect(() => {
        const storageSetUserInfo = JSON.stringify(userInfo)
        localStorage.setItem("@coffe-user", storageSetUserInfo)

    }, [userInfo])

    return (
        <CoffeContext.Provider
            value={{
                orderCoffe,
                addNewCoffeList,
                deleteCoffe,
                decrementCoffeQnt,
                userInfo,
                addNewInfoUser,
                deleteUserInfo,
                setPaymentCard,
                incrementCoffeQnt,
                clearCoffe,
                clearPayment,
                payment
            }}
        >
            {children}
        </CoffeContext.Provider>
    )
}
