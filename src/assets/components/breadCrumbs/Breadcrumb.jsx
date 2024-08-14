import { Box, Breadcrumbs, Card, Link, Typography } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";

const formatBreadcrumbText = (text) => {
  return text.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
};

export const Breadcrumb = () => {
  const location = useLocation();

  const getPathNames = () => {
    const pathnames = location.pathname.split("/").filter((x) => x);
    return pathnames.slice(0, 2); // Membatasi menjadi 3 path teratas
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
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<span style={{ color: "#B3B3B3" }}> / </span>}
        >
          <Link
            component={RouterLink}
            to="/beranda"
            sx={{
              color: "#B3B3B3",
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            Beranda
          </Link>
          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;

            return last ? (
              <Typography
                color="primary" // Menggunakan warna primer untuk breadcrumb aktif
                sx={{ fontWeight: "bold" }}
                key={to}
              >
                {formatBreadcrumbText(value)}
              </Typography>
            ) : (
              <Link
                component={RouterLink}
                to={to}
                sx={{
                  color: "#B3B3B3",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
                key={to}
              >
                {formatBreadcrumbText(value)}
              </Link>
            );
          })}
        </Breadcrumbs>
      </Box>
    </Card>
  );
};

// export default BreadcrumbsComponent;
