import PropTypes from 'prop-types';
import { PieChart } from '@mui/x-charts/PieChart';
// import { useDrawingArea } from '@mui/x-charts/hooks';
// import { styled } from '@mui/material/styles';
// import { Typography } from '@mui/material';

const DynamicPieChart = ({
  data = [],
  centerLabel = '',
  width = 400,
  height = 200,
}) => {
  const series = data?.activeSection.map((item) => ({
    ...item,
    itemStyle: {
      color: item.color,
    },
  }));

  // Fungsi untuk menghitung total transaksi dari semua kategori
  const getTotalNumberOfTransactions = () => {
    const total = data?.data?.categories?.reduce((total, category) =>
      total + category.mutations.length, 0) || 0;
    // Log total number of transactions for debugging
    console.log('Total Number of Transactions:', total);
    return total;
  };
  return (
    <PieChart
      series={[{ data: series, innerRadius: 120 }]}
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
          {data?.data?.total_income || data?.data?.total_expense}
        </text>
        <text
          x={0}
          y={30}
          textAnchor="middle"
          dominantBaseline="central"
          style={{ fontWeight: "bold", fontSize: 12 }}
          fill="textSecondary"
        >
          {`${getTotalNumberOfTransactions()} kategori`}
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
