import { useState, useEffect } from 'react'
import { Box, Typography, Skeleton, Chip, Tooltip } from '@mui/material'
import GitCommitIcon from '@mui/icons-material/Commit'

const GITHUB_USER = 'm4rcel-lol'

// Helper to get contribution level based on commits
const getContributionLevel = (count) => {
  if (count === 0) return 0
  if (count < 3) return 1
  if (count < 6) return 2
  if (count < 9) return 3
  return 4
}

// Colors for different contribution levels (Material You inspired)
const levelColors = {
  0: 'rgba(74, 74, 106, 0.15)', // outline color, very dim
  1: 'rgba(203, 184, 255, 0.25)', // primary, light
  2: 'rgba(203, 184, 255, 0.5)',  // primary, medium
  3: 'rgba(203, 184, 255, 0.75)', // primary, strong
  4: 'rgba(203, 184, 255, 1)',    // primary, full
}

export default function CommitBoard() {
  const [commitData, setCommitData] = useState({})
  const [loading, setLoading] = useState(true)
  const [totalCommits, setTotalCommits] = useState(0)

  useEffect(() => {
    const fetchCommitActivity = async () => {
      try {
        // Fetch recent events from GitHub API
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USER}/events/public?per_page=100`
        )
        const events = await response.json()

        // Process push events to count commits per day
        const commits = {}
        let total = 0

        events.forEach((event) => {
          if (event.type === 'PushEvent') {
            const date = new Date(event.created_at).toISOString().split('T')[0]
            const commitCount = event.payload?.commits?.length || 0
            commits[date] = (commits[date] || 0) + commitCount
            total += commitCount
          }
        })

        setCommitData(commits)
        setTotalCommits(total)
        setLoading(false)
      } catch (error) {
        console.error('Failed to fetch commit data:', error)
        setLoading(false)
      }
    }

    fetchCommitActivity()
  }, [])

  // Generate grid data for last 12 weeks (84 days)
  const generateGridData = () => {
    const days = []
    const today = new Date()

    for (let i = 83; i >= 0; i--) {
      const date = new Date(today)
      date.setDate(date.getDate() - i)
      const dateStr = date.toISOString().split('T')[0]
      const count = commitData[dateStr] || 0
      days.push({
        date: dateStr,
        count,
        level: getContributionLevel(count),
        day: date.getDay(),
      })
    }

    return days
  }

  const gridData = loading ? [] : generateGridData()
  const weeks = loading ? 12 : Math.ceil(gridData.length / 7)

  return (
    <Box
      component="section"
      sx={{
        maxWidth: 900,
        mx: 'auto',
        px: 2,
        mb: 6,
        animation: 'fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) both',
        animationDelay: '0.3s',
        '@keyframes fadeInUp': {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      }}
    >
      <Box
        sx={{
          bgcolor: 'rgba(28, 28, 42, 0.7)',
          backdropFilter: 'blur(16px)',
          borderRadius: 3, // M3 large shape (16px)
          border: '1px solid rgba(255,255,255,0.08)',
          p: { xs: 3, md: 4 },
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
          '&:hover': {
            bgcolor: 'rgba(28, 28, 42, 0.85)',
            border: '1px solid rgba(203,184,255,0.15)',
            boxShadow: '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.3)',
          },
        }}
      >
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
          <GitCommitIcon sx={{ color: '#cbb8ff', fontSize: 24 }} />
          <Typography
            variant="titleLarge"
            sx={{
              color: '#e6e0f0',
              fontWeight: 600,
            }}
          >
            Commit Activity
          </Typography>
          {!loading && (
            <Chip
              label={`${totalCommits} commits`}
              size="small"
              sx={{
                ml: 'auto',
                bgcolor: 'rgba(134, 213, 228, 0.12)',
                color: '#86d5e4',
                border: '1px solid rgba(134, 213, 228, 0.25)',
                fontFamily: '"Roboto Mono", monospace',
                fontSize: '0.7rem',
                height: 32, // M3 chip height
                borderRadius: 2, // M3 small shape (8px)
              }}
            />
          )}
        </Box>

        {/* Commit Grid */}
        {loading ? (
          <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
            {Array.from({ length: 84 }).map((_, i) => (
              <Skeleton
                key={i}
                variant="rectangular"
                width={12}
                height={12}
                sx={{ borderRadius: 0.25, bgcolor: '#2e2e40' }}
              />
            ))}
          </Box>
        ) : (
          <Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: `repeat(${weeks}, 1fr)`,
                gap: 0.5,
                mb: 2,
              }}
            >
              {gridData.map((day, index) => (
                <Tooltip
                  key={index}
                  title={
                    day.count > 0
                      ? `${day.count} commit${day.count !== 1 ? 's' : ''} on ${day.date}`
                      : `No commits on ${day.date}`
                  }
                  arrow
                >
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      bgcolor: levelColors[day.level],
                      borderRadius: 0.5, // M3 extra small shape (4px)
                      border: '1px solid rgba(255,255,255,0.05)',
                      cursor: 'pointer',
                      transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'scale(1.4)',
                        border: '1px solid rgba(203, 184, 255, 0.6)',
                        boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
                        zIndex: 10,
                      },
                    }}
                  />
                </Tooltip>
              ))}
            </Box>

            {/* Legend */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: 0.75,
                mt: 2,
              }}
            >
              <Typography
                variant="labelSmall"
                sx={{ color: '#b0aac8', fontSize: '0.65rem' }}
              >
                Less
              </Typography>
              {[0, 1, 2, 3, 4].map((level) => (
                <Box
                  key={level}
                  sx={{
                    width: 12,
                    height: 12,
                    bgcolor: levelColors[level],
                    borderRadius: 0.25,
                    border: '1px solid rgba(255,255,255,0.05)',
                  }}
                />
              ))}
              <Typography
                variant="labelSmall"
                sx={{ color: '#b0aac8', fontSize: '0.65rem' }}
              >
                More
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}
