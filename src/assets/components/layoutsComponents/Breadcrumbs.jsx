import { Box, Breadcrumbs, Card, Link, Typography } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';

const formatBreadcrumbText = (text) => {
  return text
    .replace(/-/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase()); 
};

const BreadcrumbsComponent = () => {
  const location = useLocation();

  const getPathNames = () => {
    const pathnames = location.pathname.split('/').filter((x) => x);
    return pathnames;
  };

  const pathnames = getPathNames();

  return (
    <Card
      sx={{
        minWidth: 275,
        height: 60,
        bgcolor: "transparent",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", p: 2 }}>
        {/* <SyncAltRoundedIcon style={{ color: "#0A3967" }} />
                        <Typography variant="body1" sx={{ marginLeft: 2, color: "#0A3967" }}>
                            Transfer ke Sesama Bank
                        </Typography> */}
        <Breadcrumbs aria-label="breadcrumb">
          <Link component={RouterLink} to="/" color="inherit">
            Home
          </Link>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;

            return last ? (
              <Typography color="textPrimary" key={to}>
                {formatBreadcrumbText(value)}
              </Typography>
            ) : (
              <Link component={RouterLink} to={to} color="inherit" key={to}>
                {formatBreadcrumbText(value)}
              </Link>
            );
          })}
        </Breadcrumbs>
      </Box>
    </Card>
  );
};

export default BreadcrumbsComponent;
