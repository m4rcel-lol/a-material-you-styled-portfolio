import { Box, Typography, Grid, Chip } from '@mui/material'
import ComputerIcon from '@mui/icons-material/Computer'
import MemoryIcon from '@mui/icons-material/Memory'
import StorageIcon from '@mui/icons-material/Storage'
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard'
import MonitorIcon from '@mui/icons-material/Monitor'
import KeyboardIcon from '@mui/icons-material/Keyboard'

// Template PC specs - can be easily modified
const PC_SPECS = [
  {
    icon: <MemoryIcon />,
    label: 'CPU',
    value: 'Intel Core i7-12700K',
    color: '#d0bcff',
  },
  {
    icon: <DeveloperBoardIcon />,
    label: 'GPU',
    value: 'NVIDIA RTX 3080',
    color: '#efb8c8',
  },
  {
    icon: <StorageIcon />,
    label: 'RAM',
    value: '32GB DDR4 3600MHz',
    color: '#ccc2dc',
  },
  {
    icon: <StorageIcon />,
    label: 'Storage',
    value: '1TB NVMe SSD',
    color: '#d0bcff',
  },
  {
    icon: <MonitorIcon />,
    label: 'Monitor',
    value: '27" 1440p 165Hz',
    color: '#efb8c8',
  },
  {
    icon: <KeyboardIcon />,
    label: 'Keyboard',
    value: 'Mechanical 60%',
    color: '#ccc2dc',
  },
]

export default function PCSpecs() {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: 1000,
        mx: 'auto',
        px: { xs: 2, sm: 3 },
        mb: { xs: 4, sm: 6 },
        animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) both',
        animationDelay: '0.3s',
        '@keyframes fadeInUp': {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      }}
    >
      <Box
        sx={{
          bgcolor: '#2b2930',
          borderRadius: 3,
          border: '1px solid #49454f',
          p: { xs: 3, md: 4 },
          transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            bgcolor: '#36343b',
            border: '1px solid #938f99',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
          },
        }}
      >
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, flexWrap: 'wrap' }}>
          <ComputerIcon sx={{ color: '#d0bcff', fontSize: 28 }} />
          <Typography
            variant="titleLarge"
            sx={{
              color: '#e6e1e5',
              fontWeight: 400,
            }}
          >
            PC Setup
          </Typography>
          <Chip
            label="Template"
            size="medium"
            sx={{
              ml: 'auto',
              bgcolor: 'rgba(239, 184, 200, 0.12)',
              color: '#efb8c8',
              border: '1px solid rgba(239, 184, 200, 0.25)',
              fontFamily: '"Roboto Mono", monospace',
              fontSize: '12px',
              height: 32,
            }}
          />
        </Box>

        {/* Specs Grid */}
        <Grid container spacing={2}>
          {PC_SPECS.map((spec, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2,
                  p: 2.5,
                  bgcolor: '#211f26',
                  borderRadius: 2,
                  border: '1px solid #49454f',
                  transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    bgcolor: '#36343b',
                    border: `1px solid #938f99`,
                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    bgcolor: 'rgba(208, 188, 255, 0.12)',
                    color: spec.color,
                    flexShrink: 0,
                    transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {spec.icon}
                </Box>
                <Box sx={{ minWidth: 0, flex: 1 }}>
                  <Typography
                    variant="labelMedium"
                    sx={{
                      color: '#cac4d0',
                      mb: 0.5,
                      fontFamily: '"Roboto Mono", monospace',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontSize: '11px',
                    }}
                  >
                    {spec.label}
                  </Typography>
                  <Typography
                    variant="bodyMedium"
                    sx={{
                      color: '#e6e1e5',
                      fontWeight: 500,
                    }}
                  >
                    {spec.value}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Additional Info */}
        <Box
          sx={{
            mt: 3,
            pt: 3,
            borderTop: '1px solid #49454f',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="labelSmall"
            sx={{
              color: '#cac4d0',
              fontFamily: '"Roboto Mono", monospace',
              fontSize: '11px',
            }}
          >
            This is a template • Update specs in PCSpecs.jsx
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
