import { DECREMENT, INCREMENT, INCREMENT_BY_AMOUNT } from "./actionTypes";

const initialState = { value: 0 };

export default function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, value: state.value + 1 }
            break;
        case DECREMENT:
            return { ...state, value: state.value - 1 }
            break;
        case INCREMENT_BY_AMOUNT:
            return { ...state, value: state.value + action.payload };
            break;
        default:
            return state;
            break;
    }
}