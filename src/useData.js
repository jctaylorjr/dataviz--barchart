import { csv } from 'd3';
import { useEffect, useState } from 'react';

const csvURL =
	'https://gist.githubusercontent.com/jctaylorjr/0b1e319eb86cce1c68ad6640d681fdd5/raw/a6119e9e5a66ee4312414cfc9c9f0e63ad859f8a/united-nations-population-prospects-2019.csv';

export const useData = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
		const row = (d) => {
			d.Population = +d['2020'] * 1000;
			return d;
		};
		csv(csvURL, row).then((data) => {
			setData(data.slice(0, 10));
		});
	}, []);
	return data;
};
