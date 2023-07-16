import {THEMES, ThemeType} from "../models/theme";

export const loadCurrentTheme = (): ThemeType => {
    if (typeof window !== 'undefined') {
        const theme = localStorage.getItem('theme') || 'light'

        if (THEMES.some(item => item === theme)) {
            const body = document.querySelector('body')
            body.setAttribute('data-theme', theme)

            return theme as ThemeType
        }
    }

    return 'light'
}