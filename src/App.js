import { arc } from 'd3';
import { BackgroundCircle } from "./BackgroundCircle";

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const radius = centerY - strokeWidth / 2;

const eyeOffsetX = 90;
const eyeOffsetY = 90;
const eyeRadius = 40;
const mouthRadius = 20;
const mouthWidth = 30;

const mouthArc = arc()
  .innerRadius(mouthRadius)
  .outerRadius(mouthWidth)
  .startAngle(Math.PI * .5)
  .endAngle(Math.PI * 1.5);

const App = () => (
  <svg width={width} height={height}>
    <g transform={`translate(${centerX}, ${centerY})`}>
      <BackgroundCircle radius={centerY - strokeWidth / 2} strokeWidth={strokeWidth} />
      <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} fill="black">
      </circle>
      <circle cx={+eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} fill="black">
      </circle>
      <path d={mouthArc()} />
    </g>
  </svg >
);

export default App;