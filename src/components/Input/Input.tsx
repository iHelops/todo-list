import React, {FC} from 'react';
import {InputProps} from "./Input.props";
import style from './Input.module.css'

const Input: FC<InputProps> = ({...props}) => {
    const classNames = `${style.input} ${props.className}`

    return (
        <input {...props} className={classNames}/>
    );
};

export default Input;