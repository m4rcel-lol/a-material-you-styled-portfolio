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
        animation: 'fadeInScale 0.8s cubic-bezier(0.4, 0, 0.2, 1) both',
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
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-8px)' },
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: -4,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #cbb8ff, #efb8c8, #86d5e4)',
            animation: 'spin 8s linear infinite',
            zIndex: 0,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            inset: -2,
            borderRadius: '50%',
            background: '#0f0f17',
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
            width={112}
            height={112}
            sx={{ bgcolor: '#2e2e40', zIndex: 2, position: 'relative' }}
          />
        ) : (
          <Avatar
            src={userData?.avatar_url || `https://avatars.githubusercontent.com/${GITHUB_USER}`}
            alt={`${GITHUB_USER} avatar`}
            sx={{
              width: 112,
              height: 112,
              zIndex: 2,
              position: 'relative',
              border: '3px solid #1c1c2a',
              boxShadow: '0 8px 32px rgba(203, 184, 255, 0.35)',
              animation: 'glow 3s ease-in-out infinite',
              '@keyframes glow': {
                '0%, 100%': {
                  boxShadow: '0 8px 32px rgba(203, 184, 255, 0.35)',
                },
                '50%': {
                  boxShadow: '0 8px 40px rgba(203, 184, 255, 0.6), 0 0 60px rgba(239, 184, 200, 0.3)',
                },
              },
            }}
          />
        )}
      </Box>

      {/* Name / username */}
      <Typography
        variant="displaySmall"
        component="h1"
        sx={{
          fontWeight: 700,
          background: 'linear-gradient(90deg, #cbb8ff 0%, #efb8c8 50%, #86d5e4 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          letterSpacing: '-0.5px',
          mb: 0.5,
          fontFamily: '"Roboto Mono", "Roboto", monospace',
        }}
      >
        m4rcel
      </Typography>

      <Typography
        variant="titleMedium"
        sx={{ color: '#b0aac8', mb: 2, fontFamily: '"Roboto Mono", monospace', letterSpacing: '0.1em' }}
      >
        aka <span style={{ color: '#cbb8ff' }}>m5rcel</span>
      </Typography>

      {/* Tagline */}
      <Typography
        variant="bodyLarge"
        sx={{ color: '#e6e0f0', mb: 3, maxWidth: 460, lineHeight: 1.6 }}
      >
        developer&nbsp;·&nbsp;creative technologist&nbsp;·&nbsp;electronic producer
      </Typography>

      {/* Status badge */}
      <Chip
        icon={<CodeIcon sx={{ fontSize: 16 }} />}
        label="building stuff & making noise"
        size="small"
        sx={{
          mb: 3,
          bgcolor: 'rgba(203, 184, 255, 0.12)',
          color: '#cbb8ff',
          border: '1px solid rgba(203, 184, 255, 0.25)',
          fontFamily: '"Roboto Mono", monospace',
          fontSize: '0.75rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'default',
          '& .MuiChip-icon': { color: '#cbb8ff' },
          '&:hover': {
            bgcolor: 'rgba(203, 184, 255, 0.18)',
            border: '1px solid rgba(203, 184, 255, 0.4)',
            transform: 'scale(1.05)',
            boxShadow: '0 4px 16px rgba(203, 184, 255, 0.25)',
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
              borderRadius: 3,
              bgcolor: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              cursor: 'default',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(134, 213, 228, 0.3)',
                transform: 'translateY(-2px) scale(1.02)',
                boxShadow: '0 8px 24px rgba(134, 213, 228, 0.15)',
              },
            }}
          >
            <Box sx={{ color: '#86d5e4', display: 'flex', alignItems: 'center' }}>{icon}</Box>
            <Typography variant="labelMedium" sx={{ color: '#e6e0f0', fontWeight: 600 }}>
              {value}
            </Typography>
            <Typography variant="labelSmall" sx={{ color: '#b0aac8' }}>
              {label}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  )
}
