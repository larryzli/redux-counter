// change this to true to see test results on the black diamond section.
export const BLACK_DIAMOND = false;

// ACTION TYPES
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// ACTION CREATORS
export function increment(amount) {
    return {
        type: INCREMENT,
        payload: amount
    };
}
export function decrement(amount) {
    return {
        type: DECREMENT,
        payload: amount
    };
}

// INITIAL STATE
const initialState = {
    currentValue: 0
};

// SHORTHAND REDUCER (ARROW FUNCTION)
// export default const counter = (state = initialState, action) => {
//     return state;
// }

// LONGHAND REDUCER (FUNCTION DECLARATION)
export default function counter(state = initialState, action = {}) {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                currentValue: state.currentValue + action.payload
            });
        case DECREMENT:
            return Object.assign({}, state, {
                currentValue: state.currentValue - action.payload
            });
        default:
            return state;
    }
}
