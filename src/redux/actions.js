import { CALC, LOAD_COINS, SET_ACTIVE_COIN, SET_ACTIVE_FIAT, SET_CARD, SET_COIN_AMOUNT, SET_EMAIL, SET_ERROR, SET_FIRST_NAME, SET_LAST_NAME } from "./types";

export const loadCoins = (data) => ({
    type: LOAD_COINS,
    data
})
export const setActiveCoin = (data) => ({
    type: SET_ACTIVE_COIN,
    data
})
export const setActiveFiat = (data) => ({
    type: SET_ACTIVE_FIAT,
    data
})
export const setCoinAmount = (data) => ({
    type: SET_COIN_AMOUNT,
    data
})
export const setError = (data) => ({
    type: SET_ERROR,
    data
})
export const setEmail = (data) => ({
    type: SET_EMAIL,
    data
})
export const setCard = (data) => ({
    type: SET_CARD,
    data
})
export const setFirstName = (data) => ({
    type: SET_FIRST_NAME,
    data
})
export const setLastName = (data) => ({
    type: SET_LAST_NAME,
    data
})
export const calc = () => ({
    type: CALC
})
