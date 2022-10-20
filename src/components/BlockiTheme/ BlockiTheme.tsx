import {
  createTheme,
  ThemeProvider,
  PaletteOptions,
} from "@mui/material/styles";

export interface ColorOptions {
  light: PaletteOptions;
  dark: PaletteOptions;
}

interface Props {
  children: React.ReactNode;
  mode?: "light" | "dark";
  colors?: ColorOptions;
}

const BlockiTheme = ({ children, mode, colors }: Props) => {
  const theme = createTheme({
    palette: {
      mode,
      ...(mode === "light" || mode === undefined
        ? {
            // palette values for light mode
            ...colors?.light,
          }
        : {
            // palette values for dark mode
            ...colors?.dark,
          }),
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default BlockiTheme;
