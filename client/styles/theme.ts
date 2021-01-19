import { DefaultTheme } from 'styled-components';

// lightTheme
const lightTheme: DefaultTheme = {
  mode: 'light',

    color: {
        body: '#E2E2E2',
        text: '#363537',
        main_back: '#264445',
        main_state_text: '#f7dd53',
        main_btn: '#4e8d7c',
        verse_num: '#045762',
    }
}

// darkTheme
const darkTheme: DefaultTheme = {
    mode: 'dark',

    color: {
        body: '#363537',
        text: '#FAFAFA',
        main_back: '#264445',
        main_state_text: '#f7dd53',
        main_btn: '#4e8d7c',
        verse_num: '#00917c',
    }
}

export { lightTheme, darkTheme };