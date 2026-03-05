import { Box, Typography } from '@mui/material'

const baseTextSx = {
  color: '#938f99',
  fontFamily: '"Roboto Mono", monospace',
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        textAlign: 'center',
        py: 4,
        px: { xs: 2, sm: 3 },
        borderTop: '1px solid #49454f',
        mx: { xs: 2, sm: 4 },
        mt: 2,
        animation: 'fadeIn 0.7s cubic-bezier(0.4, 0, 0.2, 1) both',
        animationDelay: '0.5s',
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
          letterSpacing: '0.5px',
          mb: 1,
          transition: 'color 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            color: '#ccc2dc',
          },
        }}
      >
        m4rcel-lol · m5rcel · built with material you ✦ 2026
      </Typography>

    </Box>
  )
}
