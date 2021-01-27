import { DefaultTheme } from 'styled-components';

// lightTheme
const lightTheme: DefaultTheme = {
  mode: 'light',
  mode_img: './sun.svg',

  color: {
      body: 'white',
      text: '#363537',
      main_back: '#a0c1b8',
      main_state_text: '#ffdf91',
      main_btn: '#719fb0',
      verse_num: '#045762',
  }
}

// darkTheme
const darkTheme: DefaultTheme = {
  mode: 'dark',
  mode_img: './moon.svg',

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