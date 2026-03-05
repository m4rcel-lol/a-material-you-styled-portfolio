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
          bgcolor: '#211F26',
          borderBottom: '1px solid #49454F',
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
          sx={{
            color: 'primary.main',
            flexShrink: 0,
          }}
        />
        <Typography
          variant="bodySmall"
          sx={{
            color: 'text.secondary',
            lineHeight: 1.6,
            flex: 1,
          }}
        >
          <Box component="span" sx={{ color: 'primary.main', fontWeight: 500 }}>
            Disclaimer:{' '}
          </Box>
          This is a personal portfolio website. The domain{' '}
          <Box component="span" sx={{ color: 'tertiary.main' }}>
            governmental.gay
          </Box>{' '}
          or any subdomain is not affiliated with, endorsed by, or representative of any government,
          political body, or institution — nor does it intend to mock or parody any
          government, official, or country. The name is purely a creative choice.
        </Typography>
        <IconButton
          size="small"
          onClick={handleDismiss}
          aria-label="Dismiss disclaimer"
          sx={{
            color: 'text.secondary',
            flexShrink: 0,
            '&:hover': {
              bgcolor: 'rgba(208, 188, 255, 0.08)',
            },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
    </Collapse>
  )
}
