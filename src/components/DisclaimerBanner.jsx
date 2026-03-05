import { useState } from 'react'
import { Box, Typography, IconButton, Collapse } from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import CloseIcon from '@mui/icons-material/Close'

const STORAGE_KEY = 'disclaimer_dismissed'

export default function DisclaimerBanner() {
  const [visible, setVisible] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) !== 'true'
  )

  const handleDismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, 'true')
    setVisible(false)
  }

  return (
    <Collapse in={visible} unmountOnExit>
      <Box
        role="region"
        aria-label="Site disclaimer"
        aria-live="polite"
        sx={{
          width: '100%',
          background: 'linear-gradient(90deg, #1e1a2e 0%, #211b38 100%)',
          borderBottom: '1px solid rgba(203,184,255,0.18)',
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          px: { xs: 2, sm: 4 },
          py: 1.25,
          boxSizing: 'border-box',
        }}
      >
        <InfoOutlinedIcon
          fontSize="small"
          sx={{ color: '#cbb8ff', flexShrink: 0 }}
        />
        <Typography
          variant="labelSmall"
          sx={{
            color: '#b0aac8',
            fontFamily: '"Roboto Mono", monospace',
            letterSpacing: '0.05em',
            lineHeight: 1.6,
            flex: 1,
          }}
        >
          <Box component="span" sx={{ color: '#cbb8ff', fontWeight: 600 }}>
            Disclaimer:{' '}
          </Box>
          This is a personal portfolio website. The domain{' '}
          <Box component="span" sx={{ color: '#efb8c8' }}>
            governmental.gay
          </Box>{' '}
          is not affiliated with, endorsed by, or representative of any government,
          political body, or institution — nor does it intend to mock or parody any
          government, official, or country. The name is purely a creative choice.
        </Typography>
        <IconButton
          size="small"
          onClick={handleDismiss}
          aria-label="Dismiss disclaimer"
          sx={{
            color: '#4a4a6a',
            flexShrink: 0,
            '&:hover': { color: '#b0aac8', background: 'rgba(203,184,255,0.08)' },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
    </Collapse>
  )
}
