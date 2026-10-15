import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Stack,
  IconButton,
  Chip,
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

import DashboardCard from '../components/DashboardCard';
import StatusChip from '../components/StatusChip';
import PageHeader from '../components/PageHeader';
import {
  ANIMALS,
  DASHBOARD_STATS,
  ADOPTION_TRENDS_DATA,
  SPECIES_DISTRIBUTION,
  RECENT_ADOPTION_REQUESTS,
} from '../data/mockData';

export default function Dashboard() {
  const navigate = useNavigate();

  // Top recently added animals
  const recentAnimals = ANIMALS.slice(0, 4);

  return (
    <Box>
      {/* Welcome Banner & Quick Action Buttons */}
      <Box
        sx={{
          p: { xs: 3, md: 4 },
          mb: 4,
          borderRadius: 4,
          background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 60%, #40916C 100%)',
          color: '#FFFFFF',
          boxShadow: '0 12px 30px rgba(27, 67, 50, 0.18)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            right: -20,
            bottom: -30,
            opacity: 0.08,
            color: '#FFFFFF',
            transform: 'rotate(-15deg)',
          }}
        >
          <PetsIcon sx={{ fontSize: 260 }} />
        </Box>

        <Grid container alignItems="center" spacing={3}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Chip
              label="Shelter Live Status: All Systems Operational"
              size="small"
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.75rem',
                backdropFilter: 'blur(4px)',
                mb: 1.5,
              }}
            />
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '1.75rem', sm: '2.4rem' },
                letterSpacing: '-0.02em',
                mb: 1,
                lineHeight: 1.2,
              }}
            >
              Welcome back, Admin!
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: { xs: '0.95rem', sm: '1.05rem' },
                maxWidth: 600,
              }}
            >
              PawCare currently shelters <strong>{DASHBOARD_STATS.totalAnimals} animals</strong> across all units. 
              You have <strong>{DASHBOARD_STATS.pendingRequests} adoption requests</strong> waiting for your evaluation.
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={1.5}
              justifyContent={{ xs: 'flex-start', md: 'flex-end' }}
            >
              <Button
                variant="contained"
                startIcon={<AddCircleOutlineIcon />}
                onClick={() => navigate('/animals/add')}
                sx={{
                  backgroundColor: '#FFFFFF',
                  color: '#1B4332',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  py: 1.2,
                  px: 2.5,
                  '&:hover': {
                    backgroundColor: '#F3EFE6',
                  },
                }}
              >
                Register Animal
              </Button>
              <Button
                variant="outlined"
                startIcon={<PetsIcon />}
                onClick={() => navigate('/animals')}
                sx={{
                  color: '#FFFFFF',
                  borderColor: 'rgba(255, 255, 255, 0.4)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  py: 1.2,
                  px: 2,
                  '&:hover': {
                    borderColor: '#FFFFFF',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                View Animals
              </Button>
              <Button
                variant="outlined"
                startIcon={<VolunteerActivismIcon />}
                onClick={() => navigate('/adoption-requests')}
                sx={{
                  color: '#FFFFFF',
                  borderColor: 'rgba(255, 255, 255, 0.4)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  py: 1.2,
                  px: 2,
                  '&:hover': {
                    borderColor: '#FFFFFF',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                Requests
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      {/* 4 Statistics Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <DashboardCard
            title="Total Animals"
            value={DASHBOARD_STATS.totalAnimals}
            change={DASHBOARD_STATS.totalAnimalsChange}
            icon={PetsIcon}
            iconBg="rgba(27, 67, 50, 0.1)"
            iconColor="#1B4332"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <DashboardCard
            title="Available Animals"
            value={DASHBOARD_STATS.availableAnimals}
            change={DASHBOARD_STATS.availableAnimalsChange}
            icon={CheckCircleOutlineIcon}
            iconBg="rgba(64, 145, 108, 0.1)"
            iconColor="#40916C"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <DashboardCard
            title="Adopted Animals"
            value={DASHBOARD_STATS.adoptedAnimals}
            change={DASHBOARD_STATS.adoptedAnimalsChange}
            icon={FavoriteBorderIcon}
            iconBg="rgba(2, 132, 199, 0.1)"
            iconColor="#0284C7"
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
          <DashboardCard
            title="Pending Requests"
            value={DASHBOARD_STATS.pendingRequests}
            change={DASHBOARD_STATS.pendingRequestsChange}
            icon={AssignmentLateOutlinedIcon}
            iconBg="rgba(212, 139, 40, 0.1)"
            iconColor="#D48B28"
          />
        </Grid>
      </Grid>

      {/* Charts Section: Adoption Trends & Species Breakdown */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Main Adoption Trends Area Chart */}
        <Grid size={{ xs: 12, lg: 8 }}>
          <Card sx={{ p: 3, height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 800, color: '#1B4332' }}>
                  Adoption & Rescue Dynamics (2026)
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
                  Monthly trend of animals sheltered vs happily adopted
                </Typography>
              </Box>
              <Chip
                label="Annual Growth: +28%"
                size="small"
                sx={{ backgroundColor: '#E8F5E9', color: '#1B5E20', fontWeight: 700 }}
              />
            </Box>

            <Box sx={{ width: '100%', height: 320 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={ADOPTION_TRENDS_DATA} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorAdopted" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2D6A4F" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#2D6A4F" stopOpacity={0.0} />
                    </linearGradient>
                    <linearGradient id="colorRescued" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#D48B28" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#D48B28" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(27, 67, 50, 0.08)" />
                  <XAxis dataKey="month" stroke="#55695D" fontSize={12} tickLine={false} />
                  <YAxis stroke="#55695D" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: 10,
                      border: '1px solid rgba(27, 67, 50, 0.1)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                      fontFamily: 'inherit',
                    }}
                  />
                  <Legend
                    wrapperStyle={{ paddingTop: 12, fontSize: '0.85rem', fontWeight: 600 }}
                  />
                  <Area
                    type="monotone"
                    dataKey="adopted"
                    name="Animals Adopted"
                    stroke="#2D6A4F"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorAdopted)"
                  />
                  <Area
                    type="monotone"
                    dataKey="rescued"
                    name="Animals Rescued"
                    stroke="#D48B28"
                    strokeWidth={2}
                    strokeDasharray="4 4"
                    fillOpacity={1}
                    fill="url(#colorRescued)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </Box>
          </Card>
        </Grid>

        {/* Species Distribution Donut Chart */}
        <Grid size={{ xs: 12, lg: 4 }}>
          <Card sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: 800, color: '#1B4332', mb: 0.5 }}>
                Shelter Population
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem', mb: 1 }}>
                Resident distribution by species
              </Typography>
            </Box>

            <Box sx={{ width: '100%', height: 230 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={SPECIES_DISTRIBUTION}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={85}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {SPECIES_DISTRIBUTION.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#FFFFFF',
                      borderRadius: 8,
                      border: '1px solid rgba(0,0,0,0.1)',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Box>

            <Stack spacing={1} sx={{ mt: 1 }}>
              {SPECIES_DISTRIBUTION.map((item) => (
                <Box
                  key={item.name}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '0.85rem',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box
                      sx={{
                        width: 10,
                        height: 10,
                        borderRadius: '50%',
                        backgroundColor: item.color,
                      }}
                    />
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                      {item.name}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.secondary' }}>
                    {item.value} pets
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Card>
        </Grid>
      </Grid>

      {/* Recently Added Animals Showcase */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#1B4332' }}>
              Recently Sheltered Animals
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.88rem' }}>
              Latest animals admitted to the shelter ready for adoption or fostering
            </Typography>
          </Box>
          <Button
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate('/animals')}
            sx={{ fontWeight: 700, color: '#2D6A4F' }}
          >
            Browse All Animals
          </Button>
        </Box>

        <Grid container spacing={3}>
          {recentAnimals.map((animal) => (
            <Grid key={animal.id} size={{ xs: 12, sm: 6, lg: 3 }}>
              <Card
                sx={{
                  borderRadius: 3.5,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 28px rgba(27, 67, 50, 0.12)',
                  },
                }}
                onClick={() => navigate(`/animals/${animal.id}`)}
              >
                <Box sx={{ position: 'relative', paddingTop: '65%' }}>
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
                  <Box sx={{ position: 'absolute', top: 10, right: 10 }}>
                    <StatusChip status={animal.adoptionStatus} />
                  </Box>
                </Box>
                <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.5 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#1B4332' }}>
                      {animal.name}
                    </Typography>
                    <Typography variant="caption" sx={{ fontWeight: 700, color: '#40916C', backgroundColor: '#E8F5E9', px: 1, py: 0.3, borderRadius: 1.5 }}>
                      {animal.age}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '0.82rem' }}>
                    {animal.breed}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Recent Adoption Requests Table */}
      <Card sx={{ p: 3, mb: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 800, color: '#1B4332' }}>
              Recent Adoption Inquiries & Requests
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.88rem' }}>
              Applicants awaiting review and background checks
            </Typography>
          </Box>
          <Button
            variant="outlined"
            size="small"
            endIcon={<ArrowForwardIcon />}
            onClick={() => navigate('/adoption-requests')}
            sx={{
              color: '#2D6A4F',
              borderColor: 'rgba(45, 106, 79, 0.3)',
              fontWeight: 700,
            }}
          >
            View All Requests
          </Button>
        </Box>

        <TableContainer sx={{ borderRadius: 2.5, border: '1px solid rgba(27, 67, 50, 0.08)' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Request ID</TableCell>
                <TableCell>Animal</TableCell>
                <TableCell>Applicant Name</TableCell>
                <TableCell>Contact Details</TableCell>
                <TableCell>Application Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {RECENT_ADOPTION_REQUESTS.slice(0, 5).map((req) => (
                <TableRow key={req.id}>
                  <TableCell sx={{ fontWeight: 700, color: '#1B4332', fontSize: '0.85rem' }}>
                    {req.id}
                  </TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Avatar
                        src={req.animalImage}
                        alt={req.animalName}
                        sx={{ width: 40, height: 40, borderRadius: 2 }}
                      />
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 700, color: '#1B4332' }}>
                          {req.animalName}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          {req.animalType}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ fontWeight: 600 }}>{req.adopterName}</TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontSize: '0.85rem' }}>
                      {req.adopterEmail}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {req.adopterPhone}
                    </Typography>
                  </TableCell>
                  <TableCell sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>
                    {req.requestDate}
                  </TableCell>
                  <TableCell>
                    <StatusChip status={req.status} />
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      size="small"
                      variant="text"
                      startIcon={<VisibilityOutlinedIcon />}
                      onClick={() => navigate('/adoption-requests')}
                      sx={{ color: '#2D6A4F', fontWeight: 700, fontSize: '0.8rem' }}
                    >
                      Review
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
