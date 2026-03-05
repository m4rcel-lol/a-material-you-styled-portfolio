import { Box, Typography, Card, CardActionArea, Stack } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import EmailIcon from '@mui/icons-material/Email'
import FolderSpecialIcon from '@mui/icons-material/FolderSpecial'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'

const LINKS = [
  {
    icon: <GitHubIcon fontSize="medium" />,
    label: 'GitHub',
    sublabel: 'github.com/m4rcel-lol',
    href: 'https://github.com/m4rcel-lol',
    iconBg: '#4F378B',   // M3 primaryContainer
    iconFg: '#EADDFF',   // M3 onPrimaryContainer
    isAnchor: false,
  },
  {
    icon: <FolderSpecialIcon fontSize="medium" />,
    label: 'Projects',
    sublabel: 'code experiments & builds',
    href: '#projects',
    iconBg: '#633B48',   // M3 tertiaryContainer
    iconFg: '#FFD8E4',   // M3 onTertiaryContainer
    isAnchor: true,
  },
  {
    icon: <EmailIcon fontSize="medium" />,
    label: 'Contact',
    sublabel: 'reach out & collaborate',
    href: 'mailto:contact@m5rcel.dev',
    iconBg: '#4A4458',   // M3 secondaryContainer
    iconFg: '#E8DEF8',   // M3 onSecondaryContainer
    isAnchor: false,
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
        {LINKS.map((link) => (
          <Card
            key={link.label}
            elevation={0}
            sx={{
              bgcolor: '#211F26',
              border: '1px solid #49454F',
              borderRadius: '12px',
              transition: 'background 200ms cubic-bezier(0.2, 0, 0, 1)',
              '&:hover': {
                bgcolor: '#2B2930',
              },
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
                gap: 2,
                borderRadius: '12px',
              }}
            >
              <Box
                sx={{
                  color: link.iconFg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  bgcolor: link.iconBg,
                  flexShrink: 0,
                }}
              >
                {link.icon}
              </Box>
              <Box sx={{ flex: 1, textAlign: 'left' }}>
                <Typography
                  variant="titleMedium"
                  sx={{ color: 'text.primary', display: 'block', mb: 0.25 }}
                >
                  {link.label}
                </Typography>
                <Typography variant="bodySmall" sx={{ color: 'text.secondary' }}>
                  {link.sublabel}
                </Typography>
              </Box>
              <OpenInNewIcon
                sx={{ fontSize: 16, color: 'text.secondary', flexShrink: 0 }}
              />
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </Box>
  )
}
