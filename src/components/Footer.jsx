import { Box, Typography } from '@mui/material'

const baseTextSx = {
  color: '#4a4a6a',
  fontFamily: '"Roboto Mono", monospace',
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: 'center',
        py: 4,
        px: 2,
        borderTop: '1px solid rgba(255,255,255,0.06)',
        mx: { xs: 2, sm: 4 },
        mt: 2,
        animation: 'fadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) both',
        animationDelay: '0.6s',
        '@keyframes fadeIn': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      }}
    >
      <Typography
        variant="labelSmall"
        sx={{
          ...baseTextSx,
          letterSpacing: '0.1em',
          mb: 1,
          transition: 'color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            color: '#86d5e4',
          },
        }}
      >
        m4rcel-lol · m5rcel · built with material you ✦ 2026
      </Typography>

    </Box>
  )
}
