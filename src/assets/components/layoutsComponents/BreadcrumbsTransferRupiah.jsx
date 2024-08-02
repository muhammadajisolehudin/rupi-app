import { Box, Breadcrumbs, Card, Link, Typography } from "@mui/material";
import DoubleArrowRight from "../../img/icons/double-arrow-right.svg";
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom

export const BreadcrumbsTranferRupiah = () => {
  const location = useLocation(); // Get current location using useLocation

  // Function to determine if a link is active based on pathname
  const isLinkActive = (pathname) => {
    // Check if location.pathname starts with the specified pathname
    return location.pathname.startsWith(pathname);
  };

  return (
    <Card
      sx={{
        minWidth: 275,
        height: 60,
        bgcolor: "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center", // Center horizontally
        borderRadius: "16px 16px 0 0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 2,
          width: "100%",
        }}
      >
        <Breadcrumbs
          separator={
            <img
              color="red"
              src={DoubleArrowRight}
              alt="Separator"
              style={{ width: 16, height: 16 }}
            />
          }
          sx={{ flex: 1 }}
        >
          <Link
            href="#"
            underline="none"
            sx={{
              width: "100%",
              color: isLinkActive("/") ? "blue" : "inherit",
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              sx={{ flexGrow: 1 }}
            >
              <Box
                height={30}
                width={30}
                borderRadius="50%"
                border={isLinkActive("/") ? "2px solid blue" : "2px solid gray"}
                // bgcolor={isLinkActive("/") ? "blue" : "transparent"} // Example of active background color
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: isLinkActive("/") ? "bold" : "normal",
                    color: isLinkActive("/") ? "blue" : "inherit",
                  }}
                >
                  1
                </Typography>
              </Box>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: isLinkActive("/") ? "bold" : "normal",
                  color: isLinkActive("/") ? "blue" : "inherit",
                }}
              >
                Masukan Nomor Rekening
              </Typography>
            </Box>
          </Link>

          <Link
            href="#"
            underline="none"
            sx={{
              width: "100%",
              color: isLinkActive("/masukan-nominal-transfer")
                ? "blue"
                : "inherit",
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              sx={{ flexGrow: 1 }}
            >
              <Box
                height={30}
                width={30}
                borderRadius="50%"
                // border="2px solid gray"
                border={
                  isLinkActive("/masukan-nominal-transfer")
                    ? "2px solid blue"
                    : "2px solid gray"
                } // Example of active background color
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: isLinkActive("/masukan-nominal-transfer")
                      ? "bold"
                      : "normal",
                    color: isLinkActive("/masukan-nominal-transfer")
                      ? "blue"
                      : "inherit",
                  }}
                >
                  2
                </Typography>
              </Box>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: isLinkActive("/masukan-nominal-transfer")
                    ? "bold"
                    : "normal",
                  color: isLinkActive("/masukan-nominal-transfer")
                    ? "blue"
                    : "inherit",
                }}
              >
                Masukan Nominal Transfer
              </Typography>
            </Box>
          </Link>

          <Link
            href="#"
            underline="none"
            sx={{
              width: "100%",
              color: isLinkActive("/konfirmasi-transfer") ? "blue" : "inherit",
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              sx={{ flexGrow: 1 }}
            >
              <Box
                height={30}
                width={30}
                borderRadius="50%"
                border="2px solid gray"
                bgcolor={
                  isLinkActive("/konfirmasi-transfer") ? "blue" : "transparent"
                } // Example of active background color
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: isLinkActive("/konfirmasi-transfer")
                      ? "bold"
                      : "normal",
                    color: isLinkActive("/konfirmasi-transfer")
                      ? "blue"
                      : "inherit",
                  }}
                >
                  3
                </Typography>
              </Box>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: isLinkActive("/konfirmasi-transfer")
                    ? "bold"
                    : "normal",
                  color: isLinkActive("/konfirmasi-transfer")
                    ? "blue"
                    : "inherit",
                }}
              >
                Konfirmasi Transfer
              </Typography>
            </Box>
          </Link>

          <Link
            href="#"
            underline="none"
            sx={{
              width: "100%",
              color: isLinkActive("/masukan-pin") ? "blue" : "inherit",
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              sx={{ flexGrow: 1 }}
            >
              <Box
                height={30}
                width={30}
                borderRadius="50%"
                border="2px solid gray"
                bgcolor={isLinkActive("/masukan-pin") ? "blue" : "transparent"} // Example of active background color
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: isLinkActive("/masukan-pin")
                      ? "bold"
                      : "normal",
                    color: isLinkActive("/masukan-pin") ? "blue" : "inherit",
                  }}
                >
                  4
                </Typography>
              </Box>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: isLinkActive("/masukan-pin") ? "bold" : "normal",
                  color: isLinkActive("/masukan-pin") ? "blue" : "inherit",
                }}
              >
                Masukan Pin
              </Typography>
            </Box>
          </Link>

          <Link
            href="#"
            underline="none"
            sx={{
              width: "100%",
              color: isLinkActive("/transfer-berhasil") ? "blue" : "inherit",
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              gap={2}
              sx={{ flexGrow: 1 }}
            >
              <Box
                height={30}
                width={30}
                borderRadius="50%"
                border="2px solid gray"
                bgcolor={
                  isLinkActive("/transfer-berhasil") ? "blue" : "transparent"
                } // Example of active background color
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: isLinkActive("/transfer-berhasil")
                      ? "bold"
                      : "normal",
                    color: isLinkActive("/transfer-berhasil")
                      ? "blue"
                      : "inherit",
                  }}
                >
                  5
                </Typography>
              </Box>
              <Typography
                variant="caption"
                sx={{
                  fontWeight: isLinkActive("/transfer-berhasil")
                    ? "bold"
                    : "normal",
                  color: isLinkActive("/transfer-berhasil")
                    ? "blue"
                    : "inherit",
                }}
              >
                Transfer Berhasil
              </Typography>
            </Box>
          </Link>
        </Breadcrumbs>
      </Box>
    </Card>
  );
};
