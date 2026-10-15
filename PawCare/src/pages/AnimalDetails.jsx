import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
  Divider,
  Paper,
  Chip,
  Avatar,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ScaleOutlinedIcon from '@mui/icons-material/ScaleOutlined';
import RestaurantOutlinedIcon from '@mui/icons-material/RestaurantOutlined';

import PageHeader from '../components/PageHeader';
import StatusChip from '../components/StatusChip';
import { ANIMALS } from '../data/mockData';

export default function AnimalDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find animal by ID or fallback to first animal
  const animal = ANIMALS.find((a) => a.id === parseInt(id, 10)) || ANIMALS[0];

  return (
    <Box>
      {/* Top Header with Navigation Buttons */}
      <PageHeader
        title={animal.name}
        subtitle={`${animal.breed} • Intake ID: #PC-${animal.id.toString().padStart(4, '0')}`}
        badge={animal.adoptionStatus}
        action={
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
            <Button
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate('/animals')}
              sx={{
                color: '#2D6A4F',
                borderColor: 'rgba(45, 106, 79, 0.3)',
                fontWeight: 700,
              }}
            >
              Back to Animals
            </Button>
            <Button
              variant="outlined"
              startIcon={<EditOutlinedIcon />}
              onClick={() => navigate(`/animals/edit/${animal.id}`)}
              sx={{
                color: '#1B4332',
                borderColor: 'rgba(27, 67, 50, 0.4)',
                fontWeight: 700,
              }}
            >
              Edit Animal
            </Button>
            <Button
              variant="contained"
              startIcon={<VolunteerActivismIcon />}
              onClick={() => navigate('/adoption-requests', { state: { selectedAnimal: animal } })}
              sx={{
                fontWeight: 700,
              }}
            >
              Create Adoption Request
            </Button>
          </Stack>
        }
      />

      <Grid container spacing={4}>
        {/* Left Column: Large Image & Quick Specifications Card */}
        <Grid size={{ xs: 12, md: 5 }}>
          <Card
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 8px 30px rgba(27, 67, 50, 0.08)',
              mb: 3,
            }}
          >
            <Box sx={{ position: 'relative', paddingTop: '80%' }}>
              <Box
                component="img"
                src={animal.image}
                alt={animal.name}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <Box sx={{ position: 'absolute', top: 16, right: 16 }}>
                <StatusChip status={animal.adoptionStatus} size="medium" />
              </Box>
            </Box>

            <CardContent sx={{ p: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#1B4332', mb: 0.5 }}>
                {animal.name}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', fontWeight: 600, mb: 2 }}>
                {animal.breed} ({animal.type})
              </Typography>

              <Divider sx={{ my: 2 }} />

              {/* Key Specs Grid */}
              <Grid container spacing={2}>
                <Grid size={{ xs: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CalendarMonthOutlinedIcon sx={{ color: '#2D6A4F', fontSize: 20 }} />
                    <Box>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Age
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>
                        {animal.age}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid size={{ xs: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    {animal.gender === 'Male' ? (
                      <MaleIcon sx={{ color: '#0284C7', fontSize: 22 }} />
                    ) : (
                      <FemaleIcon sx={{ color: '#E11D48', fontSize: 22 }} />
                    )}
                    <Box>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Gender
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>
                        {animal.gender}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid size={{ xs: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <ScaleOutlinedIcon sx={{ color: '#2D6A4F', fontSize: 20 }} />
                    <Box>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Weight
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 700 }}>
                        {animal.weight}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>

                <Grid size={{ xs: 6 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <FingerprintIcon sx={{ color: '#2D6A4F', fontSize: 20 }} />
                    <Box>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        Microchip
                      </Typography>
                      <Typography variant="body2" sx={{ fontWeight: 700, fontSize: '0.82rem' }}>
                        {animal.microchipId.slice(0, 8)}...
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column: Detailed Profiles, Health, Personality & Story */}
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack spacing={3}>
            {/* Personality Traits */}
            <Card sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#1B4332', mb: 2 }}>
                Personality & Temperament
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                {animal.personality?.map((trait) => (
                  <Chip
                    key={trait}
                    label={trait}
                    sx={{
                      backgroundColor: '#E8F5E9',
                      color: '#1B5E20',
                      fontWeight: 700,
                      borderRadius: 2,
                      px: 0.5,
                    }}
                  />
                ))}
              </Stack>
            </Card>

            {/* About / Description */}
            <Card sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#1B4332', mb: 1.5 }}>
                About {animal.name}
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.8, fontSize: '0.98rem' }}>
                {animal.description}
              </Typography>
            </Card>

            {/* Health & Veterinary Condition */}
            <Card sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <MedicalServicesOutlinedIcon sx={{ color: '#2D6A4F' }} />
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#1B4332' }}>
                  Medical & Care Status
                </Typography>
              </Box>
              <Divider sx={{ mb: 2.5 }} />

              <Grid container spacing={2.5}>
                <Grid size={{ xs: 12, sm: 4 }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.5 }}>
                    Health Condition
                  </Typography>
                  <StatusChip status={animal.healthCondition} size="medium" />
                </Grid>

                <Grid size={{ xs: 12, sm: 4 }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.5 }}>
                    Vaccination Status
                  </Typography>
                  <StatusChip status={animal.vaccinationStatus} size="medium" />
                </Grid>

                <Grid size={{ xs: 12, sm: 4 }}>
                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.5 }}>
                    Shelter Intake Date
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: '#1B4332', mt: 0.5 }}>
                    {animal.intakeDate}
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Paper
                    variant="outlined"
                    sx={{
                      p: 2,
                      borderRadius: 2.5,
                      backgroundColor: '#FAF8F5',
                      border: '1px solid rgba(27, 67, 50, 0.08)',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
                      <RestaurantOutlinedIcon sx={{ color: '#2D6A4F', mt: 0.3 }} />
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, color: '#1B4332' }}>
                          Diet & Daily Care Notes:
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                          {animal.dietNotes}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Card>

            {/* Shelter Action Box */}
            <Card
              sx={{
                p: 3,
                background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)',
                color: '#FFFFFF',
              }}
            >
              <Grid container alignItems="center" spacing={2}>
                <Grid size={{ xs: 12, sm: 8 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5 }}>
                    Ready to place {animal.name}?
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Review matched applicant files or initiate a new adoption request for this animal.
                  </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 4 }} sx={{ textAlign: { sm: 'right' } }}>
                  <Button
                    variant="contained"
                    onClick={() => navigate('/adoption-requests', { state: { selectedAnimal: animal } })}
                    sx={{
                      backgroundColor: '#FFFFFF',
                      color: '#1B4332',
                      fontWeight: 800,
                      '&:hover': {
                        backgroundColor: '#F3EFE6',
                      },
                    }}
                  >
                    Review Requests
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
