import {ADD_NEW_ITEM, CHANGE_ITEM_STATUS, DELETE_ITEM, FETCH_DATA} from "./typesList";

const initialState = {
    todos: []
}

let _arr, index

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_DATA:
            return {...state,todos: [...action.payload]}

        case ADD_NEW_ITEM:
            return {...state, todos: [...state.todos, action.payload]}

        case CHANGE_ITEM_STATUS:
            _arr = [...state.todos]
            index = _arr.findIndex(todo => todo.id === action.payload)
            if (index === -1) return state
            _arr[index].completed = !_arr[index].completed
            return {...state, todos: [..._arr]}

        case DELETE_ITEM:
            _arr = [...state.todos]
            index = _arr.findIndex(todo => todo.id === action.payload)
            if (index === -1) return state
            _arr.splice(index, 1)
            return {...state, todos: [..._arr]}

        default:
            return state
    }
}
