import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {setTheme} from "../../helpers/set-theme";
import {ThemeType} from "../../models/theme";
import {loadCurrentTheme} from "../../helpers/load-current-theme";

interface ThemeState {
    theme: ThemeType
}

const initialState: ThemeState = {
    theme: loadCurrentTheme()
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        set(state, action: PayloadAction<ThemeType>) {
            setTheme(action.payload)
            state.theme = action.payload
        }
    }
})

export const themeActions = themeSlice.actions;
export default themeSlice;
