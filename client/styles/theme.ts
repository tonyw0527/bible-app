import { DefaultTheme } from 'styled-components';

// lightTheme
const lightTheme: DefaultTheme = {
    mode: 'light',

    color: {
        body: '#E2E2E2',
        text: '#363537',
    }
}

// darkTheme
const darkTheme: DefaultTheme = {
    mode: 'dark',

    color: {
        body: '#363537',
        text: '#FAFAFA',
    }
}

export { lightTheme, darkTheme };