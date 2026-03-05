import { createTheme, ThemeProvider, CssBaseline } from '@mui/material'
import HeroSection from './components/HeroSection'
import LinkStack from './components/LinkStack'
import FeaturedProjects from './components/FeaturedProjects'
import CommitBoard from './components/CommitBoard'
import PCSpecs from './components/PCSpecs'
import AdBanner from './components/AdBanner'
import Footer from './components/Footer'
import DisclaimerBanner from './components/DisclaimerBanner'
import { Box } from '@mui/material'

// Material You (M3) dark theme — baseline purple tonal palette
// Ref: https://m3.material.io/styles/color/static/baseline
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D0BCFF',
      contrastText: '#381E72',
    },
    secondary: {
      main: '#CCC2DC',
      contrastText: '#332D41',
    },
    tertiary: {
      main: '#EFB8C8',
      contrastText: '#492532',
    },
    background: {
      default: '#141218',
      paper: '#1D1B20',
    },
    surface: {
      main: '#141218',
      dim: '#141218',
      bright: '#3B383E',
      containerLowest: '#0F0D13',
      containerLow: '#1D1B20',
      container: '#211F26',
      containerHigh: '#2B2930',
      containerHighest: '#36343B',
    },
    surfaceVariant: {
      main: '#49454F',
    },
    text: {
      primary: '#E6E1E5',
      secondary: '#CAC4D0',
    },
    outline: {
      main: '#938F99',
      variant: '#49454F',
    },
    error: {
      main: '#F2B8B5',
      contrastText: '#601410',
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
    titleLarge: { fontSize: '1.375rem', fontWeight: 400, letterSpacing: 0, lineHeight: 1.27 },
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
    borderRadius: 12,  // M3 medium shape
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: '#141218',
          scrollbarWidth: 'thin',
          scrollbarColor: '#49454F #141218',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundImage: 'none',
          transition: 'background 200ms cubic-bezier(0.2, 0, 0, 1)',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,   // M3 full shape for buttons
          textTransform: 'none',
          fontWeight: 500,
          letterSpacing: '0.1px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,   // M3 small shape
          height: 32,        // M3 chip height
        },
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          transition: 'background 200ms cubic-bezier(0.2, 0, 0, 1)',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#E6E1E5',
          color: '#313033',
          fontSize: '0.75rem',
          borderRadius: 4,
          fontWeight: 500,
        },
        arrow: {
          color: '#E6E1E5',
        },
      },
    },
  },
})

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DisclaimerBanner />
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          py: { xs: 4, md: 6 },
        }}
      >
        <HeroSection />
        <LinkStack />
        <FeaturedProjects />
        <CommitBoard />
        <PCSpecs />
        <AdBanner />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}
