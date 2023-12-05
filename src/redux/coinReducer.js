import { coinApi } from "../api/api"
import { loadCoins } from "./actions"
import { CALC, LOAD_COINS, SET_ACTIVE_COIN, SET_ACTIVE_FIAT, SET_CARD, SET_COIN_AMOUNT, SET_EMAIL, SET_ERROR, SET_FIRST_NAME, SET_LAST_NAME } from "./types"

const initialState = {
    crypto: [],
    activecoin: {},
    activefiat: {},
    coinamount: '',
    fiatamount: 0,
    reserv: Math.floor(Math.random() * 300000) + 80000,
    error: false,
    cardnumber: '',
    email: '',
    mindep: 0,
    firstname: '',
    lastname: ''
}

const CoinReducer = (state = initialState, type) => {
    switch (type.type) {

        case LOAD_COINS:
            return {
                ...state,
                crypto: type.data,
                mindep: type.data[0].mindep
            }
        case SET_ACTIVE_COIN: {
            return {
                ...state,
                activecoin: type.data
            }
        }
        case SET_ACTIVE_FIAT: {
            return {
                ...state,
                activefiat: type.data
            }
        }
        case CALC: {
            return {
                ...state,
                fiatamount: ((state.coinamount / state.activefiat.rate) * state.activecoin.rate).toFixed(6)
            }
        }
        case SET_COIN_AMOUNT: {

            return {
                ...state,
                coinamount: type.data,
                fiatamount: ((type.data / state.activefiat.rate) * state.activecoin.rate).toFixed(6)
            }
        }
        case SET_ERROR: {
            return {
                ...state,
                error: type.data
            }
        }
        case SET_EMAIL: {
            return {
                ...state,
                email: type.data
            }
        }
        case SET_CARD: {
            return {
                ...state,
                cardnumber: type.data
            }
        }
        case SET_FIRST_NAME: {
            return {
                ...state,
                firstname: type.data
            }
        }
        case SET_LAST_NAME: {
            return {
                ...state,
                lastname: type.data
            }
        }
        default:
            return state
    }
}

export default CoinReducer


export const LoadCoins = () => {
    return (dispatch) => {
        coinApi.getCoins().then(res => {
            dispatch(loadCoins(res.map(e => {
                return {
                    coin: e.coin,
                    fiat: e.fiat,
                    mindep: e.mindep
                }
            })))
        })
    }
}