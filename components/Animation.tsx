import React from "react";
import p5Types from "p5"; //Import this for typechecking and intellisense
import dynamic from 'next/dynamic'
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
    ssr: false,
  })
interface ComponentProps {
	//Your component props
}

var yposition = 0;
var xposition = 0;
var catcher = 200;

const Animation: React.FC<ComponentProps> = (props: ComponentProps) => {
	

	//See annotations in JS for more information
	const setup = (p5: p5Types, canvasParentRef: Element) => {
		p5.createCanvas(400, 400).parent(canvasParentRef).center('horizontal');
	};

	const draw = (p5: p5Types) => {
        p5.clear()
        fallingBall(236,72,153, p5);
        rainCatcher(p5);
        
        if (catcher > xposition-20 && 
            catcher < xposition+20 && 
            yposition >= 380)
        {
            p5.textSize(20)
            p5.fill(0)
            p5.text("Yay!",200,200)
            
        }
	};

    const rainCatcher = (p5: p5Types) =>{
  
        const catcher = p5.mouseX
        
        p5.rectMode(p5.CENTER)
        p5.fill(0)
        p5.rect(catcher,380,40,40)
        
      }

      const fallingBall = (r: any,g: any,b: any, p5: p5Types) =>{

        yposition++
        
        p5.noStroke()
        p5.fill(r,g,b)
      
        p5.triangle(xposition-10,yposition,xposition+10,yposition,xposition,yposition-40)
        p5.ellipse(xposition,yposition,20,20);
        
        yposition = yposition + 8;
        
        if (yposition > 450){
        yposition = 0;
        xposition = p5.random(400);
        }  
        
      }
    

	return <Sketch setup={setup} draw={draw} />;
};

export default Animation;

