const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 10;
const radius = centerY - strokeWidth / 2;

const eyeOffsetX = 90;
const eyeOffsetY = 90;
const eyeRadius = 50;

const App = () => (
  <svg width={width} height={height}>
    <circle cx={centerX} cy={centerY} r={radius} fill="gold" stroke="black" strokeWidth={strokeWidth}>
    </circle>
    <circle cx={centerX - eyeOffsetX} cy={centerY - eyeOffsetY} r={eyeRadius} fill="black">
    </circle>
    <circle cx={centerX + eyeOffsetX} cy={centerY - eyeOffsetY} r={eyeRadius} fill="black">
    </circle>
  </svg >
);

export default App;