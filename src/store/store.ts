import {configureStore} from "@reduxjs/toolkit";
import themeSlice from './reducers/theme-slice'
import taskSlice from './reducers/task-slice'

export const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
        tasks: taskSlice.reducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch