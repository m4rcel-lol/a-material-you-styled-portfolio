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
      }}
    >
      <Typography
        variant="labelSmall"
        sx={{ ...baseTextSx, letterSpacing: '0.1em', mb: 1 }}
      >
        m4rcel-lol · m5rcel · built with material you ✦ 2026
      </Typography>
      <Typography
        variant="labelSmall"
        sx={{ ...baseTextSx, letterSpacing: '0.05em', maxWidth: '600px', mx: 'auto', lineHeight: 1.6 }}
      >
        disclaimer: governmental.gay is not affiliated with any government whatsoever, nor does it make fun of any type of government or any government in any country.
      </Typography>
    </Box>
  )
}
