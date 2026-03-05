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
    color: '#d0bcff',
    bg: '#2b2930',
    border: '#49454f',
  },
  {
    icon: <FolderSpecialIcon fontSize="medium" />,
    label: 'Projects',
    sublabel: 'code experiments & builds',
    href: '#projects',
    color: '#ccc2dc',
    bg: '#2b2930',
    border: '#49454f',
    isAnchor: true,
  },
  {
    icon: <EmailIcon fontSize="medium" />,
    label: 'Contact',
    sublabel: 'reach out & collaborate',
    href: 'mailto:contact@m5rcel.dev',
    color: '#efb8c8',
    bg: '#2b2930',
    border: '#49454f',
  },
]

export default function LinkStack() {
  return (
    <Box
      component="section"
      aria-label="Links"
      sx={{
        maxWidth: 600,
        mx: 'auto',
        px: { xs: 2, sm: 3 },
        mb: { xs: 4, sm: 5 },
      }}
    >
      <Stack spacing={2}>
        {LINKS.map((link, i) => (
          <Card
            key={link.label}
            elevation={0}
            sx={{
              bgcolor: link.bg,
              border: `1px solid ${link.border}`,
              borderRadius: 3,
              animation: 'fadeInUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) both',
              animationDelay: `${i * 0.08}s`,
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(20px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
              '&:hover': {
                bgcolor: '#36343b',  // M3 surface container highest
                // M3 elevation level 1
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
                border: `1px solid #938f99`,
              },
              transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
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
                py: 2.5,
                minHeight: 80,  // M3 minimum touch target with content
                display: 'flex',
                alignItems: 'center',
                gap: 2.5,
                borderRadius: 3,
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
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  bgcolor: 'rgba(208, 188, 255, 0.12)',
                  flexShrink: 0,
                  transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {link.icon}
              </Box>
              <Box sx={{ flex: 1, textAlign: 'left' }}>
                <Typography
                  variant="titleMedium"
                  sx={{ color: '#e6e1e5', fontWeight: 500, display: 'block', mb: 0.5 }}
                >
                  {link.label}
                </Typography>
                <Typography variant="bodySmall" sx={{ color: '#cac4d0' }}>
                  {link.sublabel}
                </Typography>
              </Box>
              <OpenInNewIcon
                sx={{ fontSize: 18, color: '#938f99', flexShrink: 0 }}
              />
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </Box>
  )
}
