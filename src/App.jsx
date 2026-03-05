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
      main: '#d0bcff',        // M3 primary (purple) - adjusted for better contrast
      contrastText: '#381e72',
    },
    secondary: {
      main: '#ccc2dc',        // M3 secondary
      contrastText: '#332d41',
    },
    tertiary: {
      main: '#efb8c8',        // M3 tertiary (pink)
      contrastText: '#492532',
    },
    background: {
      default: '#1c1b1f',     // M3 dark background
      paper: '#1c1b1f',
    },
    surface: {
      main: '#1c1b1f',
      variant: '#49454f',
      container: '#211f26',
      containerLow: '#1c1b1f',
      containerHigh: '#2b2930',
      containerHighest: '#36343b',
    },
    text: {
      primary: '#e6e1e5',
      secondary: '#cac4d0',
    },
    outline: {
      main: '#938f99',
      variant: '#49454f',
    },
    error: {
      main: '#f2b8b5',
      contrastText: '#601410',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    // Display styles
    displayLarge: {
      fontSize: '57px',
      fontWeight: 400,
      letterSpacing: '-0.25px',
      lineHeight: '64px'
    },
    displayMedium: {
      fontSize: '45px',
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: '52px'
    },
    displaySmall: {
      fontSize: '36px',
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: '44px'
    },
    // Headline styles
    headlineLarge: {
      fontSize: '32px',
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: '40px'
    },
    headlineMedium: {
      fontSize: '28px',
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: '36px'
    },
    headlineSmall: {
      fontSize: '24px',
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: '32px'
    },
    // Title styles
    titleLarge: {
      fontSize: '22px',
      fontWeight: 400,
      letterSpacing: 0,
      lineHeight: '28px'
    },
    titleMedium: {
      fontSize: '16px',
      fontWeight: 500,
      letterSpacing: '0.15px',
      lineHeight: '24px'
    },
    titleSmall: {
      fontSize: '14px',
      fontWeight: 500,
      letterSpacing: '0.1px',
      lineHeight: '20px'
    },
    // Body styles
    bodyLarge: {
      fontSize: '16px',
      fontWeight: 400,
      letterSpacing: '0.5px',
      lineHeight: '24px'
    },
    bodyMedium: {
      fontSize: '14px',
      fontWeight: 400,
      letterSpacing: '0.25px',
      lineHeight: '20px'
    },
    bodySmall: {
      fontSize: '12px',
      fontWeight: 400,
      letterSpacing: '0.4px',
      lineHeight: '16px'
    },
    // Label styles
    labelLarge: {
      fontSize: '14px',
      fontWeight: 500,
      letterSpacing: '0.1px',
      lineHeight: '20px'
    },
    labelMedium: {
      fontSize: '12px',
      fontWeight: 500,
      letterSpacing: '0.5px',
      lineHeight: '16px'
    },
    labelSmall: {
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.5px',
      lineHeight: '16px'
    },
  },
  shape: {
    borderRadius: 12,         // M3 default is 12dp for medium components
  },
  spacing: 8,                 // M3 uses 8dp grid system
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: '#1c1b1f',
          scrollbarWidth: 'thin',
          scrollbarColor: '#938f99 #1c1b1f',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundImage: 'none',
          // M3 elevation level 1
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
          transition: 'box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            // M3 elevation level 2
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,       // Full corner (large) for buttons
          textTransform: 'none',
          fontWeight: 500,
          minHeight: 40,          // M3 touch target
          paddingLeft: 24,
          paddingRight: 24,
          transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
          },
          '&:active': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          height: 32,             // M3 default chip height
          transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            // State layer effect
            backgroundColor: 'rgba(208, 188, 255, 0.08)',
          },
        },
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
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
          background: '#1c1b1f',  // M3 dark background
          py: { xs: 3, sm: 4, md: 6 },
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
