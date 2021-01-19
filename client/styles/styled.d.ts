import 'styled-components';

// interface for theme
declare module 'styled-components' {
    export interface DefaultTheme {
        mode: string;

        color: {
            body: string;
            text: string;
            main_back: string;
            main_state_text: string;
            main_btn: string;
            verse_num: string;
        };
    }
}