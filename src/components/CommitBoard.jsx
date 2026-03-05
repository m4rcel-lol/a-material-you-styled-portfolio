import { useState, useEffect } from 'react'
import { Box, Typography, Skeleton, Chip, Tooltip } from '@mui/material'
import GitCommitIcon from '@mui/icons-material/Commit'

const GITHUB_USER = 'm4rcel-lol'

const getContributionLevel = (count) => {
  if (count === 0) return 0
  if (count < 3) return 1
  if (count < 6) return 2
  if (count < 9) return 3
  return 4
}

// M3 tonal primary levels for the heatmap
const levelColors = {
  0: '#211F26',   // surface container
  1: '#3C3455',   // primary tone 25
  2: '#4F378B',   // primary container
  3: '#8B72CF',   // primary tone 60
  4: '#D0BCFF',   // primary
}

export default function CommitBoard() {
  const [commitData, setCommitData] = useState({})
  const [loading, setLoading] = useState(true)
  const [totalCommits, setTotalCommits] = useState(0)

  useEffect(() => {
    const fetchCommitActivity = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USER}/events/public?per_page=100`
        )
        const events = await response.json()

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
          <GitCommitIcon sx={{ color: 'primary.main', fontSize: 24 }} />
          <Typography
            variant="titleLarge"
            sx={{ color: 'text.primary' }}
          >
            Commit Activity
          </Typography>
          {!loading && (
            <Chip
              label={`${totalCommits} commits`}
              size="small"
              variant="outlined"
              sx={{
                ml: 'auto',
                borderColor: '#49454F',
                color: 'text.secondary',
                fontSize: '0.75rem',
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
                sx={{ borderRadius: 0.5, bgcolor: '#2B2930' }}
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
                      borderRadius: 0.5,
                      cursor: 'pointer',
                      transition: 'transform 200ms cubic-bezier(0.2, 0, 0, 1)',
                      '&:hover': {
                        transform: 'scale(1.3)',
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
              <Typography variant="labelSmall" sx={{ color: 'text.secondary', fontSize: '0.65rem' }}>
                Less
              </Typography>
              {[0, 1, 2, 3, 4].map((level) => (
                <Box
                  key={level}
                  sx={{
                    width: 12,
                    height: 12,
                    bgcolor: levelColors[level],
                    borderRadius: 0.5,
                  }}
                />
              ))}
              <Typography variant="labelSmall" sx={{ color: 'text.secondary', fontSize: '0.65rem' }}>
                More
              </Typography>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  )
}
