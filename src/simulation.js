// this connects the model and the visualization. For each we have three categories of events
// 1. initialization, 2. update, 3. iteration
// this is used by index.js, e.g. to initialize the explorable

import {initialize as model_init, update as model_update, go as model_go} from "./model.js"
import {initialize as visual_init, update as visual_update, go as visual_go} from "./viz.js"

function iterate (display,controls,config) {
	model_go();
	visual_go(display,controls,config);
};

function initialize (display,controls,grid,config) {	
	model_init();

	visual_init(display,controls,grid,config); 
};

function update (display,controls,config) {
	model_update();
	visual_update(display,controls,config);
}

export {iterate,initialize,update}