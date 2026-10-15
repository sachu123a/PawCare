import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Card, Typography, Button, Container } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PetsIcon from '@mui/icons-material/Pets';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 3,
      }}
    >
      <Container maxWidth="sm">
        <Card
          sx={{
            p: { xs: 4, sm: 6 },
            textAlign: 'center',
            borderRadius: 5,
            border: '1px solid rgba(27, 67, 50, 0.1)',
            boxShadow: '0 16px 40px rgba(27, 67, 50, 0.08)',
          }}
        >
          {/* Paw Icon Badge */}
          <Box
            sx={{
              width: 90,
              height: 90,
              borderRadius: '50%',
              backgroundColor: 'rgba(27, 67, 50, 0.1)',
              color: '#1B4332',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mx: 'auto',
              mb: 3,
            }}
          >
            <PetsIcon sx={{ fontSize: 46 }} />
          </Box>

          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '3.5rem', sm: '4.5rem' },
              color: '#1B4332',
              letterSpacing: '-0.03em',
              lineHeight: 1,
              mb: 1,
            }}
          >
            404
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: 800, color: '#1B4332', mb: 1.5 }}>
            Oops! This paw trail leads nowhere.
          </Typography>

          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.6 }}>
            The page you are looking for has either wandered off or does not exist in the shelter directory.
          </Typography>

          <Button
            variant="contained"
            size="large"
            startIcon={<HomeOutlinedIcon />}
            onClick={() => navigate('/dashboard')}
            sx={{
              py: 1.3,
              px: 3.5,
              fontWeight: 700,
              fontSize: '0.95rem',
            }}
          >
            Return to Dashboard
          </Button>
        </Card>
      </Container>
    </Box>
  );
}
