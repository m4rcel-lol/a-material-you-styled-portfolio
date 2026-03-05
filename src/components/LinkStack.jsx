import { Box, Typography, Card, CardActionArea, Stack } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import EmailIcon from '@mui/icons-material/Email'
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial'
import HeadphonesIcon from '@mui/icons-material/Headphones'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

const LINKS = [
  {
    icon: <GitHubIcon fontSize="medium" />,
    label: 'GitHub',
    sublabel: 'github.com/m4rcel-lol',
    href: 'https://github.com/m4rcel-lol',
    color: '#cbb8ff',
    bg: 'rgba(203, 184, 255, 0.08)',
    border: 'rgba(203, 184, 255, 0.2)',
    hoverBg: 'rgba(203, 184, 255, 0.14)',
  },
  {
    icon: <HeadphonesIcon fontSize="medium" />,
    label: 'SoundCloud',
    sublabel: 'electronic · beats · atmosphere',
    href: 'https://soundcloud.com/m5rcel',
    color: '#ffb85f',
    bg: 'rgba(255, 184, 95, 0.08)',
    border: 'rgba(255, 184, 95, 0.2)',
    hoverBg: 'rgba(255, 184, 95, 0.14)',
  },
  {
    icon: <MusicNoteIcon fontSize="medium" />,
    label: 'Music & Releases',
    sublabel: 'lost in abyss · living zone (2026)',
    href: '#creative',
    color: '#efb8c8',
    bg: 'rgba(239, 184, 200, 0.08)',
    border: 'rgba(239, 184, 200, 0.2)',
    hoverBg: 'rgba(239, 184, 200, 0.14)',
    isAnchor: true,
  },
  {
    icon: <FolderSpecialIcon fontSize="medium" />,
    label: 'Projects',
    sublabel: 'code experiments & builds',
    href: '#projects',
    color: '#86d5e4',
    bg: 'rgba(134, 213, 228, 0.08)',
    border: 'rgba(134, 213, 228, 0.2)',
    hoverBg: 'rgba(134, 213, 228, 0.14)',
    isAnchor: true,
  },
  {
    icon: <EmailIcon fontSize="medium" />,
    label: 'Contact',
    sublabel: 'reach out & collaborate',
    href: 'mailto:contact@m5rcel.dev',
    color: '#a5d6a7',
    bg: 'rgba(165, 214, 167, 0.08)',
    border: 'rgba(165, 214, 167, 0.2)',
    hoverBg: 'rgba(165, 214, 167, 0.14)',
  },
]

export default function LinkStack() {
  return (
    <Box
      component="section"
      aria-label="Links"
      sx={{
        maxWidth: 520,
        mx: 'auto',
        px: { xs: 2, sm: 3 },
        mb: 5,
      }}
    >
      <Stack spacing={1.5}>
        {LINKS.map((link, i) => (
          <Card
            key={link.label}
            elevation={0}
            sx={{
              bgcolor: link.bg,
              border: `1px solid ${link.border}`,
              borderRadius: '20px',
              backdropFilter: 'blur(12px)',
              animation: 'fadeInUp 0.6s ease both',
              animationDelay: `${i * 0.08}s`,
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(20px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
              '&:hover': {
                bgcolor: link.hoverBg,
                transform: 'translateY(-2px)',
                boxShadow: `0 8px 32px rgba(0,0,0,0.35), 0 0 0 1px ${link.border}`,
                border: `1px solid ${link.color}40`,
              },
              transition: 'all 0.2s cubic-bezier(0.2, 0, 0, 1)',
            }}
          >
            <CardActionArea
              href={link.href}
              component="a"
              target={link.isAnchor ? undefined : '_blank'}
              rel={link.isAnchor ? undefined : 'noopener noreferrer'}
              onClick={
                link.isAnchor
                  ? e => {
                      e.preventDefault()
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                    }
                  : undefined
              }
              sx={{
                px: 3,
                py: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 2.5,
                borderRadius: '20px',
                '& .MuiTouchRipple-root .MuiTouchRipple-rippleVisible': {
                  color: link.color,
                  opacity: 0.25,
                },
              }}
            >
              <Box
                sx={{
                  color: link.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  bgcolor: `${link.color}18`,
                  flexShrink: 0,
                }}
              >
                {link.icon}
              </Box>
              <Box sx={{ flex: 1, textAlign: 'left' }}>
                <Typography
                  variant="titleMedium"
                  sx={{ color: '#e6e0f0', fontWeight: 600, display: 'block', mb: 0.25 }}
                >
                  {link.label}
                </Typography>
                <Typography variant="bodySmall" sx={{ color: '#b0aac8' }}>
                  {link.sublabel}
                </Typography>
              </Box>
              <OpenInNewIcon
                sx={{ fontSize: 16, color: link.color, opacity: 0.6, flexShrink: 0 }}
              />
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </Box>
  )
}
