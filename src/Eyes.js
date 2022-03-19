export const Eyes = ({ eyeOffsetX, eyeOffsetY, eyeRadius }) => (
  // react fragments have empty brackets
  <>
    <circle
      cx={-eyeOffsetX}
      cy={-eyeOffsetY}
      r={eyeRadius}
      fill="black"
    ></circle>
    <circle
      cx={+eyeOffsetX}
      cy={-eyeOffsetY}
      r={eyeRadius}
      fill="black"
    ></circle>
  </>
);
