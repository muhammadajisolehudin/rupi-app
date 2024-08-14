<<<<<<< HEAD

=======
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55
import { Box, Card, Typography, IconButton, Divider, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ModalTransferBerhasil = ({ open, handleClose, accountNumber }) => {
<<<<<<< HEAD
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    zIndex: 1300,
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const formatAccountNumber = (number) => {
    const visibleDigits = 4;
    const hiddenDigits = number.length - visibleDigits;
    const stars = "*".repeat(hiddenDigits);
    return `${stars}${number.slice(-visibleDigits)}`;
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card sx={style}>
        <IconButton
          style={{ float: "right", color: "#0066AE" }}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        <Box sx={contentStyle}>
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              mb: 2,
            }}
          >
            <img
              src="/logo.png"
              alt="Logo"
              style={{ width: "30px", height: "auto", marginRight: "8px" }}
            />
            <Typography variant="h6" component="h2">
              Rupi App
            </Typography>
          </Box>
          <Typography
            variant="h6"
            component="h3"
            sx={{ mb: 1, fontWeight: "bold" }}
          >
            Transfer Berhasil
          </Typography>
        </Box>

        <Divider sx={{ mb: 2, borderColor: "#021526" }} />
        <Typography variant="subtitle1" sx={{ color: "#6c757d", mb: 1 }}>
          Penerima
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          HISTORIA COFFEN
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          Bank Central Asia - 8899101033
        </Typography>
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle1" sx={{ color: "#6c757d", mb: 1 }}>
          Rincian Transfer
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Nominal Transfer:
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Rp 20.000
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography variant="body2">Metode Transfer:</Typography>
          <Typography variant="body2">Antar BCA</Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography variant="body2">Biaya Transfer:</Typography>
          <Typography variant="body2">Rp 0</Typography>
        </Box>
        <Divider sx={{ my: 2, borderColor: "#021526" }} />
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="subtitle1">Total Transaksi:</Typography>
          <Typography variant="subtitle1">Rp 20.000</Typography>
        </Box>

        <Divider sx={{ mb: "2rem", borderColor: "#021526" }} />
        <Typography variant="subtitle1" sx={{ color: "#6c757d" }}>
          Rekening Sumber
        </Typography>
        <Typography variant="body2" sx={{ fontWeight: "bold" }}>
          SAMSUL
        </Typography>
        <Typography variant="body2">
          Bank Central Asia {formatAccountNumber(accountNumber)}
        </Typography>
        <Card
          sx={{
            backgroundColor: "white",
            padding: "1.5rem",
            borderRadius: "12px",
            boxShadow: 3,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                "&:hover img": {
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease",
                },
              }}
            >
              <img
                src="../src/assets/img/icons/Icon_share.png"
                alt="Share Icon"
                style={{ width: "14px", height: "14px" }}
              />
              <Typography
                variant="p"
                sx={{
                  fontWeight: "bold",
                  color: "#0066AE",
                  textDecoration: "none",
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease",
                  },
                }}
                component="a"
                href="/notif-success"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bagikan Resi
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                "&:hover img": {
                  transform: "scale(1.3)",
                  transition: "transform 0.3s ease",
                },
              }}
            >
              <img
                src="../src/assets/img/icons/Icon_download.png"
                alt="Download Icon"
                style={{ width: "14px", height: "14px" }}
              />
              <Typography
                variant="p"
                sx={{
                  fontWeight: "bold",
                  color: "#0066AE",
                  textDecoration: "none",
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "transform 0.3s ease",
                  },
                }}
                component="a"
                href="/notif-success"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download
              </Typography>
            </Box>
          </Box>
        </Card>
      </Card>
    </Modal>
  );
