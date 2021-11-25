import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff',
            chip: '#9c27b0',
        },
        secondary: {
            main: '#39445a',
            dark: '#2d313a',
        },
        background: {
            main: '#f50',
            green: '#3bb33b;'
        },
        text: {
            light: '#ffffff',
            dark: '#000000',
        }
    },
    breakpoints: {
        values: {
            mobile: 0,
            mobile_portrait_small: 320,
            mobile_landscape_small: 479,
            tablet_portrait_medium: 480,
            tablet_landscape_medium: 767,
            laptop: 1024,
            laptop_small: 1200,
            laptop_medium: 1366,
            desktop_small: 1650,
            desktop_large: 1920,
        }
    }
});


export default theme;