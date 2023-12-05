import { combineReducers } from "redux"
import CoinReducer from "./coinReducer"

export const rootReducer = combineReducers({
    coin: CoinReducer
})