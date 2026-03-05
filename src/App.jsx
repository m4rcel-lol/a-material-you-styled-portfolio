import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import HeroSection from './components/HeroSection'
import LinkStack from './components/LinkStack'
import FeaturedProjects from './components/FeaturedProjects'
import CreativeSection from './components/CreativeSection'
import Footer from './components/Footer'
import { Box } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#cbb8ff',        // M3 primary (purple tonal)
      contrastText: '#1a0d4a',
    },
    secondary: {
      main: '#efb8c8',        // M3 secondary
    },
    tertiary: {
      main: '#86d5e4',        // M3 tertiary (cyan)
    },
    background: {
      default: '#0f0f17',
      paper: '#1c1c2a',
    },
    surface: {
      main: '#1c1c2a',
      container: '#252535',
      containerHigh: '#2e2e40',
    },
    text: {
      primary: '#e6e0f0',
      secondary: '#b0aac8',
    },
    outline: {
      main: '#4a4a6a',
    },
    error: {
      main: '#ffb4ab',
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    displayLarge: { fontSize: '3.5rem', fontWeight: 400, letterSpacing: '-0.25px', lineHeight: 1.12 },
    displayMedium: { fontSize: '2.8rem', fontWeight: 400, letterSpacing: 0, lineHeight: 1.16 },
    displaySmall: { fontSize: '2.25rem', fontWeight: 400, letterSpacing: 0, lineHeight: 1.2 },
    headlineLarge: { fontSize: '2rem', fontWeight: 400, letterSpacing: 0, lineHeight: 1.25 },
    headlineMedium: { fontSize: '1.75rem', fontWeight: 400, letterSpacing: 0, lineHeight: 1.29 },
    headlineSmall: { fontSize: '1.5rem', fontWeight: 400, letterSpacing: 0, lineHeight: 1.33 },
    titleLarge: { fontSize: '1.375rem', fontWeight: 500, letterSpacing: 0, lineHeight: 1.27 },
    titleMedium: { fontSize: '1rem', fontWeight: 500, letterSpacing: '0.15px', lineHeight: 1.5 },
    titleSmall: { fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.1px', lineHeight: 1.43 },
    bodyLarge: { fontSize: '1rem', fontWeight: 400, letterSpacing: '0.5px', lineHeight: 1.5 },
    bodyMedium: { fontSize: '0.875rem', fontWeight: 400, letterSpacing: '0.25px', lineHeight: 1.43 },
    bodySmall: { fontSize: '0.75rem', fontWeight: 400, letterSpacing: '0.4px', lineHeight: 1.33 },
    labelLarge: { fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.1px', lineHeight: 1.43 },
    labelMedium: { fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.5px', lineHeight: 1.33 },
    labelSmall: { fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.5px', lineHeight: 1.45 },
  },
  shape: {
    borderRadius: 24,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: '#0f0f17',
          scrollbarWidth: 'thin',
          scrollbarColor: '#4a4a6a #1a1a2e',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          backgroundImage: 'none',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          height: 28,
        },
      },
    },
  },
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #0f0f17 0%, #12122a 50%, #0a1525 100%)',
          py: { xs: 4, md: 6 },
        }}
      >
        <HeroSection />
        <LinkStack />
        <FeaturedProjects />
        <CreativeSection />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}
