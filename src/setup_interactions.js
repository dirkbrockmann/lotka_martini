// here all functions are connected to the widgets, these functions can be defined here, like the 
// startstop function connected to the go button, or they can be functions defined elsewhere,
// like the initialization functions, or reset parameter functions. Regardless, here
// all functions that need to be execuded for example if a controls element is modified, are connected
// to the update() method of an widget object. See below.


import {interval} from "d3"
import * as ct from "./controls.js"
import cfg from "./config.js"
import param from "./parameters.js"
import resetparameters from "./reset_parameters.js"
import {iterate,initialize,update} from "./simulation.js"


var timer = {}

const startstop = (display,controls,config) => {
	ct.go.value() == 1 ? timer = interval(()=>iterate(display,controls,config),cfg.simulation.delay) : timer.stop()

}

export default (display,controls,grid,config) => {
	
	ct.reset.update(()=>resetparameters(controls))	
	ct.go.update(()=>startstop(display,controls,config)) 
	ct.setup.update(()=>initialize(display,controls,grid,config)) 
	param.lattice.widget.update(()=>initialize(display,controls,grid,config)) 
}

