import React, {FC} from 'react';
import {TaskProps} from "./Task.props";
import style from './Task.module.css'
import Tag from "../Tag/Tag";
import {TaskStatus} from "../../models/task";

const statuses = {
    progress: {
        text: 'В процессе',
        color: '#349EFF'
    },
    success: {
        text: 'Выполнен',
        color: '#FF3D60'
    }
}

const Task: FC<TaskProps> = ({id, content, status, onRemove, onChangeStatus}) => {
    const onRemoveHandler = () => {
        if (onRemove) onRemove(id)
    }

    const onChangeStatusHandler = (status: TaskStatus) => {
        if (onChangeStatus) onChangeStatus(id, status)
    }

    return (
        <div className={style.task}>
            <div className={style.number}>#{id}</div>
            <div className="content">{content}</div>
            <div className={style.tags}>
                <Tag onClick={onRemoveHandler} className={style.hoverBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
                </Tag>
                {status === 'progress' && (
                    <Tag onClick={() => onChangeStatusHandler('success')} className={style.hoverBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="m9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.88-9.89l2.83 2.83L9 20.42Z"/></svg>
                    </Tag>
                )}
                {status === 'success' && (
                    <Tag onClick={() => onChangeStatusHandler('progress')} className={style.hoverBtn}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"/><path fill="currentColor" d="m12 14.121l5.303 5.304a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.303a1.5 1.5 0 1 0 2.122 2.122L12 14.12Z"/></g></svg>
                    </Tag>
                )}
                <Tag color={statuses[status].color}>
                    {statuses[status].text}
                </Tag>
            </div>
        </div>
    );
};

export default Task;