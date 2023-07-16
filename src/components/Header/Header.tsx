import React from 'react';
import style from './Header.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {themeActions} from "../../store/reducers/theme-slice";

const Header = () => {
    const {theme} = useAppSelector(store => store.theme)
    const dispatch = useAppDispatch()

    const onThemeChange = () => {
        const nextTheme = theme === 'light' ? 'dark' : 'light'
        dispatch(themeActions.set(nextTheme))
    }

    return (
        <div className={style.header}>
            <div className="container">
                <h2>Список задач</h2>
                <div className={style.theme} onClick={onThemeChange}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="currentColor" d="M10 3.5a6.5 6.5 0 1 1 0 13v-13ZM10 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Z"/></svg>
                </div>
            </div>
        </div>
    );
};

export default Header;