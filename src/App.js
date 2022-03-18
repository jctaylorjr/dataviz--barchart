import { Face } from "./Face";

const width = 960;
const height = 500;

const App = () => (
  <Face
    width={width}
    height={height}
    centerX={width / 2}
    centerY={height / 2}
    strokeWidth={10}
    eyeOffsetX={90}
    eyeOffsetY={90}
    eyeRadius={40}
    mouthRadius={20}
    mouthWidth={30}
  />
);

export default App;