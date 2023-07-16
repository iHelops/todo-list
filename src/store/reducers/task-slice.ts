import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ITask, TaskFilter, TaskStatus} from "../../models/task";

interface TaskState {
    tasks: ITask[],
    filter: TaskFilter
}

const initialState: TaskState = {
    tasks: [
        {
            id: 1,
            content: 'Сходить в магазин за покупками',
            status: 'progress'
        }
    ],
    filter: 'all'
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        create(state, action: PayloadAction<{content: string}>) {
            state.tasks.push({
                id: state.tasks.length !== 0 ? state.tasks[state.tasks.length - 1].id + 1 : 1,
                content: action.payload.content,
                status: 'progress'
            })
        },
        remove(state, action: PayloadAction<{id: number}>) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
        },
        changeStatus(state, action: PayloadAction<{id: number, status: TaskStatus}>) {
            const index = state.tasks.findIndex(task => task.id === action.payload.id)
            state.tasks[index].status = action.payload.status
        },
        filter(state, action: PayloadAction<TaskFilter>) {
            state.filter = action.payload
        }
    }
})

export const taskActions = taskSlice.actions;
export default taskSlice;