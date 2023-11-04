const { createStore, combineReducers } = require("redux");

// Constant
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";


// Initial state
const initialProductState = {
    products: ["sugar", "salt"],
    numberofProducts: 2,
}
const initialCartState = {
    cart: ["book"],
    numberofProducts: 1,
}

// Action
const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}
const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    }
}
const getCart = () => {
    return {
        type: GET_CART
    }
}
const addCart = (product) => {
    return {
        type: ADD_CART,
        payload: product,
    }
}

// Reducer
const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
            };
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberofProducts: state.numberofProducts + 1,
            }
    
        default:
            return state;
    }
}
const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
        case GET_CART:
            return {
                ...state,
            };
        case ADD_CART:
            return {
                cart: [...state.cart, action.payload],
                numberofProducts: state.numberofProducts + 1,
            }
    
        default:
            return state;
    }
}



// combine reducer
const rootReducer = combineReducers({
    productReducer,
    cartReducer
})


// store
const store = createStore(rootReducer);
store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getProducts());
store.dispatch(addProduct("milk"));

store.dispatch(getCart());
store.dispatch(addCart("pen"));