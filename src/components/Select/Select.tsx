import React, {FC} from 'react';
import {SelectProps} from "./Select.props";
import style from './Select.module.css'

const Select: FC<SelectProps> = ({options, onSelect}) => {
    const onSelectHandler = (e: any) => {
        if (onSelect) onSelect(e.target.value)
    }

    return (
        <select className={style.select} onChange={onSelectHandler}>
            {options.map((option, index) => (
                <option value={option.value} key={index}>
                    {option.label}
                </option>
            ))}
        </select>
    );
};

export default Select;