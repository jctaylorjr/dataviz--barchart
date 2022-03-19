import { arc } from 'd3';

export const Mouth = ({ mouthRadius, mouthWidth }) => {
	const mouthArc = arc()
		.innerRadius(mouthRadius)
		.outerRadius(mouthWidth)
		.startAngle(Math.PI * 0.5)
		.endAngle(Math.PI * 1.5);
	return <path d={mouthArc()} />;
};
