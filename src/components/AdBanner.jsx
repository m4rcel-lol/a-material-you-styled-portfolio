import { Box } from '@mui/material'

const AD_IMAGE_URL = 'https://static.wikia.nocookie.net/roblox/images/8/8e/AdBannerTemplate.png/revision/latest/scale-to-width-down/728?cb=20190402130020'

export default function AdBanner() {
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        py: 3,
        mx: 'auto',
        maxWidth: 'fit-content',
        animation: 'fadeInUp 0.7s ease both',
        animationDelay: '0.5s',
      }}
    >
      <Box
        component="a"
        href={AD_IMAGE_URL}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'block',
          width: '728px',
          height: '90px',
          maxWidth: '100%',
          borderRadius: 2,
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.08)',
          bgcolor: 'rgba(28, 28, 42, 0.6)',
          backdropFilter: 'blur(12px)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            border: '1px solid rgba(203, 184, 255, 0.3)',
            boxShadow: '0 8px 24px rgba(203, 184, 255, 0.15)',
          },
        }}
      >
        <Box
          component="img"
          src={AD_IMAGE_URL}
          alt="Advertisement"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </Box>
    </Box>
  )
}
