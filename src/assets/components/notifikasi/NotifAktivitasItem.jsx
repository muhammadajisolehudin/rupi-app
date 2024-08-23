import { PropTypes } from "prop-types";
import { Box, Typography, Paper, Avatar } from "@mui/material";
import { styled } from "@mui/system";

const HighlightedPaper = styled(Paper)(({ theme, isHighlighted }) => ({
	backgroundColor: isHighlighted ? "#E4EDFF" : "#fff",
	padding: theme.spacing(2.5, 5),
	display: "flex",
	flexWrap: "wrap",
	gap: theme.spacing(5),
	alignItems: "center",
	borderBottom: `1px solid ${theme.palette.divider}`,
	width: "100%",
	// maxWidth: "100%",
}));

export const NotifAktivitasItem = ({ icon, title, description, date, time, isHighlighted }) => {
	return (
		<HighlightedPaper
			elevation={0}
			isHighlighted={isHighlighted}
			sx={{
				borderBottom: "1px solid #B3B3B3", px: 3
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-between",
					width: "auto",
					overflow:"scrool"
				}}
			>
				<Box sx={{ display: "flex", gap: 2.5, alignItems: "center", minWidth: "240px" }}>
					<Avatar
						src={icon}
						alt={"notif " + title}
						sx={{
							width: 22,
							height: 22,
							bgcolor: "skyblue",
							boxShadow: 2,
						}}
					/>
					<Box sx={{ display: "flex", flexWrap: "wrap", flexDirection: "column" }}>
						<Typography variant="h6" component="h3" fontWeight="bold">
							{title}
						</Typography>
						<Typography variant="body1" sx={{ mt: 0.5, textWrap: "wrap" }}>
							{description}
						</Typography>
					</Box>
					<Box
						sx={{
							flexGrow: 1,
							textAlign: "right",
							minWidth: "64px",
							display: "flex",
							flexDirection: "column",
							justifyContent: "flex-end",
							flexWrap: "wrap",
							mr: 4
						}}
					>
						<Typography variant="body2">{date}</Typography>
						<Typography variant="body2">{time}</Typography>
					</Box>
				</Box>
				
			</Box>
		</HighlightedPaper>
	);
};

NotifAktivitasItem.propTypes = {
	icon: PropTypes.String,
	title: PropTypes.String,
	description: PropTypes.String,
	date: PropTypes.String,
	time: PropTypes.String,
	isHighlighted: PropTypes.Boolean,
};
