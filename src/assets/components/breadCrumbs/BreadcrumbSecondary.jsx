import { Box, Breadcrumbs, Link, Typography } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';

const formatBreadcrumbText = (text) => {
  return text.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
};

const BreadcrumbSecondary = () => {
  const location = useLocation();

  const getPathNames = () => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    return pathnames.slice(0, 2);
  };

  const pathnames = getPathNames();

  return (
    <Box
      sx={{
        width: '100%',
        marginTop: { xs: '40px', md: '85px' },
        height: '200px',
        backgroundImage: 'url(/bg-breadcrumb.png)',
        display: 'flex',
        alignItems: 'center',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        p: 2,
        boxSizing: 'border-box',
        position: 'relative', // Ensure it doesn't overlap
        // zIndex: 1, // Ensure it's on top
      }}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<span style={{ color: '#B3B3B3' }}> / </span>}
        sx={{ zIndex: 1 }}
      >
        <Link
          component={RouterLink}
          to="/"
          sx={{
            color: '#B3B3B3',
            fontWeight: 'bold',
            textDecoration: 'none',
            '&:hover': {
              color: '#0065ae', // Warna saat hover
            },
          }}
        >
          Beranda
        </Link>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          return last ? (
            <Typography color="#fff" sx={{ fontWeight: 'bold' }} key={to}>
              {formatBreadcrumbText(value)}
            </Typography>
          ) : (
            <Link
              component={RouterLink}
              to={to}
              sx={{
                color: '#B3B3B3',
                fontWeight: 'bold',
                textDecoration: 'none',
                '&:hover': {
                  color: '#0065ae', // Warna saat hover
                },
              }}
              key={to}
            >
              {formatBreadcrumbText(value)}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbSecondary;
