import * as d3 from 'd3';
import { useEffect, useState } from 'react';
import { message } from './Message';

const csvURL =
	'https://gist.githubusercontent.com/jctaylorjr/8ca53d2c9bf976bb9f0de77eeb36881a/raw/28db9dd8dcf8aabf603bb89359edc3cae6b18366/colors.csv';
const width = 960;
const height = 480;
const centerX = width / 2;
const centerY = height / 2;

// const ColorArc = ({ mouthRadius, mouthWidth }) => {
// 	const colorArc = arc()
// 		.innerRadius(mouthRadius)
// 		.outerRadius(mouthWidth)
// 		.startAngle(Math.PI * 0.5)
// 		.endAngle(Math.PI * 1.5);
// 	return <path d={colorArc()} />;
// };

const colorArc = d3.arc().innerRadius(100).outerRadius(200);

const App = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
		d3.csv(csvURL).then(setData);
	}, []);

	if (!data) {
		return <div>loading . . .</div>;
	}

	const colorPie = d3.pie().value(1);

	return (
		<svg width={width} height={height}>
			<g transform={`translate(${centerX}, ${centerY})`}>
				{colorPie(data).map((d) => (
					<path fill={d.data['RGB hex value']} d={colorArc(d)} />
				))}
			</g>
		</svg>
	);
};

// {data.map((d, i) => (
// 	<path
// 		fill={d['RGB hex value']}
// 		d={colorArc({
// 			startAngle: (i / data.length) * Math.PI * 2,
// 			endAngle: ((i + 1) / data.length) * Math.PI * 2,
// 		})}
// 	/>
// ))}

export default App;
