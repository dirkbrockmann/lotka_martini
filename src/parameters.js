// this object defines the parameters of the model
// - constants
// - variables (connected to sliders) properties range and default
// - choices (connected to radios) properties choices and default
// - switches (connected to toggles) property default
// utils.js provides methods for extracting various types of parameters for later use

export default {
		L:100,
		boundary:"periodic",
		N:{hex:60,square:100},
		initial_prey:0.01,
		initial_predator:0.05,
		T_trajectory:500,
		T_relax:50,
	
		predator_reproduction_rate: {
			range:[0,.5],
		default:0.26,
			label:"Vermehrungsrate Räuber"
		},
		predator_death_rate: {
			range:[0,0.5],
		default:0.1,
			label:"Sterberate Räuber"
		},
		prey_reproduction_rate:{
			range : [0,1],
			default : 0.6,
			label:"Vermehrungsrate Beute"
		},
		prey_death_rate:{
			range : [0,.1],
			default : 0,
			label:"Sterberate Beute"
		},
		lattice : {
			choices:["quadrat","hexagon"],
		default:0
		}
}

