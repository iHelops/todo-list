import React, {FC} from 'react';
import style from './Tag.module.css'
import {TagProps} from "./Tag.props";

const Tag: FC<TagProps> = ({children, color, onClick, ...props}) => {
    const classNames = `${style.tag} ${color || style.bordered} ${onClick && style.action} ${props.className}`;
    const styles = {backgroundColor: color, ...props.style};

    return (
        <div
            {...props}
            className={classNames}
            style={styles}
            onClick={onClick}
        >
            {children}
        </div>
    );
};

export default Tag;