import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
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
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import PetsIcon from '@mui/icons-material/Pets';
import MedicalInformationOutlinedIcon from '@mui/icons-material/MedicalInformationOutlined';

import PageHeader from '../components/PageHeader';

export default function AddAnimal() {
  const navigate = useNavigate();

  // Form field state for interactive UI feel
  const [formData, setFormData] = useState({
    name: '',
    type: 'Dog',
    breed: '',
    age: '',
    gender: 'Male',
    healthCondition: 'Healthy',
    vaccinationStatus: 'Fully Vaccinated',
    adoptionStatus: 'Available',
    imageUrl: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80',
    description: '',
  });

  return (
    <Box>
      <PageHeader
        title="Register New Animal"
        subtitle="Complete the intake registration form to add a newly rescued pet to the shelter inventory."
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
            Back to Animals
          </Button>
        }
      />

      <Alert severity="info" sx={{ mb: 3, borderRadius: 3, backgroundColor: '#F0FDF4', color: '#166534', border: '1px solid #BBF7D0' }}>
        <strong>UI Demonstration Mode:</strong> Submitting this registration form will simulate an intake record and navigate back to the Animals gallery. No backend database required.
      </Alert>

      <Box component="form">
        <Grid container spacing={3.5}>
          {/* Main Information Column */}
          <Grid size={{ xs: 12, lg: 8 }}>
            {/* Basic Identification Card */}
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
                    placeholder="e.g. Copper, Bella, Winston"
                    required
                  />
                </Grid>

                {/* Animal Type */}
                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl fullWidth>
                    <InputLabel id="animal-type-label">Animal Type</InputLabel>
                    <Select
                      labelId="animal-type-label"
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
                    placeholder="e.g. Golden Retriever, Labrador Mix"
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
                    placeholder="e.g. 2 Years, 6 Months"
                    required
                  />
                </Grid>

                {/* Gender */}
                <Grid size={{ xs: 12, sm: 3 }}>
                  <FormControl fullWidth>
                    <InputLabel id="gender-label">Gender</InputLabel>
                    <Select
                      labelId="gender-label"
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
                    placeholder="https://example.com/pet-image.jpg"
                    helperText="Paste a web image link or preview the default photography sample below."
                  />
                </Grid>

                {/* Description */}
                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Description & Background Story"
                    name="description"
                    defaultValue={formData.description}
                    placeholder="Describe temperament, history, personality traits, and ideal home environment..."
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
                    <InputLabel id="health-condition-label">Health Condition</InputLabel>
                    <Select
                      labelId="health-condition-label"
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
                    <InputLabel id="vaccination-status-label">Vaccination Status</InputLabel>
                    <Select
                      labelId="vaccination-status-label"
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
                    <InputLabel id="adoption-status-label">Adoption Status</InputLabel>
                    <Select
                      labelId="adoption-status-label"
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

          {/* Right Column: Image Preview & Actions */}
          <Grid size={{ xs: 12, lg: 4 }}>
            {/* Live Image Preview Card */}
            <Card sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#1B4332', mb: 2 }}>
                Profile Photo Preview
              </Typography>
              <Paper
                variant="outlined"
                sx={{
                  position: 'relative',
                  paddingTop: '75%',
                  borderRadius: 3,
                  overflow: 'hidden',
                  backgroundColor: '#F3EFE6',
                  border: '2px dashed rgba(27, 67, 50, 0.2)',
                  mb: 2,
                }}
              >
                {formData.imageUrl ? (
                  <Box
                    component="img"
                    src={formData.imageUrl}
                    alt="Preview"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80';
                    }}
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'text.secondary',
                    }}
                  >
                    <AddPhotoAlternateOutlinedIcon sx={{ fontSize: 48, mb: 1, opacity: 0.5 }} />
                    <Typography variant="body2">Enter an image URL</Typography>
                  </Box>
                )}
              </Paper>

              <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1 }}>
                Quick Presets:
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ fontSize: '0.75rem', py: 0.4 }}
                >
                  Dog Photo
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ fontSize: '0.75rem', py: 0.4 }}
                >
                  Cat Photo
                </Button>
                <Button
                  size="small"
                  variant="outlined"
                  sx={{ fontSize: '0.75rem', py: 0.4 }}
                >
                  Rabbit Photo
                </Button>
              </Stack>
            </Card>

            {/* Submission Actions Card */}
            <Card sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#1B4332', mb: 2 }}>
                Complete Registration
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                Double-check medical status before completing the intake submission.
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
                  Register Animal
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
                    '&:hover': {
                      borderColor: '#E76F51',
                      color: '#E76F51',
                      backgroundColor: 'rgba(231, 111, 81, 0.05)',
                    },
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
