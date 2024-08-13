import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSignout } from '../../../services/auth/signout';
import useMediaQuery from '@mui/material/useMediaQuery';

const NavbarSecondary = () => {
  const [activePage, setActivePage] = useState('beranda');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const { mutate: logout } = useSignout();

  const handlePageChange = (pageName, path) => {
    setActivePage(pageName);
    navigate(path);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  useEffect(() => {
    if (!isMobile) {
      setDrawerOpen(false);
    }
  }, [isMobile]);

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#0066AE',
          color: '#ffffff',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
          paddingX: { xs: '1rem', sm: '2rem' },
          zIndex: 9999,
        }}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            height: { xs: '64px', sm: '85px' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <img
              id="logo"
              src="/logo-white.png"
              alt="Logo"
              style={{ width: { xs: '40px', sm: '50px' } }}
            />
            <Typography id="logoText" variant="h6" fontWeight={700}>
              Rupi App
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton color="inherit" edge="end" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Box>

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer}
            sx={{ '& .MuiDrawer-paper': { width: '280px' } }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 8,
                flexDirection: 'column',
              }}
            >
              <List>
                <ListItem
                  button
                  onClick={() => handlePageChange('beranda', '/beranda')}
                >
                  <ListItemText primary="Beranda" />
                </ListItem>
              </List>
              <Box
                sx={{ width: '100%', borderBottom: 1, borderColor: 'divider' }}
              />
              <List>
                <ListItem
                  button
                  onClick={() => handlePageChange('notifications', '/')}
                >
                  <ListItemIcon>
                    <NotificationsIcon sx={{ color: 'primary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Notifications" />
                </ListItem>
                <ListItem
                  button
                  onClick={() => handlePageChange('customerService', '/')}
                >
                  <ListItemIcon>
                    <SupportAgentIcon sx={{ color: 'primary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Customer Service" />
                </ListItem>
                <ListItem
                  button
                  onClick={() => handlePageChange('accountSettings', '/')}
                >
                  <ListItemIcon>
                    <SettingsIcon sx={{ color: 'primary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Account Settings" />
                </ListItem>
                <ListItem button onClick={() => handleLogout()}>
                  <ListItemIcon>
                    <LogoutIcon sx={{ color: 'primary.main' }} />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItem>
              </List>
            </Box>
          </Drawer>

          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
              gap: 8,
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography
                id="beranda"
                variant="h6"
                fontWeight={activePage === 'beranda' ? 700 : 400}
                sx={{ cursor: 'pointer', mb:1 }}
                onClick={() => handlePageChange('beranda', '/beranda')}
              >
                Beranda
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Box sx={{ textAlign: 'center' }}>
                <NotificationsIcon
                  sx={{
                    color: { xs: 'primary.main', sm: '#ffffff' },
                    cursor: 'pointer',
                  }}
                  onClick={() => handlePageChange('notifications', '/')}
                />
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <SupportAgentIcon
                  sx={{
                    color: { xs: 'primary.main', sm: '#ffffff' },
                    cursor: 'pointer',
                  }}
                  onClick={() => handlePageChange('customerService', '/')}
                />
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <SettingsIcon
                  sx={{
                    color: { xs: 'primary.main', sm: '#ffffff' },
                    cursor: 'pointer',
                  }}
                  onClick={() => handlePageChange('accountSettings', '/')}
                />
              </Box>
              <Box sx={{ textAlign: 'center' }}>
                <LogoutIcon
                  sx={{
                    color: { xs: 'primary.main', sm: '#ffffff' },
                    cursor: 'pointer',
                  }}
                  onClick={() => handleLogout()}
                />
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default NavbarSecondary;
