import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button,
  InputBase,
  Paper,
  Tooltip,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const ROUTE_TITLES = {
  '/dashboard': 'Dashboard Overview',
  '/animals': 'Shelter Animals',
  '/animals/add': 'Register New Animal',
  '/adopters': 'Adopter Directory',
  '/adoption-requests': 'Adoption Applications',
  '/medical-records': 'Veterinary & Health Records',
};

export default function Navbar({ handleDrawerToggle, drawerWidth = 270 }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElNotifications, setAnchorElNotifications] = useState(null);

  const getPageTitle = () => {
    if (ROUTE_TITLES[location.pathname]) {
      return ROUTE_TITLES[location.pathname];
    }
    if (location.pathname.startsWith('/animals/edit/')) {
      return 'Edit Animal Profile';
    }
    if (location.pathname.startsWith('/animals/')) {
      return 'Animal Profile Details';
    }
    return 'PawCare Management';
  };

  const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  const handleOpenNotifications = (event) => setAnchorElNotifications(event.currentTarget);
  const handleCloseNotifications = () => setAnchorElNotifications(null);

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.92)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(27, 67, 50, 0.08)',
        color: 'text.primary',
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar sx={{ minHeight: '70px !important', px: { xs: 2, sm: 3 } }}>
        {/* Mobile drawer toggle */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: 'none' }, color: '#1B4332' }}
        >
          <MenuIcon />
        </IconButton>

        {/* Current Page Title */}
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontWeight: 800,
              color: '#1B4332',
              fontSize: { xs: '1.05rem', sm: '1.25rem' },
              letterSpacing: '-0.01em',
            }}
          >
            {getPageTitle()}
          </Typography>
        </Box>

        {/* Visual Search Box (Static UI element only) */}
        <Paper
          component="div"
          sx={{
            display: { xs: 'none', lg: 'flex' },
            alignItems: 'center',
            width: 260,
            mr: 2.5,
            px: 1.5,
            py: 0.5,
            backgroundColor: '#F7F5F0',
            border: '1px solid rgba(27, 67, 50, 0.08)',
            boxShadow: 'none',
            borderRadius: 3,
          }}
        >
          <SearchIcon sx={{ color: '#8A9A90', fontSize: 20, mr: 1 }} />
          <InputBase
            placeholder="Quick search..."
            sx={{ fontSize: '0.88rem', color: 'text.primary', width: '100%' }}
            disabled
          />
        </Paper>

        {/* Quick Add Button */}
        <Button
          variant="contained"
          size="small"
          startIcon={<AddIcon />}
          onClick={() => navigate('/animals/add')}
          sx={{
            display: { xs: 'none', sm: 'inline-flex' },
            mr: 2,
            backgroundColor: '#1B4332',
            fontWeight: 700,
            fontSize: '0.82rem',
            py: 0.8,
            px: 2,
            '&:hover': {
              backgroundColor: '#2D6A4F',
            },
          }}
        >
          Add Animal
        </Button>

        {/* Notifications Icon with Badge */}
        <Tooltip title="Recent Alerts">
          <IconButton
            onClick={handleOpenNotifications}
            sx={{
              mr: 1.5,
              color: '#4A5D52',
              backgroundColor: '#F8F6F1',
              '&:hover': {
                backgroundColor: 'rgba(27, 67, 50, 0.08)',
                color: '#1B4332',
              },
            }}
          >
            <Badge badgeContent={3} color="warning">
              <NotificationsOutlinedIcon fontSize="small" />
            </Badge>
          </IconButton>
        </Tooltip>

        {/* Notifications Dropdown */}
        <Menu
          anchorEl={anchorElNotifications}
          open={Boolean(anchorElNotifications)}
          onClose={handleCloseNotifications}
          PaperProps={{
            elevation: 4,
            sx: {
              width: 340,
              borderRadius: 3,
              mt: 1.5,
              p: 1,
              border: '1px solid rgba(27, 67, 50, 0.08)',
            },
          }}
        >
          <Box sx={{ px: 2, py: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 800, color: '#1B4332' }}>
              Notifications
            </Typography>
            <Typography variant="caption" sx={{ color: '#2D6A4F', fontWeight: 600 }}>
              3 new
            </Typography>
          </Box>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleCloseNotifications} sx={{ borderRadius: 2, py: 1 }}>
            <ListItemIcon sx={{ minWidth: 28 }}>
              <FiberManualRecordIcon sx={{ fontSize: 10, color: '#D48B28' }} />
            </ListItemIcon>
            <ListItemText
              primary="New adoption request for Bella"
              secondary="Emily Watson submitted 15 mins ago"
              primaryTypographyProps={{ fontSize: '0.84rem', fontWeight: 600 }}
              secondaryTypographyProps={{ fontSize: '0.72rem' }}
            />
          </MenuItem>
          <MenuItem onClick={handleCloseNotifications} sx={{ borderRadius: 2, py: 1 }}>
            <ListItemIcon sx={{ minWidth: 28 }}>
              <FiberManualRecordIcon sx={{ fontSize: 10, color: '#2D6A4F' }} />
            </ListItemIcon>
            <ListItemText
              primary="Vaccination due: Milo"
              secondary="Dr. Elena scheduled for tomorrow"
              primaryTypographyProps={{ fontSize: '0.84rem', fontWeight: 600 }}
              secondaryTypographyProps={{ fontSize: '0.72rem' }}
            />
          </MenuItem>
          <MenuItem onClick={handleCloseNotifications} sx={{ borderRadius: 2, py: 1 }}>
            <ListItemIcon sx={{ minWidth: 28 }}>
              <FiberManualRecordIcon sx={{ fontSize: 10, color: '#40916C' }} />
            </ListItemIcon>
            <ListItemText
              primary="Rocky adoption finalised!"
              secondary="Adoption packet archived successfully"
              primaryTypographyProps={{ fontSize: '0.84rem', fontWeight: 600 }}
              secondaryTypographyProps={{ fontSize: '0.72rem' }}
            />
          </MenuItem>
        </Menu>

        {/* User Profile Avatar & Dropdown */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0.5 }}>
            <Avatar
              alt="Cristiano Ronaldo"
              src="https://img.a.transfermarkt.technology/portrait/big/8198-1748102259.jpg?lm=4711"
              sx={{ width: 40, height: 40, border: '2px solid #2D6A4F' }}
            />
          </IconButton>
          <Box sx={{ display: { xs: 'none', lg: 'block' }, ml: 1.5, textAlign: 'left' }}>
            <Typography variant="body2" sx={{ fontWeight: 700, color: '#1B4332', lineHeight: 1.2 }}>
              Dr. Cristiano Ronaldo

            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.72rem' }}>
              Shelter Director
            </Typography>
          </Box>
        </Box>

        {/* User Menu */}
        <Menu
          anchorEl={anchorElUser}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
          PaperProps={{
            elevation: 4,
            sx: {
              width: 220,
              borderRadius: 3,
              mt: 1.5,
              p: 0.5,
              border: '1px solid rgba(27, 67, 50, 0.08)',
            },
          }}
        >
          <MenuItem onClick={handleCloseUserMenu} sx={{ borderRadius: 2 }}>
            <ListItemIcon>
              <PersonOutlineOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Admin Profile" primaryTypographyProps={{ fontSize: '0.88rem' }} />
          </MenuItem>
          <MenuItem onClick={handleCloseUserMenu} sx={{ borderRadius: 2 }}>
            <ListItemIcon>
              <SettingsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Shelter Settings" primaryTypographyProps={{ fontSize: '0.88rem' }} />
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem
            onClick={() => {
              handleCloseUserMenu();
              navigate('/login');
            }}
            sx={{ borderRadius: 2, color: '#E76F51' }}
          >
            <ListItemIcon sx={{ color: '#E76F51' }}>
              <LogoutOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Log Out" primaryTypographyProps={{ fontSize: '0.88rem', fontWeight: 600 }} />
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