=======
	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 400,
		bgcolor: "background.paper",
		boxShadow: 24,
		p: 4,
		zIndex: 1300,
	};

	const contentStyle = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		textAlign: "center",
	};

	const formatAccountNumber = (number) => {
		const visibleDigits = 4;
		const hiddenDigits = number.length - visibleDigits;
		const stars = "*".repeat(hiddenDigits);
		return `${stars}${number.slice(-visibleDigits)}`;
	};

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Card sx={style}>
				<IconButton style={{ float: "right", color: "#0066AE" }} onClick={handleClose} role="button">
					<CloseIcon />
				</IconButton>
				<Box sx={contentStyle}>
					<Box
						sx={{
							display: "flex",
							textAlign: "center",
							alignItems: "center",
							mb: 2,
						}}
						aria-hidden={"true"}
					>
						<img
							src="/logo.png"
							alt="Logo"
							style={{ width: "30px", height: "auto", marginRight: "8px" }}
						/>
						<Typography variant="h6" component="h2">
							Rupi App
						</Typography>
					</Box>
					<Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: "bold" }}>
						Transfer Berhasil
					</Typography>
				</Box>

				<Divider sx={{ mb: 2, borderColor: "#021526" }} aria-hidden={"true"} />
				<Typography variant="subtitle1" sx={{ color: "#6c757d", mb: 1 }}>
					Penerima
				</Typography>
				<Typography variant="body2" sx={{ fontWeight: "bold" }}>
					HISTORIA COFFEN
				</Typography>
				<Typography variant="body2" sx={{ fontWeight: "bold" }}>
					Bank Central Asia - 8899101033
				</Typography>
				<Divider sx={{ my: 2 }} aria-hidden={"true"} />
				<Typography variant="subtitle1" sx={{ color: "#6c757d", mb: 1 }}>
					Rincian Transfer
				</Typography>
				<Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
					<Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
						Nominal Transfer:
					</Typography>
					<Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
						Rp 20.000
					</Typography>
				</Box>
				<Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
					<Typography variant="body2">Metode Transfer:</Typography>
					<Typography variant="body2">Antar BCA</Typography>
				</Box>
				<Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
					<Typography variant="body2">Biaya Transfer:</Typography>
					<Typography variant="body2">Rp 0</Typography>
				</Box>
				<Divider sx={{ my: 2, borderColor: "#021526" }} aria-hidden={"true"} />
				<Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
					<Typography variant="subtitle1">Total Transaksi:</Typography>
					<Typography variant="subtitle1">Rp 20.000</Typography>
				</Box>

				<Divider sx={{ mb: "2rem", borderColor: "#021526" }} aria-hidden={"true"} />
				<Typography variant="subtitle1" sx={{ color: "#6c757d" }}>
					Rekening Sumber
				</Typography>
				<Typography variant="body2" sx={{ fontWeight: "bold" }}>
					SAMSUL
				</Typography>
				<Typography variant="body2">Bank Central Asia {formatAccountNumber(accountNumber)}</Typography>
				<Card
					sx={{
						backgroundColor: "white",
						padding: "1.5rem",
						borderRadius: "12px",
						boxShadow: 3,
						textAlign: "center",
						display: "flex",
						flexDirection: "column",
						gap: "1rem",
						marginTop: "2rem",
					}}
				>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
							gap: "1rem",
						}}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "0.5rem",
								"&:hover img": {
									transform: "scale(1.1)",
									transition: "transform 0.3s ease",
								},
							}}
							role={"button"}
							aria-labelledby={"button-resi"}
							tabIndex={0}
						>
							<img
								src="../src/assets/img/icons/Icon_share.png"
								alt="Share Icon"
								style={{ width: "14px", height: "14px" }}
								aria-hidden={"true"}
							/>
							<Typography
								id="button-resi"
								variant="p"
								sx={{
									fontWeight: "bold",
									color: "#0066AE",
									textDecoration: "none",
									"&:hover": {
										transform: "scale(1.05)",
										transition: "transform 0.3s ease",
									},
								}}
								component="a"
								href="/notif-success"
								target="_blank"
								rel="noopener noreferrer"
							>
								Bagikan Resi
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								gap: "0.5rem",
								"&:hover img": {
									transform: "scale(1.3)",
									transition: "transform 0.3s ease",
								},
							}}
							role={"button"}
							aria-labelledby={"button-download"}
							tabIndex={0}
						>
							<img
								src="../src/assets/img/icons/Icon_download.png"
								alt="Download Icon"
								style={{ width: "14px", height: "14px" }}
								aria-hidden={"true"}
							/>
							<Typography
								id="button-download"
								variant="p"
								sx={{
									fontWeight: "bold",
									color: "#0066AE",
									textDecoration: "none",
									"&:hover": {
										transform: "scale(1.05)",
										transition: "transform 0.3s ease",
									},
								}}
								component="a"
								href="/notif-success"
								target="_blank"
								rel="noopener noreferrer"
							>
								Download
							</Typography>
						</Box>
					</Box>
				</Card>
			</Card>
		</Modal>
	);
>>>>>>> 09a9de3b91a65ddb1bd41bd438b173d148465c55
};

export default ModalTransferBerhasil;
