import * as d3 from 'd3';
import { useEffect, useState } from 'react';

const csvURL =
	'https://gist.githubusercontent.com/jctaylorjr/0b1e319eb86cce1c68ad6640d681fdd5/raw/a6119e9e5a66ee4312414cfc9c9f0e63ad859f8a/united-nations-population-prospects-2019.csv';
const width = 960;
const height = 480;
const centerX = width / 2;
const centerY = height / 2;

const App = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
		d3.csv(csvURL).then(setData);
	}, []);

	if (!data) {
		return <div>loading . . .</div>;
	}

	return <svg width={width} height={height}></svg>;
};

export default App;
