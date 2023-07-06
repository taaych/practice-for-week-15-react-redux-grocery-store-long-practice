// import produceData from '../mockData/produce.json';

const ADD_TO_CART = 'cart/ADD_TO_CART';

// Add an item with a specific id to the cart
// Take id as parameter, return id as payload
export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        produceId: id
    }
}

export default function cartReducer(state = {}, action){
    switch (action.type) {
        // Add an item with the id from the payload
        // Return new state obj w/ all previous state keys

        case ADD_TO_CART:
            const produceId = action.produceId;
            const newState = {
                ...state,
                [produceId]: {
                    id: produceId,
                    count: 1
                }
            };
            return newState;

        default:
            return state;
    }
};