import { REMOVEITEM, ADDITEM } from "../types/cartTypes.js";

const cart = [];

const cartReducer = (state = cart, action) => {
    
    const product = action.payload;
    const exist = state.find(pro => pro.id === product.id);

    switch (action.type) {
        case ADDITEM:
            if (exist) {
                return state.map(pro => pro.id === product.id ? { ...pro, qty: pro.qty + 1 } : pro)
            } else {
                return [...state, { ...product, qty: 1 }]
            }

        case REMOVEITEM:
            if (exist.qty === 1) {
                return state.filter(pro => pro.id !== product.id)
            } else {
                return state.map(pro => pro.id === product.id ? { ...pro, qty: pro.qty - 1 } : pro)
            }

        default:
            return state
    }
}

export default cartReducer;