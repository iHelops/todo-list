import {ThemeType} from "../models/theme";

export const setTheme = (theme: ThemeType) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('theme', theme)
        const body = document.querySelector('body')
        body.setAttribute('data-theme', theme)
    }
}