import { Face } from './Face';
import { range } from 'd3';

const width = 240;
const height = 125;

const array = range(4 * 4);

const App = () =>
	array.map(() => (
		<Face
			width={width}
			height={height}
			centerX={width / 2}
			centerY={height / 2}
			strokeWidth={1 + Math.random() * 10}
			eyeOffsetX={9 + Math.random() * 10}
			eyeOffsetY={9 + Math.random() * 10}
			eyeRadius={4 + Math.random() * 10}
			mouthRadius={2 + Math.random() * 10}
			mouthWidth={3 + Math.random() * 10}
		/>
	));

export default App;
