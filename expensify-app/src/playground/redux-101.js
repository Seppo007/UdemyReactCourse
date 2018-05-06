import {createStore} from 'redux';

const store = createStore((state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1,
            };
        case 'DECREMENT':
            return {
                count: state.count - 1,
            };
        case 'RESET':
            return {
                count: 0,
            };
        default:
            return state;
    }
});

console.log(store.getState());

// -- ACTIONS -- //
// Increment
store.dispatch({
    type: 'INCREMENT',
});

// Decrement
store.dispatch({
    type: 'INCREMENT',
})

// Reset - set the count equal to zero
store.dispatch({
    type: 'RESET',
})

store.dispatch({
    type: 'DECREMENT',
})

console.log(store.getState());