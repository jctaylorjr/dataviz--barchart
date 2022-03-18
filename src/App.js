import { Face } from "./Face";

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

const App = () => (
  <Face
    width={960}
    height={500}
    centerX={width / 2}
    centerY={height / 2}
    strokeWidth={10}
    radius={centerY - strokeWidth / 2}
    eyeOffsetX={90}
    eyeOffsetY={90}
    eyeRadius={40}
    mouthRadius={20}
    mouthWidth={30}
  />
);

export default App;