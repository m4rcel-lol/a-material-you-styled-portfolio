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
      default: '#0f0f17',     // M3 background
      paper: '#1c1c2a',       // M3 surface
    },
    surface: {
      main: '#1c1c2a',             // surface (elevation 0)
      container: '#1e1e2c',         // surface-container
      containerLow: '#1a1a26',      // surface-container-low
      containerHigh: '#252535',     // surface-container-high
      containerHighest: '#2e2e40',  // surface-container-highest
    },
    surfaceVariant: {
      main: '#49454e',
      on: '#cac4cf',
    },
    text: {
      primary: '#e6e0f0',      // on-surface
      secondary: '#b0aac8',    // on-surface-variant
    },
    outline: {
      main: '#938f99',         // M3 outline
      variant: '#49454e',      // M3 outline-variant
    },
    error: {
      main: '#ffb4ab',         // M3 error
      container: '#93000a',
      onError: '#690005',
    },
    success: {
      main: '#a5d6a7',
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
    borderRadius: 12, // M3 medium shape (default)
  },
  // M3 shape system
  customShapes: {
    extraSmall: 4,
    small: 8,
    medium: 12,
    large: 16,
    extraLarge: 28,
  },
  // M3 elevation system - standard shadow values
  shadows: [
    'none', // 0
    '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)', // 1
    '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)', // 2
    '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.3)', // 3
    '0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.3)', // 4
    '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.3)', // 5
    ...Array(19).fill('none'), // Fill remaining shadow levels
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: '#0f0f17',
          scrollbarWidth: 'thin',
          scrollbarColor: '#938f99 #1a1a2e',
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 1,
      },
      styleOverrides: {
        root: {
          borderRadius: 12, // M3 medium shape
          backgroundImage: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20, // M3 full shape for buttons
          textTransform: 'none',
          fontWeight: 500,
          padding: '10px 24px',
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
        contained: {
          boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
          '&:hover': {
            boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
          },
        },
        outlined: {
          borderColor: '#938f99',
          '&:hover': {
            borderColor: '#cbb8ff',
            backgroundColor: 'rgba(203, 184, 255, 0.08)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8, // M3 small shape
          height: 32,
          transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            backgroundColor: 'rgba(203, 184, 255, 0.12)',
          },
        },
        filled: {
          backgroundColor: 'rgba(203, 184, 255, 0.08)',
          border: '1px solid rgba(203, 184, 255, 0.2)',
        },
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover .MuiCardActionArea-focusHighlight': {
            opacity: 0.08, // M3 state layer hover opacity
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#2e2e40',
          color: '#e6e0f0',
          fontSize: '0.75rem',
          borderRadius: 4, // M3 extra small shape
          padding: '4px 8px',
          boxShadow: '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.3)',
        },
        arrow: {
          color: '#2e2e40',
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
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
          background: 'linear-gradient(135deg, #0f0f17 0%, #1a1530 25%, #0f0f17 50%, #121a2a 75%, #0f0f17 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 15s ease infinite',
          py: { xs: 4, md: 6 },
          '@keyframes gradientShift': {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
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
