import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    isDark: boolean;
    colors: {
      primary: string;
      // adicione outras cores conforme necessário
    };
    toggleTheme: () => void;
  }
}
