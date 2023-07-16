import React, {useState} from 'react';
import Button from "../components/Button/Button";
import Tasks from "../components/Tasks/Tasks";
import Input from "../components/Input/Input";
import style from '../styles/index.module.css'
import {useAppDispatch} from "../hooks/redux";
import {taskActions} from "../store/reducers/task-slice";
import Select from "../components/Select/Select";
import {TaskFilter} from "../models/task";

const filterOptions = [
    {
        value: 'all',
        label: 'Все'
    },
    {
        value: 'success',
        label: 'Только выполненные'
    },
    {
        value: 'progress',
        label: 'Только невыполненные'
    }
]

const Index = () => {
    const [value, setValue] = useState<string>('')
    const dispatch = useAppDispatch()

    const onCreateTask = () => {
        dispatch(taskActions.create({content: value}))
        setValue('')
    }

    const onFilter = (value: TaskFilter) => {
        dispatch(taskActions.filter(value))
    }

    return (
        <>
            <div className={style.actions}>
                <div className={style.addTaskGroup}>
                    <Input value={value} onChange={(e) => setValue(e.target.value)}/>
                    <Button disabled={!value} onClick={onCreateTask}>Добавить задачу</Button>
                </div>

                <Select options={filterOptions} onSelect={onFilter}/>
            </div>

            <Tasks/>
        </>
    );
};

export default Index;