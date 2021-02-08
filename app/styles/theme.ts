import { DefaultTheme } from 'styled-components';

// lightTheme
const lightTheme: DefaultTheme = {
  mode: 'light',
  mode_img: './icons/darkmode/sun.svg',

  color: {
      body: 'white',
      header: '#e8eae6',
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
  mode_img: './icons/darkmode/moon.svg',

  color: {
      body: '#0D1117',
      header: '#161B22',
      text: '#FAFAFA',
      main_back: '#264445',
      main_state_text: '#f7dd53',
      main_btn: '#4e8d7c',
      verse_num: '#00917c',
  }
}

export { lightTheme, darkTheme };