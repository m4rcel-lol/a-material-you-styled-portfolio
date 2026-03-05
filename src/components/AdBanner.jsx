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
          borderRadius: 3,
          overflow: 'hidden',
          border: '1px solid #49454F',
          bgcolor: '#1D1B20',
          transition: 'background 200ms cubic-bezier(0.2, 0, 0, 1)',
          '&:hover': {
            bgcolor: '#211F26',
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
