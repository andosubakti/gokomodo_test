import { configureStore } from '@reduxjs/toolkit'
import peopleReducer from './reducers/peopleReducer'

export default configureStore({
    reducer: {
        people: peopleReducer,
    },
})