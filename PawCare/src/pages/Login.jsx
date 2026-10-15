import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  InputAdornment,
  IconButton,
  Grid,
  Stack,
  Alert,
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';

export default function Login() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5F2EB',
        p: { xs: 2, sm: 4 },
        backgroundImage: `radial-gradient(circle at 10% 20%, rgba(45, 106, 79, 0.05) 0%, transparent 40%),
                          radial-gradient(circle at 90% 80%, rgba(27, 67, 50, 0.08) 0%, transparent 45%)`,
      }}
    >
      <Card
        sx={{
          maxWidth: 1050,
          width: '100%',
          borderRadius: 5,
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(27, 67, 50, 0.12)',
          border: '1px solid rgba(27, 67, 50, 0.1)',
        }}
      >
        <Grid container>
          {/* Left Hero Image & Shelter Brand Panel */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              position: 'relative',
              backgroundImage: `linear-gradient(135deg, rgba(27, 67, 50, 0.85) 0%, rgba(8, 28, 21, 0.92) 100%),
                                url(https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1000&q=80)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: '#FFFFFF',
              p: { xs: 4, sm: 6 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: { xs: 320, md: 620 },
            }}
          >
            {/* Top Brand Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 46,
                  height: 46,
                  borderRadius: 3,
                  backgroundColor: 'rgba(255, 255, 255, 0.18)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                }}
              >
                <PetsIcon sx={{ fontSize: 26, color: '#D8F3DC' }} />
              </Box>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 800, letterSpacing: '-0.02em', color: '#FFFFFF' }}>
                  PawCare
                </Typography>
                <Typography variant="caption" sx={{ color: '#D8F3DC', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600 }}>
                  Animal Shelter Management
                </Typography>
              </Box>
            </Box>

            {/* Middle Inspiring Message */}
            <Box sx={{ my: 4 }}>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: '1.75rem', sm: '2.3rem' },
                  lineHeight: 1.25,
                  mb: 2,
                  color: '#FFFFFF',
                }}
              >
                Every paw deserves a loving forever home.
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.6, fontSize: '0.98rem' }}>
                Manage shelter intakes, veterinary care histories, and adoption workflows seamlessly in one centralized portal.
              </Typography>
            </Box>

            {/* Bottom Badges */}
            <Stack direction="row" spacing={2} sx={{ pt: 2, borderTop: '1px solid rgba(255,255,255,0.15)' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <VolunteerActivismOutlinedIcon sx={{ color: '#74C69D', fontSize: 20 }} />
                <Typography variant="caption" sx={{ fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>
                  1,200+ Rescues
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <ShieldOutlinedIcon sx={{ color: '#74C69D', fontSize: 20 }} />
                <Typography variant="caption" sx={{ fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>
                  Certified Shelter
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* Right Form Panel */}
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              backgroundColor: '#FFFFFF',
              p: { xs: 4, sm: 6 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Box sx={{ maxWidth: 420, width: '100%', mx: 'auto' }}>
              <Box sx={{ mb: 3.5 }}>
                <Typography variant="h4" sx={{ fontWeight: 800, color: '#1B4332', letterSpacing: '-0.02em', mb: 1 }}>
                  Staff Login
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.92rem' }}>
                  Enter your credentials to access the shelter administration dashboard.
                </Typography>
              </Box>

              <Alert severity="info" sx={{ mb: 3, borderRadius: 3, fontSize: '0.82rem', backgroundColor: '#F0FDF4', color: '#166534', border: '1px solid #BBF7D0' }}>
                Demo Credentials: <strong>admin@pawcare.org</strong> / <strong>password123</strong>
              </Alert>

              <Box component="form" noValidate>
                {/* Email Field */}
                <Box sx={{ mb: 2.5 }}>
                  <Typography variant="subtitle2" sx={{ mb: 0.8, fontWeight: 700, color: '#1B4332' }}>
                    Email Address
                  </Typography>
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    type="email"
                    defaultValue="admin@pawcare.org"
                    placeholder="name@shelter.org"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailOutlinedIcon sx={{ color: '#687E71', fontSize: 20 }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                        backgroundColor: '#FAF8F5',
                      },
                    }}
                  />
                </Box>

                {/* Password Field */}
                <Box sx={{ mb: 2 }}>
                  <Typography variant="subtitle2" sx={{ mb: 0.8, fontWeight: 700, color: '#1B4332' }}>
                    Password
                  </Typography>
                  <TextField
                    fullWidth
                    id="password"
                    name="password"
                    type="password"
                    defaultValue="password123"
                    placeholder="Enter your password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LockOutlinedIcon sx={{ color: '#687E71', fontSize: 20 }} />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                            size="small"
                          >
                            <Visibility fontSize="small" />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 3,
                        backgroundColor: '#FAF8F5',
                      },
                    }}
                  />
                </Box>

                {/* Remember Me & Forgot Password */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 3,
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        sx={{
                          color: '#2D6A4F',
                          '&.Mui-checked': { color: '#1B4332' },
                        }}
                      />
                    }
                    label={
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.88rem', fontWeight: 500 }}>
                        Remember me
                      </Typography>
                    }
                  />
                  <Link
                    href="#"
                    underline="hover"
                    sx={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#2D6A4F',
                      '&:hover': { color: '#1B4332' },
                    }}
                  >
                    Forgot password?
                  </Link>
                </Box>

                {/* Forest Green Login Button */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  startIcon={<PetsIcon />}
                  sx={{
                    py: 1.5,
                    fontSize: '1rem',
                    fontWeight: 700,
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)',
                    boxShadow: '0 8px 20px rgba(27, 67, 50, 0.28)',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #143527 0%, #245741 100%)',
                      boxShadow: '0 12px 24px rgba(27, 67, 50, 0.35)',
                    },
                  }}
                >
                  Sign In to Dashboard
                </Button>
              </Box>

              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>
                  PawCare Animal Shelter Administration System
                </Typography>
                <Typography variant="caption" sx={{ color: '#8A9A90', fontSize: '0.75rem' }}>
                  College Minor Project Demonstration • Frontend UI
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
