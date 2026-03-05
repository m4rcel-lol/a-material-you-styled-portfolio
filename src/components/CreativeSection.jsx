import { Box, Typography, Card, CardContent, Stack, Chip } from '@mui/material'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import AlbumIcon from '@mui/icons-material/Album'
import GraphicEqIcon from '@mui/icons-material/GraphicEq'

const TRACKS = [
  {
    title: 'lost in abyss',
    type: 'single',
    description: 'Atmospheric electronic · deep melancholy · digital soundscape',
    color: '#efb8c8',
    accent: '#c09aab',
    bg: 'rgba(239, 184, 200, 0.07)',
    border: 'rgba(239, 184, 200, 0.2)',
    icon: <GraphicEqIcon />,
    tags: ['atmospheric', 'electronic', 'ambient'],
  },
  {
    title: 'living zone',
    type: 'release · 2026',
    description: 'A new chapter · experimental production · evolving identity',
    color: '#86d5e4',
    accent: '#5ab3c4',
    bg: 'rgba(134, 213, 228, 0.07)',
    border: 'rgba(134, 213, 228, 0.2)',
    icon: <AlbumIcon />,
    tags: ['2026', 'experimental', 'release'],
  },
]

export default function CreativeSection() {
  return (
    <Box
      id="creative"
      component="section"
      aria-label="Music & Creative Work"
      sx={{
        maxWidth: 880,
        mx: 'auto',
        px: { xs: 2, sm: 3 },
        mb: 5,
      }}
    >
      <Typography
        variant="titleMedium"
        component="h2"
        sx={{
          color: '#efb8c8',
          fontFamily: '"Roboto Mono", monospace',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          mb: 2.5,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          '&::before': {
            content: '"_"',
            color: '#cbb8ff',
          },
        }}
      >
        creative work
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
          gap: 2,
        }}
      >
        {TRACKS.map((track, i) => (
          <Card
            key={track.title}
            elevation={0}
            sx={{
              bgcolor: track.bg,
              border: `1px solid ${track.border}`,
              borderRadius: '24px',
              overflow: 'hidden',
              animation: 'fadeInUp 0.6s ease both',
              animationDelay: `${i * 0.12}s`,
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(20px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
              '&:hover': {
                transform: 'translateY(-3px)',
                boxShadow: `0 16px 48px rgba(0,0,0,0.4), 0 0 0 1px ${track.border}`,
              },
              transition: 'all 0.25s cubic-bezier(0.2, 0, 0, 1)',
            }}
          >
            <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column' }}>
              {/* Waveform visual */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: 0.5,
                  mb: 2.5,
                  height: 32,
                }}
              >
                {[...Array(16)].map((_, idx) => {
                  const heights = [60, 85, 45, 100, 70, 55, 90, 75, 40, 80, 65, 95, 50, 70, 85, 60]
                  const h = heights[idx] ?? 50
                  return (
                    <Box
                      key={idx}
                      sx={{
                        flex: 1,
                        bgcolor: track.color,
                        borderRadius: '2px',
                        height: `${h}%`,
                        opacity: 0.6,
                        animation: `wave${idx % 4} ${1.2 + (idx % 3) * 0.3}s ease-in-out infinite alternate`,
                        [`@keyframes wave${idx % 4}`]: {
                          from: { opacity: 0.4, height: `${h * 0.6}%` },
                          to: { opacity: 0.8, height: `${h}%` },
                        },
                      }}
                    />
                  )
                })}
              </Box>

              {/* Track icon */}
              <Box
                sx={{
                  color: track.color,
                  mb: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                {track.icon}
                <Chip
                  label={track.type}
                  size="small"
                  sx={{
                    bgcolor: `${track.color}18`,
                    color: track.color,
                    border: `1px solid ${track.border}`,
                    fontFamily: '"Roboto Mono", monospace',
                    fontSize: '0.65rem',
                    height: 20,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                />
              </Box>

              <Typography
                variant="headlineSmall"
                component="h3"
                sx={{
                  color: '#e6e0f0',
                  fontStyle: 'italic',
                  fontWeight: 600,
                  mb: 1,
                  display: 'block',
                  fontFamily: '"Roboto", serif',
                  letterSpacing: '-0.25px',
                }}
              >
                {track.title}
              </Typography>

              <Typography
                variant="bodySmall"
                component="p"
                sx={{ color: '#b0aac8', mb: 2, lineHeight: 1.6, display: 'block' }}
              >
                {track.description}
              </Typography>

              {/* Tags */}
              <Stack direction="row" spacing={1} flexWrap="wrap" gap={0.75}>
                {track.tags.map(tag => (
                  <Chip
                    key={tag}
                    label={`#${tag}`}
                    size="small"
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.05)',
                      color: '#b0aac8',
                      border: '1px solid rgba(255,255,255,0.08)',
                      fontFamily: '"Roboto Mono", monospace',
                      fontSize: '0.65rem',
                      height: 22,
                    }}
                  />
                ))}
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Producer badge */}
      <Box
        sx={{
          mt: 2.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1.5,
          py: 2,
          px: 3,
          borderRadius: '16px',
          bgcolor: 'rgba(203, 184, 255, 0.05)',
          border: '1px solid rgba(203, 184, 255, 0.12)',
        }}
      >
        <MusicNoteIcon sx={{ color: '#cbb8ff', fontSize: 20 }} />
        <Typography
          variant="bodySmall"
          sx={{
            color: '#b0aac8',
            fontFamily: '"Roboto Mono", monospace',
          }}
        >
          electronic music producer · experimenting with sound & code
        </Typography>
        <MusicNoteIcon sx={{ color: '#cbb8ff', fontSize: 20 }} />
      </Box>
    </Box>
  )
}
