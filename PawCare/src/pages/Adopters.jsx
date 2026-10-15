import React from 'react';
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
  Stack,
  IconButton,
  Tooltip,
} from '@mui/material';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import PageHeader from '../components/PageHeader';
import StatusChip from '../components/StatusChip';
import { ADOPTERS } from '../data/mockData';

export default function Adopters() {
  return (
    <Box>
      <PageHeader
        title="Adopters Management"
        subtitle="Maintain verified profiles of community members, applicants, and approved pet guardians."
        badge={`${ADOPTERS.length} Registered Adopters`}
        action={
          <Button 
           
            variant="contained"
            size="large"
            startIcon={<PersonAddOutlinedIcon />}
            sx={{
              fontWeight: 700,
              fontSize: '0.92rem',
              py: 1.2,
              px: 3,
            }}
          >
            Add New Adopter
          </Button>
        }
      />

      {/* Adopter Metrics Summary Row */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, sm: 4 }}>
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
              <VerifiedUserOutlinedIcon />
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                Verified Guardians
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#1B4332' }}>
                4 Verified
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
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
              <HomeOutlinedIcon />
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                Home Checks
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#D48B28' }}>
                1 Pending
              </Typography>
            </Box>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <Card sx={{ p: 2.5, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box
              sx={{
                width: 48,
                height: 48,
                borderRadius: 2.5,
                backgroundColor: 'rgba(2, 132, 199, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0284C7',
              }}
            >
              <FavoriteBorderIcon />
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600 }}>
                Successful Placements
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 800, color: '#0284C7' }}>
                74 Total
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>

      {/* Material UI Table of Adopters */}
      <Card sx={{ p: 3 }}>
        <Box sx={{ mb: 2.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 800, color: '#1B4332' }}>
            Registered Adopter Profiles
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.88rem' }}>
            Static roster displaying adopter contact info, housing compatibility, and verification status.
          </Typography>
        </Box>

        <TableContainer sx={{ borderRadius: 3, border: '1px solid rgba(27, 67, 50, 0.08)' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Adopter</TableCell>
                <TableCell>Contact Details</TableCell>
                <TableCell>Location & Housing</TableCell>
                <TableCell>Preferred Animal</TableCell>
                <TableCell>Experience Level</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ADOPTERS.map((adopter) => (
                <TableRow key={adopter.id}>
                  {/* Name and Avatar */}
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Avatar
                        src={adopter.avatar}
                        alt={adopter.name}
                        sx={{ width: 44, height: 44, border: '2px solid rgba(27, 67, 50, 0.15)' }}
                      >
                        {adopter.name.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: '#1B4332' }}>
                          {adopter.name}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          Member since {adopter.registeredDate}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  {/* Contact */}
                  <TableCell>
                    <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '0.88rem' }}>
                      {adopter.email}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {adopter.phone}
                    </Typography>
                  </TableCell>

                  {/* Location & Housing */}
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.2 }}>
                      <LocationOnOutlinedIcon sx={{ fontSize: 16, color: '#2D6A4F' }} />
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        {adopter.location}
                      </Typography>
                    </Box>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                      {adopter.housingType}
                    </Typography>
                  </TableCell>

                  {/* Preferred Animal */}
                  <TableCell>
                    <Box
                      sx={{
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: '#1B4332',
                        backgroundColor: '#FAF8F5',
                        border: '1px solid rgba(27, 67, 50, 0.08)',
                        px: 1.2,
                        py: 0.4,
                        borderRadius: 1.5,
                        display: 'inline-block',
                      }}
                    >
                      {adopter.preferredAnimal}
                    </Box>
                  </TableCell>

                  {/* Experience */}
                  <TableCell sx={{ fontSize: '0.86rem', color: 'text.secondary' }}>
                    {adopter.experience}
                  </TableCell>

                  {/* Status */}
                  <TableCell>
                    <StatusChip status={adopter.status} />
                  </TableCell>

                  {/* Action Buttons */}
                  <TableCell align="center">
                    <Stack direction="row" spacing={0.5} justifyContent="center">
                      <Tooltip title="View Profile">
                        <IconButton size="small" sx={{ color: '#2D6A4F' }}>
                          <VisibilityOutlinedIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Edit Adopter">
                        <IconButton size="small" sx={{ color: '#687E71' }}>
                          <EditOutlinedIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Stack>
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
