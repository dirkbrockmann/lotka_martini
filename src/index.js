import 'tachyons/css/tachyons.min.css'
import cfg from "./container_config.js" 
import setup_container from "./setup_container.js"
import setup_interactions from "./setup_interactions.js"
import setup_controls from "./controls.js"
import {initialize as setup_simulation} from "./simulation.js"
import {go,setup as setup_all,reset as reset_all} from "./controls.js"
import meta from "./meta.js"


var display,controls,grid;

const load = function (container_id,config=cfg) {
		
	const container = setup_container(container_id,config);

	display = container.display;
	controls = container.controls;
	grid = container.grid;
		
	setup_controls(controls,grid); 
	setup_interactions(display,controls,grid,config); 
	setup_simulation(display,controls,grid,config);
	
}

const halt  = function(){
	if(go.value()==1){
			go.press(controls)
	}
}
const reset  = function(){
	if(go.value()==1){
			go.press(controls)
	}
	
	reset_all.press(controls)
	setup_all.press(controls)
	
}


export {load,cfg as config,halt,meta,reset};