import React from "react";

function Box(props: JSX.IntrinsicElements["mesh"]) {
  return (
    <mesh {...props} recieveShadow={true} castShadow>
      <boxBufferGeometry />
      <meshPhysicalMaterial  color={"white"} />
    </mesh>
  );
}
export default Box;