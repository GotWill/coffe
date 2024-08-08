import { Routes, Route } from "react-router-dom"
import Home from "./page/home"
import DefaultLayout from "./layout/default"
import Checkout from "./page/checkout"
import Success from "./page/Success"


export const Router = () => {
    return (
        <Routes>
            <Route element={<DefaultLayout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/success" element={<Success />} />
            </Route>

        </Routes>
    )
}