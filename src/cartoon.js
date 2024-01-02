import * as d3 from "d3"
import cfg from "./config.js"
import param from "./parameters.js"
import {trajectory} from "./model.js"
import {maxBy,max,meanBy,minBy} from "lodash-es"
import styles from "./styles.module.css"

var T = [param.T_relax,param.T_trajectory+param.T_relax];
const Ntot = param.lattice.widget.value() == 0 ? (2*param.N.square+1)**2 : (1+3*param.N.hex*(param.N.hex+1))

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
	controls.select("."+styles.plot).remove()	
	const plot = controls.append("g").attr("class",styles.plot)
		.attr("transform","translate("+pos.x+","+pos.y+")")
	
	plot.append("g").call(xAxis).attr("class",styles.xaxis);
	plot.append("g").call(yAxis).attr("class",styles.yaxis);
	
	plot.append("text").text(cfg.cartoon.x_label)
		.attr("transform","translate("+sc_x((T[1]+T[0])/2)+","+20+")")
		.attr("class",styles.xlabel)
	
	plot.append("path").datum(trajectory).attr("d",prey_line)
		.style("stroke",cfg.simulation.color.prey)
		.attr("id","prey")
		.attr("class",styles.curve)
		
	plot.append("path").datum(trajectory).attr("d",predator_line)
		.style("stroke",cfg.simulation.color.predator)
		.attr("id","predator")
		.attr("class",styles.curve)
}

const update = (controls) => {
	
	yr = [0,1.1*max([maxBy(trajectory,'x').x,maxBy(trajectory,'y').y])]
	if (param.tick>param.T_trajectory+param.T_relax) {
		T = [minBy(trajectory,'t').t,maxBy(trajectory,'t').t] 
	}

	sc_x.domain(T);
	sc_y.domain(yr);
		
	controls.select("."+styles.xaxis).call(xAxis)
	controls.select("."+styles.yaxis).call(yAxis)
	
	controls.select("#prey").datum(trajectory).attr("d",prey_line)
	controls.select("#predator").datum(trajectory).attr("d",predator_line)	
	
}

export {initialize,update}

