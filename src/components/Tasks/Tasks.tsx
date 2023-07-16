import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import Task from "../Task/Task";
import style from './Tasks.module.css'
import {taskActions} from "../../store/reducers/task-slice";
import {TaskStatus} from "../../models/task";

const Tasks = () => {
    const {tasks, filter} = useAppSelector(state => state.tasks)
    const dispatch = useAppDispatch()

    const getSortedTasks = () => {
        switch (filter) {
            case "success":
                return [...tasks].filter(task => task.status === 'success')
            case "progress":
                return [...tasks].filter(task => task.status === 'progress')
            default:
                return tasks
        }
    }

    const onRemove = (id: number) => {
        dispatch(taskActions.remove({id}))
    }

    const onChangeStatus = (id: number, status: TaskStatus) => {
        dispatch(taskActions.changeStatus({id, status: status}))
    }

    return (
        <div className={style.tasks}>
            {getSortedTasks().map(task => (
                <Task
                    key={task.id}
                    id={task.id}
                    content={task.content}
                    status={task.status}
                    onRemove={onRemove}
                    onChangeStatus={onChangeStatus}
                />
            ))}
        </div>
    );
};

export default Tasks;