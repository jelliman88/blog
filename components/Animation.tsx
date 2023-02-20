import React from "react";
import p5Types from "p5";
import dynamic from 'next/dynamic';

const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
});

interface ComponentProps {
  //Your component props
}

let yposition = 0;
let xposition = 200;
let catcher = 200;
let score = 0;

const Animation: React.FC<ComponentProps> = (props: ComponentProps) => {

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    const canvasWidth = Math.min(window.innerWidth, 400);
    const canvasHeight = Math.min(window.innerHeight, 400);
    p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
  };

  const draw = (p5: p5Types) => {
    p5.clear();
    fallingRain(236, 72, 153, p5);
    rainCatcher(p5);

    // is raindrop touching the top of the catcher 
    if (yposition === 360) {
      const d = p5.mouseX - xposition;
      if (d >= -20 && d <= 20) {
        score++;
      }
    }

    p5.textSize(40);
    p5.textFont('Helvetica');
    p5.fill(236, 72, 153);
    p5.text(score, 200, 200);
  };

  const rainCatcher = (p5: p5Types) => {
    const catcher = p5.mouseX;
    p5.rectMode(p5.CENTER);
    p5.fill(236, 72, 153);
    p5.rect(catcher, 380, 40, 40);
  };

  const fallingRain = (r: number, g: number, b: number, p5: p5Types) => {
    p5.noStroke();
    p5.fill(r, g, b);
    p5.triangle(xposition - 10, yposition, xposition + 10, yposition, xposition, yposition - 40);
    p5.ellipse(xposition, yposition, 20, 20);

    yposition = yposition + 8;

    if (yposition > 450) {
      yposition = 0;
      xposition = p5.random(20, p5.width - 20);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Sketch setup={setup} draw={draw} />
    </div>
  );
};

export default Animation;
