import { Box, Typography } from '@mui/material'

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
      }}
    >
      <Typography
        variant="labelSmall"
        sx={{
          color: '#4a4a6a',
          fontFamily: '"Roboto Mono", monospace',
          letterSpacing: '0.1em',
        }}
      >
        m4rcel-lol · m5rcel · built with material you ✦ 2026
      </Typography>
    </Box>
  )
}
