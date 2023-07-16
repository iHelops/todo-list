import React, {FC} from 'react';
import {ButtonProps} from "./Button.props";
import style from './Button.module.css'

const Button: FC<ButtonProps> = ({children, ...props}) => {
    const classNames = `${style.button} ${props.className}`

    return (
        <button {...props} className={classNames}>
            {children}
        </button>
    );
};

export default Button;