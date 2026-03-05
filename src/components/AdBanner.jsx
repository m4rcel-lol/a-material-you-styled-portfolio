import { Box } from '@mui/material'

const AD_IMAGE_URL = 'https://github.com/user-attachments/assets/ca83b670-5fae-4349-8324-3f26d4ecc3fc'

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
        animation: 'fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) both',
        animationDelay: '0.5s',
        '@keyframes fadeInUp': {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
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
          borderRadius: 0,
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.08)',
          bgcolor: 'rgba(28, 28, 42, 0.6)',
          backdropFilter: 'blur(16px)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-3px) scale(1.01)',
            border: '1px solid rgba(203, 184, 255, 0.4)',
            boxShadow: '0 12px 32px rgba(203, 184, 255, 0.2)',
            bgcolor: 'rgba(28, 28, 42, 0.8)',
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
