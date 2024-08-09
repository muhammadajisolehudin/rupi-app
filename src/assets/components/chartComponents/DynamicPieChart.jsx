import PropTypes from 'prop-types';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const StyledText = styled('text')(({ theme, color }) => ({
  fill: color || theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

const PieCenterLabel = ({ children, color }) => {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2} color={color}>
      {children}
    </StyledText>
  );
};

PieCenterLabel.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

const DynamicPieChart = ({
  data = [],
  centerLabel = 'Total',
  width = 400,
  height = 200,
}) => {
  const series = data.map((item) => ({
    ...item,
    itemStyle: {
      color: item.color,
    },
  }));

  return (
    <PieChart
      series={[{ data: series, innerRadius: 80 }]}
      width={width}
      height={height}
    >
      <PieCenterLabel>{centerLabel}</PieCenterLabel>
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
