import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  Typography,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Stack,
  Divider,
  Paper,
  Alert,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import PetsIcon from '@mui/icons-material/Pets';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';

import PageHeader from '../components/PageHeader';
import { ANIMALS } from '../data/mockData';

export default function EditAnimal() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find animal or fallback to default
  const existingAnimal = ANIMALS.find((a) => a.id === parseInt(id, 10)) || ANIMALS[0];

  const [formData, setFormData] = useState({
    name: existingAnimal.name,
    type: existingAnimal.type,
    breed: existingAnimal.breed,
    age: existingAnimal.age,
    gender: existingAnimal.gender,
    healthCondition: existingAnimal.healthCondition,
    vaccinationStatus: existingAnimal.vaccinationStatus,
    adoptionStatus: existingAnimal.adoptionStatus,
    imageUrl: existingAnimal.image,
    description: existingAnimal.description,
  });

  return (
    <Box>
      <PageHeader
        title={`Edit Profile: ${existingAnimal.name}`}
        subtitle={`Updating information and records for #PC-${existingAnimal.id.toString().padStart(4, '0')}`}
        action={
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
            Cancel & Return
          </Button>
        }
      />

      <Alert severity="info" sx={{ mb: 3, borderRadius: 3, backgroundColor: '#F0FDF4', color: '#166534', border: '1px solid #BBF7D0' }}>
        <strong>UI Demonstration Mode:</strong> Editing fields modifies local component state for visual inspection. Clicking "Save Changes" navigates back to the animals catalog without writing to a database.
      </Alert>

      <Box component="form">
        <Grid container spacing={3.5}>
          {/* Main Information Column */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Card sx={{ p: { xs: 2.5, sm: 3.5 }, mb: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <PetsIcon sx={{ color: '#1B4332' }} />
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#1B4332' }}>
                  Basic Identification
                </Typography>
              </Box>
              <Divider sx={{ mb: 3 }} />

              <Grid container spacing={2.5}>
                {/* Animal Name */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Animal Name"
                    name="name"
                    defaultValue={formData.name}
                    required
                  />
                </Grid>

                {/* Animal Type */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth>
                    <InputLabel id="edit-type-label">Animal Type</InputLabel>
                    <Select
                      labelId="edit-type-label"
                      name="type"
                      defaultValue={formData.type}
                      label="Animal Type"
                    >
                      <MenuItem value="Dog">Dog</MenuItem>
                      <MenuItem value="Cat">Cat</MenuItem>
                      <MenuItem value="Rabbit">Rabbit</MenuItem>
                      <MenuItem value="Bird">Bird</MenuItem>
                      <MenuItem value="Other">Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Breed */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    label="Breed"
                    name="breed"
                    defaultValue={formData.breed}
                    required
                  />
                </Grid>

                {/* Age */}
                <Grid size={{ xs: 12, sm: 3 }}>
                  <TextField
                    fullWidth
                    label="Age"
                    name="age"
                    defaultValue={formData.age}
                    required
                  />
                </Grid>

                {/* Gender */}
                <Grid size={{ xs: 12, sm: 3 }}>
                  <FormControl fullWidth>
                    <InputLabel id="edit-gender-label">Gender</InputLabel>
                    <Select
                      labelId="edit-gender-label"
                      name="gender"
                      defaultValue={formData.gender}
                      label="Gender"
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Image URL Field */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    label="Image URL"
                    name="imageUrl"
                    defaultValue={formData.imageUrl}
                    helperText="URL to high-resolution animal image"
                  />
                </Grid>

                {/* Description */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Description & Personality"
                    name="description"
                    defaultValue={formData.description}
                  />
                </Grid>
              </Grid>
            </Card>

            {/* Health & Status Card */}
            <Card sx={{ p: { xs: 2.5, sm: 3.5 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                <MedicalInformationOutlinedIcon sx={{ color: '#1B4332' }} />
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#1B4332' }}>
                  Medical & Placement Status
                </Typography>
              </Box>
              <Divider sx={{ mb: 3 }} />

              <Grid container spacing={2.5}>
                {/* Health Condition */}
                <Grid size={{ xs: 12, sm: 4 }}>
                  <FormControl fullWidth>
                    <InputLabel id="edit-health-label">Health Condition</InputLabel>
                    <Select
                      labelId="edit-health-label"
                      name="healthCondition"
                      defaultValue={formData.healthCondition}
                      label="Health Condition"
                    >
                      <MenuItem value="Healthy">Healthy</MenuItem>
                      <MenuItem value="Minor Injury">Minor Injury</MenuItem>
                      <MenuItem value="Under Treatment">Under Treatment</MenuItem>
                      <MenuItem value="Special Needs">Special Needs</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Vaccination Status */}
                <Grid size={{ xs: 12, sm: 4 }}>
                  <FormControl fullWidth>
                    <InputLabel id="edit-vaccine-label">Vaccination Status</InputLabel>
                    <Select
                      labelId="edit-vaccine-label"
                      name="vaccinationStatus"
                      defaultValue={formData.vaccinationStatus}
                      label="Vaccination Status"
                    >
                      <MenuItem value="Fully Vaccinated">Fully Vaccinated</MenuItem>
                      <MenuItem value="Partially Vaccinated">Partially Vaccinated</MenuItem>
                      <MenuItem value="Not Vaccinated">Not Vaccinated</MenuItem>
                      <MenuItem value="Due Soon">Due Soon</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                {/* Adoption Status */}
                <Grid size={{ xs: 12, sm: 4 }}>
                  <FormControl fullWidth>
                    <InputLabel id="edit-adoption-label">Adoption Status</InputLabel>
                    <Select
                      labelId="edit-adoption-label"
                      name="adoptionStatus"
                      defaultValue={formData.adoptionStatus}
                      label="Adoption Status"
                    >
                      <MenuItem value="Available">Available</MenuItem>
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="Adopted">Adopted</MenuItem>
                      <MenuItem value="Quarantine">Quarantine</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Card>
          </Grid>

          {/* Right Column: Image Preview & Save Buttons */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Card sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#1B4332', mb: 2 }}>
                Current Animal Photo
              </Typography>
              <Paper
                variant="outlined"
                sx={{
                  position: 'relative',
                  paddingTop: '75%',
                  borderRadius: 3,
                  overflow: 'hidden',
                  backgroundColor: '#F3EFE6',
                  border: '1px solid rgba(27, 67, 50, 0.15)',
                  mb: 2,
                }}
              >
                <Box
                  component="img"
                  src={formData.imageUrl}
                  alt={formData.name}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Paper>
              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                Photo preview refreshes dynamically if you change the image link.
              </Typography>
            </Card>

            <Card sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#1B4332', mb: 2 }}>
                Save Updates
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                Updates will be reflected across animal views during this session.
              </Typography>

              <Stack spacing={1.5}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  startIcon={<SaveIcon />}
                  sx={{
                    py: 1.3,
                    fontWeight: 700,
                    fontSize: '0.95rem',
                  }}
                >
                  Save Changes
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  size="large"
                  startIcon={<CloseIcon />}
                  onClick={() => navigate('/animals')}
                  sx={{
                    py: 1.3,
                    fontWeight: 600,
                    color: '#687E71',
                    borderColor: 'rgba(27, 67, 50, 0.2)',
                  }}
                >
                  Cancel
                </Button>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
