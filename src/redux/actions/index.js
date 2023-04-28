import { REMOVEITEM } from "../types/cartTypes.js"
import { ADDITEM } from "../types/cartTypes.js"

export const addToCart = (payload) => {
    return {
        type: ADDITEM,
        payload
    }
}

export const removeFromCart = (payload) => {
    return {
        type: REMOVEITEM,
        payload
    }
}