import * as d3 from 'd3';
import { useEffect, useState } from 'react';

const csvURL =
	'https://gist.githubusercontent.com/jctaylorjr/0b1e319eb86cce1c68ad6640d681fdd5/raw/a6119e9e5a66ee4312414cfc9c9f0e63ad859f8a/united-nations-population-prospects-2019.csv';
const width = 960;
const height = 480;
const margin = { top: 20, right: 20, bottom: 20, left: 20 };

const App = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
		const row = (d) => {
			d.Population = +d['2020'];
			return d;
		};
		d3.csv(csvURL, row).then((data) => {
			setData(data.slice(0, 10));
		});
	}, []);

	if (!data) {
		return <div>loading . . .</div>;
	}

	const innerHeight = height - margin.top - margin.bottom;
	const innerWidth = width - margin.left - margin.right;

	const yScale = d3
		.scaleBand()
		.domain(data.map((d) => d.Country))
		.range([0, innerHeight]);

	const xScale = d3
		.scaleLinear()
		.domain([0, d3.max(data, (d) => d.Population)])
		.range([0, innerWidth]);

	return (
		<svg width={width} height={height}>
			<g transform={`translate(${margin.left}, ${margin.top})`}>
				{data.map((d) => (
					<rect
						x={0}
						y={yScale(d.Country)}
						width={xScale(d.Population)}
						height={yScale.bandwidth()}
					/>
				))}
			</g>
		</svg>
	);
};

export default App;
