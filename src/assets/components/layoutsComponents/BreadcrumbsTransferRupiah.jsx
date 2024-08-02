import { Box, Breadcrumbs, Card, Link, Typography } from "@mui/material";
import DoubleArrowRight from "../../img/icons/double-arrow-right.svg";
import DoubleArrowRightBlue from "../../img/icons/double-arrow-right-blue.svg";
import { useLocation } from "react-router-dom"; 

export const BreadcrumbsTranferRupiah = () => {
  const location = useLocation(); 

  const getLastPathSegment = () => {
    const pathSegments = location.pathname.split("/").filter((x) => x);
    return pathSegments[pathSegments.length - 1];
  };

  const lastPathSegment = getLastPathSegment();

  const isLinkActive = (path) => {
    return lastPathSegment === path.replace("/", "");
  };

  // Array of steps
  const steps = [
    {
      link: "/transfer-rupiah/transfer-ke-penerima-baru/masukan-nomor-rekening",
      path: "masukan-nomor-rekening",
      label: "Masukan Nomor Rekening",
      step: 1,
    },
    {
      link: "/transfer-rupiah/transfer-ke-penerima-baru/masukan-nominal-transfer",
      path: "masukan-nominal-transfer",
      label: "Masukan Nominal Transfer",
      step: 2,
    },
    {
      link: "/transfer-rupiah/transfer-ke-penerima-baru/konfirmasi-transfer",
      path: "konfirmasi-transfer",
      label: "Konfirmasi Transfer",
      step: 3,
    },
    {
      link: "/transfer-rupiah/transfer-ke-penerima-baru/masukan-pin",
      path: "masukan-pin",
      label: "Masukan Pin",
      step: 4,
    },
    {
      link: "/transfer-rupiah/transfer-ke-penerima-baru/transfer-berhasil",
      path: "transfer-berhasil",
      label: "Transfer Berhasil",
      step: 5,
    },
  ];

  return (
    <Card
      sx={{
        // minWidth: 275,
        width: "100%",
        height: 60,
        bgcolor: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "4px 4px 0 0",
        px:1
      }}
    >
      <Breadcrumbs
        separator={null}
        width="100%"
      >
        {steps.map(({ path, label, step }) => (
          
            <Link
              key={path}
              // href={link}
              underline="none"
              sx={{
                width: "100%",
                color: isLinkActive(path) ? "#0066AE" : "#B3B3B3",
                bgcolor: "red",
              }}
            >
              <Box
                display="flex"
                alignItems="center"
                gap={2.57}
                // sx={{ flexGrow: 1 }}
              >
                <Box
                  height={30}
                  width={30}
                  borderRadius="50%"
                  border={`2px solid ${
                    isLinkActive(path) ? "#0066AE" : "#B3B3B3"
                  }`}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography
                    variant="caption"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    {step}
                  </Typography>
                </Box>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  {label}
                </Typography>
                <img
                  src={
                    isLinkActive(path) ? DoubleArrowRightBlue : DoubleArrowRight
                  }
                  alt="Separator"
                />
              </Box>
            </Link>
          // </Box>
        ))}
      </Breadcrumbs>
    </Card>
  );
};
