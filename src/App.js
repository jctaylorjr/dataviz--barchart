import { arc } from 'd3';

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const radius = centerY - strokeWidth / 2;

const eyeOffsetX = 90;
const eyeOffsetY = 90;
const eyeRadius = 40;

const mouthArc = arc()
  .innerRadius(90)
  .outerRadius(100)
  .startAngle(Math.PI * .5)
  .endAngle(Math.PI * 1.5);

const App = () => (
  <svg width={width} height={height}>
    <g transform={`translate(${centerX}, ${centerY})`}>
      <circle r={radius} fill="gold" stroke="black" strokeWidth={strokeWidth}>
      </circle>
      <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} fill="black">
      </circle>
      <circle cx={+eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} fill="black">
      </circle>
      <path d={mouthArc()} />
    </g>
  </svg >
);

export default App;