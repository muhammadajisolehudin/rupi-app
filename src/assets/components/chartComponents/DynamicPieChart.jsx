import PropTypes from "prop-types";
import { PieChart } from "@mui/x-charts/PieChart";
import { formatRupiah, getTotalTransaction } from "../../../utils/utilities";
// import { useDrawingArea } from '@mui/x-charts/hooks';
// import { styled } from '@mui/material/styles';
// import { Typography } from '@mui/material';

const DynamicPieChart = ({ data = [], centerLabel = "", width = 400, height = 200 }) => {
	const series = data?.activeSection.map((item) => ({
		...item,
		itemStyle: {
			color: item.color,
		},

		iconData: {
			icon: <img src={item.icon} />,
		},
	}));
	console.log("data series : ", series);
	// console.log(item.data.data.categories.type),

	return (
		<PieChart
			series={[{ data: series, innerRadius: 120, arcLabel: (item) => `${item.icon}` }]}
			width={width}
			height={height}
		>
			<g transform={`translate(${width / 2.5}, ${height / 2})`}>
				<text
					x={0}
					y={-30}
					textAnchor="middle"
					dominantBaseline="central"
					fontSize={14}
					fill="textSecondary"
				>
					{centerLabel}
				</text>
				<text
					x={0}
					y={0}
					textAnchor="middle"
					dominantBaseline="central"
					// fontSize={16}
					fill="textPrimary"
					style={{ fontWeight: "bold", fontSize: 16 }}
				>
					{data?.data?.total_income || data?.data?.total_expense === null
						? `Rp ${formatRupiah(data?.data?.total_income || data?.data?.total_expense)}`
						: ""}
				</text>
				<text
					x={0}
					y={30}
					textAnchor="middle"
					dominantBaseline="central"
					style={{ fontWeight: "bold", fontSize: 12 }}
					fill="textSecondary"
				>
					{`${getTotalTransaction(data?.data?.categories)} kategori`}
				</text>
			</g>

			{/* <PieCenterLabel>{getTotalNumberOfTransactions()}</PieCenterLabel> */}
		</PieChart>
	);
};

DynamicPieChart.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.number.isRequired,
			label: PropTypes.string.isRequired,
			color: PropTypes.string,
		})
	).isRequired,
	centerLabel: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
};

export default DynamicPieChart;
