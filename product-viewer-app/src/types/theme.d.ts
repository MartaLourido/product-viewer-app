import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    customYellow: Palette['primary'];
    customPurple: Palette['primary'];
    customOrange: Palette['primary'];
    customPink: Palette['primary'];
  }
  interface PaletteOptions {
    customYellow?: PaletteOptions['primary'];
    customPurple?: PaletteOptions['primary'];
    customOrange?: PaletteOptions['primary'];
    customPink?: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    customYellow: true;
    customPurple: true;
    customOrange: true;
    customPink: true;
  }
}
