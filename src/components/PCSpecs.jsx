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
    color: '#cbb8ff',
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
    color: '#86d5e4',
  },
  {
    icon: <StorageIcon />,
    label: 'Storage',
    value: '1TB NVMe SSD',
    color: '#cbb8ff',
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
    color: '#86d5e4',
  },
]

export default function PCSpecs() {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: 900,
        mx: 'auto',
        px: 2,
        mb: 6,
        animation: 'fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) both',
        animationDelay: '0.4s',
        '@keyframes fadeInUp': {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      }}
    >
      <Box
        sx={{
          bgcolor: 'rgba(28, 28, 42, 0.6)',
          backdropFilter: 'blur(16px)',
          borderRadius: 3,
          border: '1px solid rgba(255,255,255,0.08)',
          p: { xs: 3, md: 4 },
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            bgcolor: 'rgba(28, 28, 42, 0.75)',
            border: '1px solid rgba(203,184,255,0.15)',
            boxShadow: '0 8px 32px rgba(203,184,255,0.1)',
          },
        }}
      >
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
          <ComputerIcon sx={{ color: '#cbb8ff', fontSize: 24 }} />
          <Typography
            variant="titleLarge"
            sx={{
              color: '#e6e0f0',
              fontWeight: 600,
            }}
          >
            PC Setup
          </Typography>
          <Chip
            label="Template"
            size="small"
            sx={{
              ml: 'auto',
              bgcolor: 'rgba(239, 184, 200, 0.12)',
              color: '#efb8c8',
              border: '1px solid rgba(239, 184, 200, 0.25)',
              fontFamily: '"Roboto Mono", monospace',
              fontSize: '0.7rem',
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
                  gap: 1.5,
                  p: 2,
                  bgcolor: 'rgba(255,255,255,0.03)',
                  borderRadius: 2,
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.06)',
                    border: `1px solid ${spec.color}60`,
                    transform: 'translateY(-3px)',
                    boxShadow: `0 8px 24px rgba(0,0,0,0.3), 0 0 0 1px ${spec.color}30`,
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 36,
                    height: 36,
                    borderRadius: 1.5,
                    bgcolor: `${spec.color}20`,
                    color: spec.color,
                    flexShrink: 0,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '.MuiBox-root:hover > &': {
                      transform: 'rotate(-5deg) scale(1.1)',
                      bgcolor: `${spec.color}35`,
                      boxShadow: `0 0 16px ${spec.color}40`,
                    },
                  }}
                >
                  {spec.icon}
                </Box>
                <Box sx={{ minWidth: 0, flex: 1 }}>
                  <Typography
                    variant="labelMedium"
                    sx={{
                      color: '#b0aac8',
                      mb: 0.25,
                      fontFamily: '"Roboto Mono", monospace',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      fontSize: '0.65rem',
                    }}
                  >
                    {spec.label}
                  </Typography>
                  <Typography
                    variant="bodyMedium"
                    sx={{
                      color: '#e6e0f0',
                      fontWeight: 500,
                      lineHeight: 1.3,
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
            borderTop: '1px solid rgba(255,255,255,0.06)',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="labelSmall"
            sx={{
              color: '#b0aac8',
              fontFamily: '"Roboto Mono", monospace',
              fontSize: '0.65rem',
            }}
          >
            This is a template • Update specs in PCSpecs.jsx
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
