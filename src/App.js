import * as d3 from 'd3';
import { format } from 'd3';
import { useData } from './useData';
import { AxisBottom } from './AxisBottom';
import { AxisLeft } from './AxisLeft';
import { Marks } from './Marks';

const width = 960;
const height = 480;
const margin = { top: 50, right: 50, bottom: 50, left: 200 };
const xAxisLabelOffset = 45;

const siFormat = format('.2s');
const xAxisTickFormat = (tickValue) => siFormat(tickValue).replace('G', 'B');

const App = () => {
	const data = useData();

	if (!data) {
		return <div>loading . . .</div>;
	}

	const innerHeight = height - margin.top - margin.bottom;
	const innerWidth = width - margin.left - margin.right;

	const yValue = (d) => d.Country;
	const xValue = (d) => d.Population;

	const yScale = d3
		.scaleBand()
		.domain(data.map(yValue))
		.range([0, innerHeight])
		.paddingInner(0.2);

	const xScale = d3
		.scaleLinear()
		.domain([0, d3.max(data, xValue)])
		.range([0, innerWidth]);

	return (
		<svg width={width} height={height}>
			<g transform={`translate(${margin.left}, ${margin.top})`}>
				<AxisBottom
					xScale={xScale}
					innerHeight={innerHeight}
					tickFormat={xAxisTickFormat}
				/>
				<AxisLeft yScale={yScale} />
				<text
					className='axis-label'
					x={innerWidth / 2}
					y={innerHeight + xAxisLabelOffset}
					textAnchor='middle'>
					Population
				</text>
				<Marks
					xScale={xScale}
					yScale={yScale}
					data={data}
					xValue={xValue}
					yValue={yValue}
					tooltipFormat={xAxisTickFormat}
				/>
			</g>
		</svg>
	);
};

export default App;
