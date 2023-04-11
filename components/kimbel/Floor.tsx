import React from 'react';

function Floor(props: JSX.IntrinsicElements['mesh']) {
  return (
    <mesh {...props} recieveShadow>
      <boxBufferGeometry args={[20, 1, 10]} />
      <meshPhysicalMaterial color='white' />
    </mesh>
  );
}

export default Floor;
