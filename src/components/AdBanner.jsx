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
          borderRadius: 2, // M3 small shape (8px)
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.08)',
          bgcolor: 'rgba(28, 28, 42, 0.7)',
          backdropFilter: 'blur(16px)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
          '&:hover': {
            transform: 'translateY(-2px)',
            border: '1px solid rgba(203, 184, 255, 0.4)',
            boxShadow: '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.3)',
            bgcolor: 'rgba(28, 28, 42, 0.85)',
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
