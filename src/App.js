import * as d3 from 'd3';
import { useEffect, useState } from 'react';
import { message } from './Message';

const csvURL =
	'https://gist.githubusercontent.com/jctaylorjr/8ca53d2c9bf976bb9f0de77eeb36881a/raw/28db9dd8dcf8aabf603bb89359edc3cae6b18366/colors.csv';
const width = 960;
const height = 480;

// with fetch async and await
// const fetchText = async (url) => {
// 	const response = await fetch(url);
// 	return await response.text();
// };

// fetchText(csvURL).then((text) => {
// 	console.log(d3.csvParse(text));
// });

const App = () => {
	const [data, setData] = useState(null);
	useEffect(() => {
		d3.csv(csvURL).then(setData);
	}, []);

	return <div>{data ? message(data) : 'loading . . .'}</div>;
};

export default App;
