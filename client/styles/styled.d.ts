import 'styled-components';

// interface for theme
declare module 'styled-components' {
    export interface DefaultTheme {
        mode: string;

        color: {
            body: string;
            text: string;
        };
    }
}