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
        px: { xs: 2, sm: 3 },
        mb: { xs: 4, sm: 5 },
        animation: 'fadeInScale 0.6s cubic-bezier(0.4, 0, 0.2, 1) both',
        '@keyframes fadeInScale': {
          from: { opacity: 0, transform: 'scale(0.95) translateY(20px)' },
          to: { opacity: 1, transform: 'scale(1) translateY(0)' },
        },
      }}
    >
      {/* Avatar with animated ring */}
      <Box
        sx={{
          position: 'relative',
          mb: 3,
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: -3,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #d0bcff, #efb8c8, #ccc2dc)',
            animation: 'spin 8s linear infinite',
            zIndex: 0,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: -1,
            borderRadius: '50%',
            background: '#1c1b1f',
            zIndex: 1,
          },
          '@keyframes spin': {
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(360deg)' },
          },
        }}
      >
        {loading ? (
          <Skeleton
            variant="circular"
            width={120}
            height={120}
            sx={{ bgcolor: '#36343b', zIndex: 2, position: 'relative' }}
          />
        ) : (
          <Avatar
            src={userData?.avatar_url || `https://avatars.githubusercontent.com/${GITHUB_USER}`}
            alt={`${GITHUB_USER} avatar`}
            sx={{
              width: 120,
              height: 120,
              zIndex: 2,
              position: 'relative',
              border: '2px solid #1c1b1f',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(208, 188, 255, 0.25)',
            }}
          />
        )}
      </Box>

      {/* Name / username */}
      <Typography
        variant="displaySmall"
        component="h1"
        sx={{
          fontWeight: 600,
          background: 'linear-gradient(90deg, #d0bcff 0%, #efb8c8 50%, #ccc2dc 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          mb: 1,
        }}
      >
        m4rcel
      </Typography>

      <Typography
        variant="titleMedium"
        sx={{ color: '#cac4d0', mb: 3, fontFamily: '"Roboto Mono", monospace', letterSpacing: '0.05em' }}
      >
        aka <span style={{ color: '#d0bcff' }}>m5rcel</span>
      </Typography>

      {/* Tagline */}
      <Typography
        variant="bodyLarge"
        sx={{ color: '#e6e1e5', mb: 3, maxWidth: 480, lineHeight: 1.5 }}
      >
        developer&nbsp;·&nbsp;creative technologist&nbsp;·&nbsp;electronic producer
      </Typography>

      {/* Status badge */}
      <Chip
        icon={<CodeIcon sx={{ fontSize: 16 }} />}
        label="building stuff & making noise"
        size="medium"
        sx={{
          mb: 3,
          bgcolor: 'rgba(208, 188, 255, 0.12)',
          color: '#d0bcff',
          border: '1px solid rgba(208, 188, 255, 0.25)',
          fontFamily: '"Roboto Mono", monospace',
          fontSize: '0.75rem',
          minHeight: 32,
          transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'default',
          '& .MuiChip-icon': { color: '#d0bcff' },
          '&:hover': {
            bgcolor: 'rgba(208, 188, 255, 0.16)',
            border: '1px solid rgba(208, 188, 255, 0.35)',
          },
        }}
      />

      {/* GitHub Stats */}
      <Stack
        direction="row"
        spacing={2}
        sx={{
          mt: 1,
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 1.5,
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
              minHeight: 40,            // M3 touch target
              borderRadius: 2,
              bgcolor: '#2b2930',       // M3 surface container high
              border: '1px solid #49454f',
              transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'default',
              '&:hover': {
                bgcolor: '#36343b',
                border: '1px solid #938f99',
                // M3 elevation level 1
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
              },
            }}
          >
            <Box sx={{ color: '#ccc2dc', display: 'flex', alignItems: 'center' }}>{icon}</Box>
            <Typography variant="labelLarge" sx={{ color: '#e6e1e5', fontWeight: 600 }}>
              {value}
            </Typography>
            <Typography variant="labelSmall" sx={{ color: '#cac4d0' }}>
              {label}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}
