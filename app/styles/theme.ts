import { DefaultTheme } from 'styled-components';

// lightTheme
const lightTheme: DefaultTheme = {
  mode: 'light',
  mode_img: './icons/darkmode/sun.svg',
  home_img: './sea-light.jpg',

  color: {
      body: 'white',
      header: '#f8f8f8',
      text: '#363537',
      main_back: '#ebdcb5',
      main_state_text: '#a67a5b',
      main_btn: '#719fb0',
      verse_num: '#d5b895',
  }
}

// darkTheme
const darkTheme: DefaultTheme = {
  mode: 'dark',
  mode_img: './icons/darkmode/moon.svg',
  home_img: './sea-night.jpg',

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