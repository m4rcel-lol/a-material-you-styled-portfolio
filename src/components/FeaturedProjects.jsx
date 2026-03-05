import { useState, useEffect } from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActionArea,
  Chip,
  Stack,
  Skeleton,
} from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import ForkRightIcon from '@mui/icons-material/ForkRight'
import CodeIcon from '@mui/icons-material/Code'

const GITHUB_USER = 'm4rcel-lol'

const LANG_COLORS = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Python: '#3776ab',
  HTML: '#e34c26',
  CSS: '#264de4',
  Rust: '#ce422b',
  Go: '#00add8',
  Shell: '#89e051',
  Vue: '#42b883',
  React: '#61dafb',
  C: '#555555',
  'C++': '#f34b7d',
  Java: '#b07219',
  Kotlin: '#A97BFF',
  Swift: '#F05138',
  Ruby: '#701516',
  PHP: '#4F5D95',
  Dart: '#00B4AB',
  default: '#D0BCFF',
}

function LanguageChip({ language }) {
  if (!language) return null
  const color = LANG_COLORS[language] || LANG_COLORS.default
  return (
    <Chip
      icon={<CodeIcon sx={{ fontSize: '14px !important', color: `${color} !important` }} />}
      label={language}
      size="small"
      variant="outlined"
      sx={{
        color: color,
        borderColor: `${color}60`,
        fontSize: '0.7rem',
        height: 24,
        '& .MuiChip-label': { px: 1 },
      }}
    />
  )
}

function ProjectCard({ repo }) {
  return (
    <Card
      elevation={0}
      sx={{
        bgcolor: '#211F26',
        border: '1px solid #49454F',
        borderRadius: '12px',
        height: '100%',
        transition: 'background 200ms cubic-bezier(0.2, 0, 0, 1)',
        '&:hover': {
          bgcolor: '#2B2930',
        },
      }}
    >
      <CardActionArea
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        component="a"
        sx={{ height: '100%', borderRadius: '12px' }}
      >
        <CardContent sx={{ p: 2.5, height: '100%', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Typography
            variant="titleSmall"
            sx={{
              color: 'primary.main',
              fontWeight: 500,
              wordBreak: 'break-word',
            }}
          >
            {repo.name}
          </Typography>

          <Typography
            variant="bodySmall"
            sx={{
              color: 'text.secondary',
              flex: 1,
              lineHeight: 1.5,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {repo.description || 'No description provided.'}
          </Typography>

          <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" gap={1}>
            <LanguageChip language={repo.language} />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, ml: 'auto' }}>
              <StarIcon sx={{ fontSize: 14, color: 'tertiary.main' }} />
              <Typography variant="labelSmall" sx={{ color: 'tertiary.main' }}>
                {repo.stargazers_count}
              </Typography>
              {repo.forks_count > 0 && (
                <>
                  <ForkRightIcon sx={{ fontSize: 14, color: 'secondary.main', ml: 0.5 }} />
                  <Typography variant="labelSmall" sx={{ color: 'secondary.main' }}>
                    {repo.forks_count}
                  </Typography>
                </>
              )}
            </Box>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

function SkeletonCard() {
  return (
    <Card
      elevation={0}
      sx={{
        bgcolor: '#211F26',
        border: '1px solid #49454F',
        borderRadius: '12px',
      }}
    >
      <CardContent sx={{ p: 2.5 }}>
        <Skeleton variant="text" width="60%" height={20} sx={{ bgcolor: '#2B2930', mb: 1 }} />
        <Skeleton variant="text" width="90%" height={16} sx={{ bgcolor: '#2B2930' }} />
        <Skeleton variant="text" width="80%" height={16} sx={{ bgcolor: '#2B2930', mb: 1 }} />
        <Stack direction="row" spacing={1} mt={1}>
          <Skeleton variant="rounded" width={64} height={24} sx={{ bgcolor: '#2B2930', borderRadius: 1 }} />
          <Skeleton variant="rounded" width={40} height={24} sx={{ bgcolor: '#2B2930', borderRadius: 1, ml: 'auto !important' }} />
        </Stack>
      </CardContent>
    </Card>
  )
}

export default function FeaturedProjects() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`)
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) {
          const sorted = data
            .filter(r => !r.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at) - new Date(a.updated_at))
            .slice(0, 3)
          setRepos(sorted)
        }
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <Box
      id="projects"
      component="section"
      aria-label="Featured Projects"
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
          color: 'text.secondary',
          letterSpacing: '0.1px',
          mb: 2.5,
        }}
      >
        Featured projects
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
          gap: 2,
        }}
      >
        {loading
          ? [0, 1, 2].map(i => <SkeletonCard key={i} />)
          : repos.length > 0
          ? repos.map((repo) => <ProjectCard key={repo.id} repo={repo} />)
          : (
            <Box
              sx={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                py: 4,
                color: 'text.secondary',
              }}
            >
              <Typography variant="bodyMedium">No public repositories found.</Typography>
            </Box>
          )}
      </Box>
    </Box>
  )
}
