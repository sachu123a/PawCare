import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
  Divider,
  Chip,
  IconButton,
} from '@mui/material';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PetsOutlinedIcon from '@mui/icons-material/PetsOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import CloseIcon from '@mui/icons-material/Close';
import PetsIcon from '@mui/icons-material/Pets';

const NAV_ITEMS = [
  { text: 'Dashboard', path: '/dashboard', icon: DashboardOutlinedIcon },
  { text: 'Animals', path: '/animals', icon: PetsOutlinedIcon },
  { text: 'Add Animal', path: '/animals/add', icon: AddCircleOutlineOutlinedIcon },
  { text: 'Adopters', path: '/adopters', icon: PeopleAltOutlinedIcon },
  {
    text: 'Adoption Requests',
    path: '/adoption-requests',
    icon: AssignmentTurnedInOutlinedIcon,
    badge: '18',
  },
  { text: 'Medical Records', path: '/medical-records', icon: MedicalServicesOutlinedIcon },
];

export default function Sidebar({ mobileOpen, handleDrawerToggle, drawerWidth = 270 }) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
    if (mobileOpen) {
      handleDrawerToggle();
    }
  };

  const isActive = (itemPath) => {
    if (itemPath === '/animals') {
      return (
        location.pathname === '/animals' ||
        (location.pathname.startsWith('/animals/') &&
          location.pathname !== '/animals/add')
      );
    }
    return location.pathname === itemPath;
  };

  const drawerContent = (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        borderRight: '1px solid rgba(27, 67, 50, 0.08)',
      }}
    >
      {/* Brand Header */}
      <Box
        sx={{
          p: 3,
          pb: 2.5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          onClick={() => handleNavClick('/dashboard')}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            cursor: 'pointer',
          }}
        >
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: 3,
              background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              boxShadow: '0 8px 16px rgba(27, 67, 50, 0.25)',
            }}
          >
            <PetsIcon sx={{ fontSize: 24 }} />
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                color: '#1B4332',
                letterSpacing: '-0.02em',
                lineHeight: 1.2,
              }}
            >
              PawCare
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: 'text.secondary',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                fontSize: '0.68rem',
              }}
            >
              Shelter Admin
            </Typography>
          </Box>
        </Box>

        {/* Mobile close button */}
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            display: { md: 'none' },
            color: 'text.secondary',
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ borderColor: 'rgba(27, 67, 50, 0.06)' }} />

      {/* Navigation List */}
      <Box sx={{ flexGrow: 1, px: 2, py: 2 }}>
        <Typography
          variant="caption"
          sx={{
            px: 2,
            mb: 1.5,
            display: 'block',
            fontWeight: 700,
            color: '#8A9A90',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontSize: '0.7rem',
          }}
        >
          Main Navigation
        </Typography>

        <List disablePadding sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.path);
            const Icon = item.icon;

            return (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  onClick={() => handleNavClick(item.path)}
                  sx={{
                    borderRadius: 2.5,
                    py: 1.2,
                    px: 2,
                    backgroundColor: active ? 'rgba(45, 106, 79, 0.1)' : 'transparent',
                    color: active ? '#1B4332' : '#4A5D52',
                    fontWeight: active ? 700 : 500,
                    transition: 'all 0.18s ease-in-out',
                    position: 'relative',
                    '&:hover': {
                      backgroundColor: active
                        ? 'rgba(45, 106, 79, 0.14)'
                        : 'rgba(45, 106, 79, 0.05)',
                      color: '#1B4332',
                    },
                    '&::before': active
                      ? {
                          content: '""',
                          position: 'absolute',
                          left: 0,
                          top: '20%',
                          bottom: '20%',
                          width: 4,
                          borderRadius: '0 4px 4px 0',
                          backgroundColor: '#1B4332',
                        }
                      : {},
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 38,
                      color: active ? '#1B4332' : '#687E71',
                    }}
                  >
                    <Icon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontSize: '0.92rem',
                      fontWeight: active ? 700 : 500,
                    }}
                  />
                  {item.badge && (
                    <Chip
                      size="small"
                      label={item.badge}
                      sx={{
                        height: 20,
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        backgroundColor: active ? '#1B4332' : 'rgba(27, 67, 50, 0.1)',
                        color: active ? '#FFFFFF' : '#1B4332',
                      }}
                    />
                  )}
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>

      {/* Admin Mini Profile & Logout */}
      <Box sx={{ p: 2, backgroundColor: '#FAF8F5' }}>
        <Box
          sx={{
            p: 1.5,
            borderRadius: 3,
            backgroundColor: '#FFFFFF',
            border: '1px solid rgba(27, 67, 50, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
            <Avatar
              src="https://cdn-img.staticzz.com/img/jogadores/new/15/79/1579_cristiano_ronaldo_20261009162202.png"
              alt="Cristiano Ronaldo"
              sx={{ width: 38, height: 38, border: '2px solid #2D6A4F' }}
            />
            <Box>
              <Typography variant="body2" sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1.2 }}>
                Cristiano Ronaldo
              </Typography>
              <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.72rem' }}>
                Director
              </Typography>
            </Box>
          </Box>
          <IconButton
            size="small"
            title="Log Out"
            onClick={() => handleNavClick('/login')}
            sx={{
              color: '#8A9A90',
              '&:hover': {
                color: '#E76F51',
                backgroundColor: 'rgba(231, 111, 81, 0.1)',
              },
            }}
          >
            <LogoutOutlinedIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      aria-label="shelter navigation"
    >
      {/* Mobile temporary drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            boxShadow: '4px 0 24px rgba(0,0,0,0.15)',
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop permanent drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
            borderRight: '1px solid rgba(27, 67, 50, 0.08)',
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}
