import * as d3 from 'd3';

const csvURL =
	'https://gist.githubusercontent.com/jctaylorjr/8ca53d2c9bf976bb9f0de77eeb36881a/raw/28db9dd8dcf8aabf603bb89359edc3cae6b18366/colors.csv';

// with fetch async and await
// const fetchText = async (url) => {
// 	const response = await fetch(url);
// 	return await response.text();
// };

// fetchText(csvURL).then((text) => {
// 	console.log(d3.csvParse(text));
// });

d3.csv(csvURL).then((data) => {
	let message = '';
	message += Math.round(d3.csvFormat(data).length / 1024) + ' kB\n';
	message += data.length + ' rows\n';
	message += data.columns.length + ' columns';
	document.getElementById('message-container').textContent = message;
});

const App = () => {
	return <></>;
};

export default App;
