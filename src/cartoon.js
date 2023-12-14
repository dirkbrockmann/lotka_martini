import * as d3 from "d3"
import cfg from "./config.js"
import param from "./parameters.js"
import {trajectory} from "./model.js"
import {maxBy,max,meanBy,minBy} from "lodash-es"

var T = [param.T_relax,param.T_trajectory+param.T_relax];
const Ntot = param.lattice.widget.value() == 0 ? (2*param.N.square+1)**2 : (1+3*param.N.hex*(param.N.hex+1))
//const yr = [0,(param.initial_prey+param.initial_predator*Ntot)]
var yr = [0,Ntot]


const sc_x = d3.scaleLinear().domain(T).range([0, cfg.cartoon.width]);
const sc_y = d3.scaleLinear().domain(yr).range([0,-cfg.cartoon.height]);
const xAxis = d3.axisBottom(sc_x).tickFormat("");
const yAxis = d3.axisLeft(sc_y).tickFormat("");

const predator_line = d3.line()
    .x(function(d) { return sc_x(d.t); })
    .y(function(d) { return sc_y(d.y); });

const prey_line = d3.line()
    .x(function(d) { return sc_x(d.t); })
    .y(function(d) { return sc_y(d.x); });
		

const initialize = (controls,grid) => {
	
	T = [param.T_relax,param.T_trajectory+param.T_relax];
	sc_x.domain(T);
	sc_y.domain(yr);
			
	const pos=grid.position(cfg.cartoon.anchor.x,cfg.cartoon.anchor.y);		
	const fs = cfg.cartoon.fontsize;
	controls.select(".plot").remove()	
	const plot = controls.append("g").attr("class","plot")
		.attr("transform","translate("+pos.x+","+pos.y+")")
	
	plot.append("g").call(xAxis).attr("class","xaxis");
	plot.append("g").call(yAxis).attr("class","yaxis");
	
	plot.append("text").text(cfg.cartoon.x_label)
		.attr("transform","translate("+sc_x((T[1]+T[0])/2)+","+1.5*fs+")")
		.style("text-anchor","middle").style("font-size",fs)	

	// plot.append("text").text(cfg.cartoon.y_label)
	// 	.attr("transform","translate("+(-fs)+","+(sc_y(1000))+")rotate(-90)")
	// 	.style("text-anchor","middle")
	// 	.style("font-size",fs)
	
	plot.append("path").datum(trajectory).attr("d",prey_line)
		.style("stroke",cfg.simulation.color.prey).style("stroke-width","3px")
		.style("fill","none")
		.attr("id","prey")

	plot.append("path").datum(trajectory).attr("d",predator_line)
		.style("stroke",cfg.simulation.color.predator).style("stroke-width","3px")
		.style("fill","none")
		.attr("id","predator")

		
}

const update = (controls) => {
	
	yr = [0,1.1*max([maxBy(trajectory,'x').x,maxBy(trajectory,'y').y])]
	if (param.tick>param.T_trajectory+param.T_relax) {
		T = [minBy(trajectory,'t').t,maxBy(trajectory,'t').t] 
	}

	sc_x.domain(T);
	sc_y.domain(yr);
	
	//xAxis = d3.axisBottom(sc_x).tickFormat("");
	//yAxis = d3.axisLeft(sc_y).tickFormat("");
	
	controls.select(".xaxis").call(xAxis)
	controls.select(".yaxis").call(yAxis)
	
	controls.select("#prey").datum(trajectory).attr("d",prey_line)
	controls.select("#predator").datum(trajectory).attr("d",predator_line)	
	
}

export {initialize,update}

