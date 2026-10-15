import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Typography,
  Button,
  Grid,
  Chip,
  Stack,
} from '@mui/material';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import VaccinesOutlinedIcon from '@mui/icons-material/VaccinesOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import EventRepeatOutlinedIcon from '@mui/icons-material/EventRepeatOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

import PageHeader from '../components/PageHeader';
import StatusChip from '../components/StatusChip';
import { MEDICAL_RECORDS } from '../data/mockData';

export default function MedicalRecords() {
  const navigate = useNavigate();

  return (
    <Box>
      <PageHeader
        title="Veterinary & Medical Records"
        subtitle="Track health exams, immunizations, prescribed treatments, and upcoming wellness visits for sheltered animals."
        badge={`${MEDICAL_RECORDS.length} Logged Exams`}
      />

      {/* Summary Cards for Vaccinations and Health Checkups */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{ p: 2.5, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2.5,
                backgroundColor: 'rgba(27, 67, 50, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#1B4332',
              }}
            >
              <VaccinesOutlinedIcon />
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                Vaccination Coverage
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#1B4332' }}>
                94% Up to Date
              </Typography>
            </Box>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{ p: 2.5, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2.5,
                backgroundColor: 'rgba(64, 145, 108, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#40916C',
              }}
            >
              <HealthAndSafetyOutlinedIcon />
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                Healthy Animals
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#40916C' }}>
                5 Fully Cleared
              </Typography>
            </Box>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{ p: 2.5, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2.5,
                backgroundColor: 'rgba(190, 18, 60, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#BE123C',
              }}
            >
              <MedicalServicesOutlinedIcon />
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                Under Treatment
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#BE123C' }}>
                1 Pet (Luna)
              </Typography>
            </Box>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, sm: 6, md: 3 }}>
          <Card sx={{ p: 2.5, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2.5,
                backgroundColor: 'rgba(212, 139, 40, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#D48B28',
              }}
            >
              <EventRepeatOutlinedIcon />
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                Scheduled Checkups
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#D48B28' }}>
                3 Upcoming
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>

      {/* Medical Records Table */}
      <Card sx={{ p: 3 }}>
        <Box sx={{ mb: 2.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#1B4332' }}>
            Clinical Exam & Treatment History
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.88rem' }}>
            Static clinical log certified by attending shelter veterinarians
          </Typography>
        </Box>

        <TableContainer sx={{ borderRadius: 3, border: '1px solid rgba(27, 67, 50, 0.08)' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Animal</TableCell>
                <TableCell>Clinical Procedure / Exam</TableCell>
                <TableCell>Vaccination Status</TableCell>
                <TableCell>Health Condition</TableCell>
                <TableCell>Prescribed Treatment & Meds</TableCell>
                <TableCell>Attending Vet</TableCell>
                <TableCell>Exam Date</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {MEDICAL_RECORDS.map((record) => (
                <TableRow key={record.id}>
                  {/* Animal Info */}
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Avatar
                        src={record.animalImage}
                        alt={record.animalName}
                        sx={{ width: 44, height: 44, borderRadius: 2 }}
                      />
                      <Box>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 700,
                            color: '#1B4332',
                            cursor: 'pointer',
                            '&:hover': { textDecoration: 'underline' },
                          }}
                          onClick={() => navigate(`/animals/${record.animalId}`)}
                        >
                          {record.animalName}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          {record.animalBreed}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  {/* Procedure */}
                  <TableCell sx={{ fontWeight: 600, fontSize: '0.86rem' }}>
                    {record.recordType}
                  </TableCell>

                  {/* Vaccination */}
                  <TableCell sx={{ fontSize: '0.84rem', color: '#1B5E20', fontWeight: 600 }}>
                    {record.vaccination}
                  </TableCell>

                  {/* Health Condition */}
                  <TableCell>
                    <StatusChip status={record.healthCondition} />
                  </TableCell>

                  {/* Treatment */}
                  <TableCell sx={{ fontSize: '0.84rem', color: 'text.secondary', maxWidth: 240 }}>
                    {record.treatment}
                  </TableCell>

                  {/* Vet */}
                  <TableCell sx={{ fontSize: '0.82rem', fontWeight: 600, color: '#334155' }}>
                    {record.vetName}
                  </TableCell>

                  {/* Checkup Date */}
                  <TableCell sx={{ whiteSpace: 'nowrap' }}>
                    <Typography variant="body2" sx={{ fontSize: '0.85rem', fontWeight: 600 }}>
                      {record.checkupDate}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      Next: {record.nextDue}
                    </Typography>
                  </TableCell>

                  {/* View Details Action */}
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      size="small"
                      startIcon={<VisibilityOutlinedIcon />}
                      onClick={() => navigate(`/animals/${record.animalId}`)}
                      sx={{
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        py: 0.6,
                        px: 1.5,
                        backgroundColor: '#1B4332',
                        '&:hover': { backgroundColor: '#2D6A4F' },
                      }}
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
}
