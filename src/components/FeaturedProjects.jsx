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
  default: '#cbb8ff',
}

function LanguageChip({ language }) {
  if (!language) return null
  const color = LANG_COLORS[language] || LANG_COLORS.default
  return (
    <Chip
      icon={<CodeIcon sx={{ fontSize: '14px !important', color: `${color} !important` }} />}
      label={language}
      size="small"
      sx={{
        bgcolor: `${color}18`,
        color: color,
        border: `1px solid ${color}40`,
        fontFamily: '"Roboto Mono", monospace',
        fontSize: '11px',
        height: 28,
        '& .MuiChip-label': { px: 1 },
      }}
    />
  )
}

function ProjectCard({ repo, delay = 0 }) {
  return (
    <Card
      elevation={0}
      sx={{
        bgcolor: '#2b2930',
        border: '1px solid #49454f',
        borderRadius: 3,
        height: '100%',
        animation: 'fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) both',
        animationDelay: `${delay}s`,
        '@keyframes fadeInUp': {
          from: { opacity: 0, transform: 'translateY(20px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        '&:hover': {
          bgcolor: '#36343b',
          // M3 elevation level 2
          boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
          border: '1px solid #938f99',
        },
        transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <CardActionArea
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        component="a"
        sx={{ height: '100%', borderRadius: 3 }}
      >
        <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography
            variant="titleMedium"
            sx={{
              color: '#d0bcff',
              fontFamily: '"Roboto Mono", monospace',
              fontWeight: 500,
              wordBreak: 'break-word',
            }}
          >
            {repo.name}
          </Typography>

          <Typography
            variant="bodyMedium"
            sx={{
              color: '#cac4d0',
              flex: 1,
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
              <StarIcon sx={{ fontSize: 16, color: '#efb8c8' }} />
              <Typography variant="labelMedium" sx={{ color: '#efb8c8' }}>
                {repo.stargazers_count}
              </Typography>
              {repo.forks_count > 0 && (
                <>
                  <ForkRightIcon sx={{ fontSize: 16, color: '#ccc2dc', ml: 0.5 }} />
                  <Typography variant="labelMedium" sx={{ color: '#ccc2dc' }}>
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
        bgcolor: '#2b2930',
        border: '1px solid #49454f',
        borderRadius: 3,
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Skeleton variant="text" width="60%" height={24} sx={{ bgcolor: '#36343b', mb: 1 }} />
        <Skeleton variant="text" width="90%" height={20} sx={{ bgcolor: '#36343b' }} />
        <Skeleton variant="text" width="80%" height={20} sx={{ bgcolor: '#36343b', mb: 2 }} />
        <Stack direction="row" spacing={1} mt={2}>
          <Skeleton variant="rounded" width={80} height={28} sx={{ bgcolor: '#36343b', borderRadius: 2 }} />
          <Skeleton variant="rounded" width={48} height={28} sx={{ bgcolor: '#36343b', borderRadius: 2, ml: 'auto !important' }} />
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
          // Sort by stars desc, then updated
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
        maxWidth: 1200,
        mx: 'auto',
        px: { xs: 2, sm: 3 },
        mb: { xs: 4, sm: 5 },
      }}
    >
      <Typography
        variant="titleLarge"
        component="h2"
        sx={{
          color: '#d0bcff',
          fontWeight: 400,
          mb: 3,
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
        }}
      >
        Featured Projects
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
          ? repos.map((repo, i) => <ProjectCard key={repo.id} repo={repo} delay={i * 0.1} />)
          : (
            <Box
              sx={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                py: 6,
                color: '#cac4d0',
              }}
            >
              <Typography variant="bodyMedium">No public repositories found.</Typography>
            </Box>
          )}
      </Box>
    </Box>
  )
}
