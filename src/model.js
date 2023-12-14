// this is a module that contains most of the explorable specific code
// the "math" of the explorable, the model itself, without the elements
// of visualization which are done in viz.js

import param from "./parameters.js"
import {each,filter} from "lodash-es"
import * as lattices from "lattices"

const L = param.L;

// typically objects needed for the explorable
// are defined here

var agents = [];
var trajectory = [];

// the initialization function, this is bundled in simulation.js with the initialization of
// the visualization and effectively executed in index.js when the whole explorable is loaded

const initialize = () => {

	// set/reset timer
	param.timer={}; param.tick=0;

	// make agents
	const N = param.lattice.widget.value()==1 ? param.N.hex : param.N.square
	const s = lattices[param.lattice.widget.value()==1?"hex":"square"](N)
		.boundary(param.boundary)
	
	agents = s.nodes;
	
	each(agents,a=>{
		const X = Math.random()
		if(X < param.initial_prey + param.initial_predator) {
			if (X < param.initial_prey){
				a.state = "prey"
			} else {
				a.state = "predator"
			}
		} else {
			a.state="empty";
		}

	})
	
	trajectory = [{t:param.tick,x:filter(agents,a=>a.state=="prey").length,y:filter(agents,a=>a.state=="predator").length}]
	
};

// the go function, this is bundled in simulation.js with the go function of
// the visualization, typically this is the iteration function of the model that
// is run in the explorable.

const go  = () => {
	
	param.tick++;
	
	const prey = filter(agents,d=>d.state=="prey");
	const predator = filter(agents,d=>d.state=="predator");
	
	//const lattice_correct = param.lattice.widget.value()==0 ? 1 : 8.0 / 6.0
	
	const alpha = param.prey_reproduction_rate.widget.value();
	const beta =  param.prey_death_rate.widget.value();
	const gamma = param.predator_reproduction_rate.widget.value();
	const delta = param.predator_death_rate.widget.value();

	each(prey,d=>{
		const n = d.neighbors[Math.floor(Math.random()*d.neighbors.length)];
		if (n.state=="empty" && Math.random()<alpha) {n.state="prey"};
	})
	
	each(prey,d=>{
		if(Math.random()<beta){ d.state="empty"}
	})
	
	each(prey,d=>{
		
		const n_pred = filter(d.neighbors,n=>n.state=="predator").length;
		const n_pairs = n_pred*(n_pred-1)/2;
		const total_probability = 1 - (1-gamma)**n_pairs;
		//const total_probability = n_pairs > 1 ? gamma : 0;
				
		d.next_state = Math.random()<total_probability ? "predator" : "prey"
		
	})
	
	each(prey,d=>{
		d.state = d.next_state
	})
	
	each(predator,d=>{
		if(Math.random()<delta){ d.state="empty"}
	})
	
	if (param.tick>param.T_relax){
		trajectory.push({t:param.tick,x:filter(agents,a=>a.state=="prey").length,y:filter(agents,a=>a.state=="predator").length})
	} else {
		trajectory = [{t:param.tick,x:filter(agents,a=>a.state=="prey").length,y:filter(agents,a=>a.state=="predator").length}]
	}
	
	if (trajectory.length>param.T_trajectory) {
		trajectory.shift()
	}
	
}

// the update function is usually not required for running the explorable. Sometimes
// it makes sense to have it, e.g. to update the model, if a parameter is changed,
// e.g. a radio button is pressed. 

const update = () => {
	
	each(agents,x => {x.active = x.index < param.number_of_particles.widget.value() ? true : false})

}

// the three functions initialize, go and update are exported, also all variables
// that are required for the visualization
export {agents,trajectory,initialize,go,update}
