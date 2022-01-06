const breakpoints = {
  values: {
    xsm: 375,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1280,
    "2xl": 1536,
    "3xl": 1652,
  },
}

const theme = {
  breakpoints: {
    ...breakpoints,
    up: (key) => `@media (min-width: ${breakpoints.values[key]}px)`,
    down: (key) => `@media (max-width: ${breakpoints.values[key] - 0.02}px)`,
    between: (min, max) =>
      `@media (min-width: ${breakpoints.values[min]}px) and (max-width: ${
        breakpoints.values[max] - 0.02
      }px)`,
  },
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#000",
    },
    gray: {
      50: "#F8F8FB",
      100: "#F3F3F9",
      300: "#DDDDE2",
      600: "#8D8D8D",
      900: "#1C1C1C",
    },
  },
  borderRadius: 20,
}

export default theme
