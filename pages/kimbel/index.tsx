import React from "react";
import { Canvas } from "@react-three/fiber";
import Floor from "../../components/kimbel/Floor";
import Box from "../../components/kimbel/Box";
import LightBulb from "../../components/kimbel/LightBulb";
import OrbitControls from "../../components/kimbel/OrbitControls";
import Draggable from "../../components/kimbel/Draggable";





const kimbel = () => {
   
    
    return (
        <div>
          <Canvas
          className="h-screen w-screen"
            shadows
            camera={{
              position: [0, 7, 7],
            }}
          >
            <ambientLight color={"white"} intensity={0.2} />
            <LightBulb position={[0, 3, 0]} />
            <Draggable>
                <Box rotateX={3} rotateY={0.2} />
            </Draggable>
            <OrbitControls />
            <Floor position={[0, -1, 0]} />
          </Canvas>
        </div>
      );
    };
    export default kimbel;