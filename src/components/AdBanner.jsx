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
        px: { xs: 2, sm: 3 },
        py: 3,
        mx: 'auto',
        maxWidth: 'fit-content',
        animation: 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) both',
        animationDelay: '0.4s',
        '@keyframes fadeInUp': {
          from: { opacity: 0, transform: 'translateY(20px)' },
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
          borderRadius: 2,
          overflow: 'hidden',
          border: '1px solid #49454f',
          bgcolor: '#2b2930',
          transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            border: '1px solid #938f99',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
            bgcolor: '#36343b',
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
