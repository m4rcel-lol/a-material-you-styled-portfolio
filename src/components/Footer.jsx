import { Box, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: 'center',
        py: 4,
        px: 2,
        borderTop: '1px solid #49454F',
        mx: { xs: 2, sm: 4 },
        mt: 2,
      }}
    >
      <Typography
        variant="labelSmall"
        sx={{
          color: '#938F99',
          letterSpacing: '0.5px',
        }}
      >
        m4rcel-lol · m5rcel · built with Material You ✦ 2026
      </Typography>
    </Box>
  )
}
