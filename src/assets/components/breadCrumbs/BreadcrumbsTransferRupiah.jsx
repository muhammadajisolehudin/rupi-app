import { Box, Breadcrumbs, Card, Link, Typography } from "@mui/material";
import DoubleArrowRight from "../../img/icons/double-arrow-right.svg";
import DoubleArrowRightBlue from "../../img/icons/double-arrow-right-blue.svg";
import { useTransferRupiahContext } from "../../../context/TransferContext";

export const BreadcrumbsTranferRupiah = () => {
	const { step } = useTransferRupiahContext();

	const steps = [
		{
			label: "Masukan Nomor Rekening",
			step: 1,
		},
		{
			label: "Masukan Nominal Transfer",
			step: 2,
		},
		{
			label: "Konfirmasi Transfer",
			step: 3,
		},
		{
			label: "Masukan Pin",
			step: 4,
		},
		{
			label: "Transfer Berhasil",
			step: 5,
		},
	];

	const isLinkActive = (stepInArray) => {
		return stepInArray === step;
	};

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
				px: 1,
			}}
			role="navigation"
			aria-label="transfer progress steps"
		>
			<Breadcrumbs separator={null} width="100%" role="">
				{steps.map(({ label, step }) => (
					<Link
						key={step}
						// href={link}
						underline="none"
						sx={{
							width: "100%",
							color: isLinkActive(step) ? "#0066AE" : "#B3B3B3",
							bgcolor: "red",
						}}
						aria-label={`Step ${step}: ${label}`}
						aria-current={isLinkActive(step) ? "step" : undefined}
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
								border={`2px solid ${isLinkActive(step) ? "#0066AE" : "#B3B3B3"}`}
								display="flex"
								justifyContent="center"
								alignItems="center"
								aria-hidden={"true"}
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
								src={isLinkActive(step) ? DoubleArrowRightBlue : DoubleArrowRight}
								alt="Separator"
								aria-hidden={"true"}
							/>
						</Box>
					</Link>
					// </Box>
				))}
			</Breadcrumbs>
		</Card>
	);
};
