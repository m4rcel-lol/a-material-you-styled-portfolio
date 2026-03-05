import { Box, Typography, Grid, Chip } from '@mui/material'
import ComputerIcon from '@mui/icons-material/Computer'
import MemoryIcon from '@mui/icons-material/Memory'
import StorageIcon from '@mui/icons-material/Storage'
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard'
import MonitorIcon from '@mui/icons-material/Monitor'
import KeyboardIcon from '@mui/icons-material/Keyboard'

// M3 container tokens for visual variety
const containers = {
  primary: { bg: '#4F378B', fg: '#EADDFF' },
  secondary: { bg: '#4A4458', fg: '#E8DEF8' },
  tertiary: { bg: '#633B48', fg: '#FFD8E4' },
}

const PC_SPECS = [
  { icon: <MemoryIcon />, label: 'CPU', value: 'Intel Core i7-12700K', container: containers.primary },
  { icon: <DeveloperBoardIcon />, label: 'GPU', value: 'NVIDIA RTX 3080', container: containers.tertiary },
  { icon: <StorageIcon />, label: 'RAM', value: '32GB DDR4 3600MHz', container: containers.secondary },
  { icon: <StorageIcon />, label: 'Storage', value: '1TB NVMe SSD', container: containers.primary },
  { icon: <MonitorIcon />, label: 'Monitor', value: '27" 1440p 165Hz', container: containers.tertiary },
  { icon: <KeyboardIcon />, label: 'Keyboard', value: 'Mechanical 60%', container: containers.secondary },
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
      }}
    >
      <Box
        sx={{
          bgcolor: '#1D1B20',
          borderRadius: 3,
          border: '1px solid #49454F',
          p: { xs: 3, md: 4 },
        }}
      >
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
          <ComputerIcon sx={{ color: 'primary.main', fontSize: 24 }} />
          <Typography
            variant="titleLarge"
            sx={{ color: 'text.primary' }}
          >
            PC Setup
          </Typography>
          <Chip
            label="Template"
            size="small"
            variant="outlined"
            sx={{
              ml: 'auto',
              borderColor: '#49454F',
              color: 'text.secondary',
              fontSize: '0.75rem',
            }}
          />
        </Box>

        {/* Specs Grid */}
        <Grid container spacing={2}>
          {PC_SPECS.map((spec, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 1.5,
                  p: 2,
                  bgcolor: '#211F26',
                  borderRadius: 2,
                  border: '1px solid #49454F',
                  transition: 'background 200ms cubic-bezier(0.2, 0, 0, 1)',
                  '&:hover': {
                    bgcolor: '#2B2930',
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
                    borderRadius: '50%',
                    bgcolor: spec.container.bg,
                    color: spec.container.fg,
                    flexShrink: 0,
                  }}
                >
                  {spec.icon}
                </Box>
                <Box sx={{ minWidth: 0, flex: 1 }}>
                  <Typography
                    variant="labelMedium"
                    sx={{
                      color: 'text.secondary',
                      mb: 0.25,
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                      fontSize: '0.6875rem',
                    }}
                  >
                    {spec.label}
                  </Typography>
                  <Typography
                    variant="bodyMedium"
                    sx={{
                      color: 'text.primary',
                      fontWeight: 400,
                      lineHeight: 1.4,
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
            borderTop: '1px solid #49454F',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="labelSmall"
            sx={{
              color: 'text.secondary',
              fontSize: '0.6875rem',
            }}
          >
            This is a template · Update specs in PCSpecs.jsx
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
