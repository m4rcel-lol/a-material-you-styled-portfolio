import { useState, useEffect } from 'react'
import {
  Box,
  Avatar,
  Typography,
  Chip,
  Skeleton,
  Stack,
} from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'
import PeopleIcon from '@mui/icons-material/People'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import StarIcon from '@mui/icons-material/Star'

const GITHUB_USER = 'm4rcel-lol'

export default function HeroSection() {
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}`)
      .then(r => r.json())
      .then(data => {
        setUserData(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <Box
      component="section"
      aria-label="Profile"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        px: 2,
        mb: 5,
      }}
    >
      {/* Avatar with M3 primaryContainer ring */}
      <Box
        sx={{
          mb: 3,
          p: 0.5,
          borderRadius: '50%',
          bgcolor: '#4F378B',
        }}
      >
        {loading ? (
          <Skeleton
            variant="circular"
            width={112}
            height={112}
            sx={{ bgcolor: '#2B2930' }}
          />
        ) : (
          <Avatar
            src={userData?.avatar_url || `https://avatars.githubusercontent.com/${GITHUB_USER}`}
            alt={`${GITHUB_USER} avatar`}
            sx={{
              width: 112,
              height: 112,
              border: '3px solid #141218',
            }}
          />
        )}
      </Box>

      {/* Name / username */}
      <Typography
        variant="displaySmall"
        component="h1"
        sx={{
          fontWeight: 400,
          color: 'primary.main',
          letterSpacing: '-0.25px',
          mb: 0.5,
        }}
      >
        m4rcel
      </Typography>

      <Typography
        variant="titleMedium"
        sx={{ color: 'text.secondary', mb: 2 }}
      >
        aka <Box component="span" sx={{ color: 'primary.main' }}>m5rcel</Box>
      </Typography>

      {/* Tagline */}
      <Typography
        variant="bodyLarge"
        sx={{ color: 'text.primary', mb: 3, maxWidth: 460, lineHeight: 1.6 }}
      >
        developer&nbsp;·&nbsp;creative technologist&nbsp;·&nbsp;electronic producer
      </Typography>

      {/* Status badge — M3 assist chip style */}
      <Chip
        icon={<CodeIcon sx={{ fontSize: 18 }} />}
        label="building stuff & making noise"
        variant="outlined"
        sx={{
          mb: 3,
          borderColor: 'outline.main',
          color: 'text.primary',
          cursor: 'default',
          '& .MuiChip-icon': { color: 'primary.main' },
          '&:hover': {
            bgcolor: 'rgba(208, 188, 255, 0.08)',
          },
        }}
      />

      {/* GitHub Stats */}
      <Stack
        direction="row"
        spacing={1.5}
        sx={{
          mt: 1,
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 1,
        }}
      >
        {[
          {
            icon: <PeopleIcon sx={{ fontSize: 16 }} />,
            label: 'followers',
            value: loading ? '—' : (userData?.followers ?? '—'),
          },
          {
            icon: <PersonAddIcon sx={{ fontSize: 16 }} />,
            label: 'following',
            value: loading ? '—' : (userData?.following ?? '—'),
          },
          {
            icon: <StarIcon sx={{ fontSize: 16 }} />,
            label: 'repos',
            value: loading ? '—' : (userData?.public_repos ?? '—'),
          },
        ].map(({ icon, label, value }) => (
          <Box
            key={label}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 0.75,
              px: 2,
              py: 1,
              borderRadius: 2,
              bgcolor: '#211F26',
              border: '1px solid #49454F',
              cursor: 'default',
              transition: 'background 200ms cubic-bezier(0.2, 0, 0, 1)',
              '&:hover': {
                bgcolor: '#2B2930',
              },
            }}
          >
            <Box sx={{ color: 'tertiary.main', display: 'flex', alignItems: 'center' }}>{icon}</Box>
            <Typography variant="labelMedium" sx={{ color: 'text.primary', fontWeight: 600 }}>
              {value}
            </Typography>
            <Typography variant="labelSmall" sx={{ color: 'text.secondary' }}>
              {label}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}
