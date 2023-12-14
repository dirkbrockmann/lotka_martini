// This is the core module for the implementation of the visualization
// It's analogous to model.js in terms of its relation to other modules,
// e.g. it reads the parameters and provides initialize, go and update functions
// to simulation.js where they get bundled with the analogous functions in model.js
// the observables and variables exported in model.js, e.g. the quantities
// used for the actual visualizations are also imported to viz.js

import * as d3 from "d3"
import param from "./parameters.js"
import {agents,trajectory} from "./model.js"
import cfg from "./config.js"
import {each} from "lodash-es"
import {initialize as cartoon_init, update as cartoon_update} from "./cartoon.js"

const X = d3.scaleLinear().domain([-0.5,0.5]);
const Y = d3.scaleLinear().domain([-0.5,0.5]);

var ctx,W,H;

// the initialization function, this is bundled in simulation.js with the initialization of
// the model and effectively executed in index.js when the whole explorable is loaded
// typically here all the elements in the SVG or CANVAS element are set.

function draw_rect(){

	each(agents,d=>{
		const c = d.cell();
		const l = c.length;		

		const color = cfg.simulation.color[d.state]

		ctx.fillStyle=color;
		ctx.strokeStyle=color;
		ctx.lineWidth = 0;
		ctx.fillRect(X(c[0].x),X(c[0].y),X(c[2].x)-X(c[0].x),X(c[2].y)-X(c[0].y))
	})
}

function draw_path(){

	each(agents,d=>{
		const c = d.cell();
		const l = c.length;
		
		const color = cfg.simulation.color[d.state]
		
		ctx.fillStyle=color;
		ctx.strokeStyle=color;

		ctx.lineWidth = 1;

		ctx.beginPath();
		ctx.moveTo(X(c[0].x),Y(c[0].y))
		each(c,(p,i)=>ctx.lineTo(X(c[(i+1)%l].x),Y(c[(i+1)%l].y)))
		ctx.fill();
		ctx.stroke()
		ctx.closePath();
	})
}

const initialize = (display,controls,grid,config) => {

	W = config.display_size.width;
	H = config.display_size.height;
			
	X.range([0,W]);
	Y.range([0,H]);
	
	ctx = display.node().getContext('2d');	

	go(display,controls,config)
	
	cartoon_init(controls,grid)

	
};

// the go function, this is bundled in simulation.js with the go function of
// the model, typically this is the iteration function of the model that
// is run in the explorable. It contains the code that updates the parts of the display
// panel as a function of the model quantities.

const go = (display,controls,config) => {
	
	ctx.clearRect(0, 0, W, H);
	param.lattice.widget.value()==0 ? draw_rect() : draw_path()
	cartoon_update(controls)
}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the visualization, if a parameter is changed,
// e.g. a radio button is pressed, when the system is not running, e.g. when it is paused.

const update = (display,controls,config) => {
	
	
}


export {initialize,go,update}
