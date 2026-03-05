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
  0: 'rgba(73, 69, 79, 0.2)',     // outline variant, very dim
  1: 'rgba(208, 188, 255, 0.3)',  // primary, light
  2: 'rgba(208, 188, 255, 0.5)',  // primary, medium
  3: 'rgba(208, 188, 255, 0.75)', // primary, strong
  4: 'rgba(208, 188, 255, 1)',    // primary, full
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
        maxWidth: 1000,
        mx: 'auto',
        px: { xs: 2, sm: 3 },
        mb: { xs: 4, sm: 6 },
        animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) both',
        animationDelay: '0.2s',
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
            // M3 elevation level 1
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
          },
        }}
      >
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3, flexWrap: 'wrap' }}>
          <GitCommitIcon sx={{ color: '#d0bcff', fontSize: 28 }} />
          <Typography
            variant="titleLarge"
            sx={{
              color: '#e6e1e5',
              fontWeight: 400,
            }}
          >
            Commit Activity
          </Typography>
          {!loading && (
            <Chip
              label={`${totalCommits} commits`}
              size="medium"
              sx={{
                ml: 'auto',
                bgcolor: 'rgba(204, 194, 220, 0.12)',
                color: '#ccc2dc',
                border: '1px solid rgba(204, 194, 220, 0.25)',
                fontFamily: '"Roboto Mono", monospace',
                fontSize: '12px',
                height: 32,
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
                width={14}
                height={14}
                sx={{ borderRadius: 0.5, bgcolor: '#36343b' }}
              />
            ))}
          </Box>
        ) : (
          <Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: `repeat(${weeks}, 1fr)`,
                gap: 0.75,
                mb: 3,
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
                      width: 14,
                      height: 14,
                      bgcolor: levelColors[day.level],
                      borderRadius: 0.5,
                      border: '1px solid rgba(147, 143, 153, 0.2)',
                      cursor: 'pointer',
                      transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
                      '&:hover': {
                        transform: 'scale(1.5)',
                        border: '1px solid #d0bcff',
                        boxShadow: '0 0 8px rgba(208, 188, 255, 0.4)',
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
                gap: 1,
                mt: 2,
              }}
            >
              <Typography
                variant="labelSmall"
                sx={{ color: '#cac4d0', fontSize: '11px' }}
              >
                Less
              </Typography>
              {[0, 1, 2, 3, 4].map((level) => (
                <Box
                  key={level}
                  sx={{
                    width: 14,
                    height: 14,
                    bgcolor: levelColors[level],
                    borderRadius: 0.5,
                    border: '1px solid rgba(147, 143, 153, 0.2)',
                  }}
                />
              ))}
              <Typography
                variant="labelSmall"
                sx={{ color: '#cac4d0', fontSize: '11px' }}
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
