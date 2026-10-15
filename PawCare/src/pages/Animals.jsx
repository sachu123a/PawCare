import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Button, Stack, Typography, Card, CardContent } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import PetsIcon from '@mui/icons-material/Pets';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import PageHeader from '../components/PageHeader';
import AnimalCard from '../components/AnimalCard';
import { ANIMALS } from '../data/mockData';

export default function Animals() {
  const navigate = useNavigate();

  return (
    <Box>
      {/* Page Header with Action Button */}
      <PageHeader
        title="Animals"
        subtitle="Manage shelter intake records, profiles, medical notes, and adoption readiness for all sheltered pets."
        badge={`${ANIMALS.length} Animals Registered`}
        action={
          <Button
            variant="contained"
            size="large"
            startIcon={<AddCircleOutlineIcon />}
            onClick={() => navigate('/animals/add')}
            sx={{
              fontWeight: 700,
              fontSize: '0.92rem',
              py: 1.2,
              px: 3,
            }}
          >
            Add New Animal
          </Button>
        }
      />

      {/* Quick Summary Pill Bar */}
      <Card sx={{ p: 2, mb: 4, backgroundColor: '#FFFFFF' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid size={{ xs: 6, sm: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 2 }}>
              <PetsIcon sx={{ color: '#1B4332', fontSize: 26 }} />
              <Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                  Total Sheltered
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#1B4332', lineHeight: 1.1 }}>
                  8 Animals Shown
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 2 }}>
              <CheckCircleOutlineIcon sx={{ color: '#2D6A4F', fontSize: 26 }} />
              <Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                  Ready to Adopt
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#2D6A4F', lineHeight: 1.1 }}>
                  5 Available
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 2 }}>
              <HourglassEmptyIcon sx={{ color: '#D48B28', fontSize: 26 }} />
              <Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                  In Application
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#D48B28', lineHeight: 1.1 }}>
                  2 Pending
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 2 }}>
              <FavoriteBorderIcon sx={{ color: '#0284C7', fontSize: 26 }} />
              <Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                  Forever Homes
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#0284C7', lineHeight: 1.1 }}>
                  1 Adopted
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>

      {/* Grid of Animal Cards */}
      <Grid container spacing={3.5}>
        {ANIMALS.map((animal) => (
          <Grid key={animal.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <AnimalCard animal={animal} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
