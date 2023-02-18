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
var xposition = 200;
var catcher = 200;
var score = 0;


const Animation: React.FC<ComponentProps> = (props: ComponentProps) => {
	const setup = (p5: p5Types, canvasParentRef: Element) => {
        document.getElementById('defaultCanvas0')?.classList.add('bg-red-200')
        var x = (p5.windowWidth - 400) / 2;
        var y = (p5.windowHeight - 400) / 2
		p5.createCanvas(400, 400).parent(canvasParentRef).position(x,y);
        
	};
    const draw = (p5: p5Types) => {
        p5.clear()
        fallingRain(236,72,153, p5);
        rainCatcher(p5);
        // is raindrop touching the top of the catcher 
        if (yposition == 360)
           {
            const d = p5.mouseX - xposition
            if (d >= -20 && d <= 20) {
                score ++
            }}
        p5.textSize(40)
        p5.textFont('Helvetica')
        p5.fill(20)
        p5.text(score,200,200)
            
	};

    const rainCatcher = (p5: p5Types) =>{
        const catcher = p5.mouseX
        p5.rectMode(p5.CENTER)
        p5.fill(0)
        p5.rect(catcher,380,40,40)
        
      }

      const fallingRain = (r: number,g: number,b: number, p5: p5Types) =>{
        p5.noStroke()
        p5.fill(r,g,b)
        p5.triangle(xposition-10,yposition,xposition+10,yposition,xposition,yposition-40)
        p5.ellipse(xposition,yposition,20,20);
        
        yposition = yposition + 8;
        
        if (yposition > 450){
        yposition = 0;
        xposition = p5.random(20,380);
        }  
        
      }
    

	return <Sketch setup={setup} draw={draw} />;
};

export default Animation;

