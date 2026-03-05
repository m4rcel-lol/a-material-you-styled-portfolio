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
          background: '#211f26',
          borderBottom: '1px solid #49454f',
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          px: { xs: 2, sm: 4 },
          py: 1.5,
          boxSizing: 'border-box',
          animation: 'slideInDown 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          '@keyframes slideInDown': {
            from: { opacity: 0, transform: 'translateY(-20px)' },
            to: { opacity: 1, transform: 'translateY(0)' },
          },
        }}
      >
        <InfoOutlinedIcon
          fontSize="small"
          sx={{
            color: '#d0bcff',
            flexShrink: 0,
          }}
        />
        <Typography
          variant="labelMedium"
          sx={{
            color: '#cac4d0',
            fontFamily: '"Roboto Mono", monospace',
            letterSpacing: '0.5px',
            lineHeight: 1.6,
            flex: 1,
            fontSize: '12px',
          }}
        >
          <Box component="span" sx={{ color: '#d0bcff', fontWeight: 600 }}>
            Disclaimer:{' '}
          </Box>
          This is a personal portfolio website. The domain{' '}
          <Box component="span" sx={{ color: '#efb8c8' }}>
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
            color: '#938f99',
            flexShrink: 0,
            minWidth: 40,
            minHeight: 40,
            transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              color: '#cac4d0',
              background: 'rgba(208, 188, 255, 0.12)',
            },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
    </Collapse>
  )
}
