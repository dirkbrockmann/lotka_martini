import * as widgets from "d3-widgets"
import {range,map,toPairs} from "lodash-es"
import cfg from "./config.js"
import parameters from "./parameters.js"
import {toArray,add_id_label,add_widget,get_variables,get_booleans,get_choices} from "./utils.js"
import styles from "./styles.module.css"

const variables = get_variables(parameters);
const choices = get_choices(parameters);


add_id_label(variables)
add_id_label(choices)

const va = toArray(variables);
const ch = toArray(choices);


const sliders = map(va,
		v => widgets.slider()
					.id(v.id)
					.label(v.label)
					.range(v.range)
					.value(v.default)
					.size(cfg.widgets.slider_size)
					.girth(cfg.widgets.slider_girth)
					.knob(cfg.widgets.slider_knob)
		);

const radios = map(ch, 
		v => widgets.radio()
					.choices(v.choices)
					.id(v.id)
					.value(v.default)
					.orientation(cfg.widgets.radio_orientation)
					.labelposition(cfg.widgets.radio_label_position)
		);




add_widget(va,sliders);
add_widget(ch,radios);


const go = widgets.button().actions(["play","pause"])
const setup = widgets.button().actions(["back"])
const reset = widgets.button().actions(["rewind"])

const buttons = [go,setup,reset];

export default (controls,grid)=>{

	const sl_pos=grid.position(cfg.widgets.slider_anchor.x,range(sliders.length)
			.map(x=>(cfg.widgets.slider_anchor.y+cfg.widgets.slider_gap*x)));
	
	const ra_pos=grid.position(cfg.widgets.radio_anchor.x,cfg.widgets.radio_anchor.y);	
	
	const leg_pos=grid.position(range(cfg.widgets.legend.length)
		.map(x=>(cfg.widgets.legend_anchor.x+cfg.widgets.legend_gap*x)),cfg.widgets.legend_anchor.y);
		
	
	sliders.forEach((sl,i) => sl.position(sl_pos[i]));

	radios[0].position(ra_pos)
		.size(cfg.widgets.radio_size).shape(cfg.widgets.radio_shape)
	
	go.position(grid.position(cfg.widgets.playbutton_anchor.x,cfg.widgets.playbutton_anchor.y))
		.size(cfg.widgets.playbutton_size);
	
	reset.position(grid.position(cfg.widgets.backbutton_anchor.x,cfg.widgets.backbutton_anchor.y));
	
	setup.position(grid.position(cfg.widgets.resetbutton_anchor.x,cfg.widgets.resetbutton_anchor.y));
	

	controls.selectAll(null).data(sliders).enter().append(widgets.widget);
	controls.selectAll(null).data(buttons).enter().append(widgets.widget);
	controls.selectAll(null).data(radios).enter().append(widgets.widget);
	
	const legend = controls.selectAll(null)
		.data(cfg.widgets.legend).enter().append("g")
		.attr("class",styles.legend)
		.attr("transform",(d,i)=>"translate("+leg_pos[i].x+","+leg_pos[i].y+")")

	legend.append("text").text(d=>d).attr("transform","translate(20,0)")
	
	const colors=[cfg.simulation.color.predator,cfg.simulation.color.prey]
	legend.append("circle").attr("r",10)
	.attr("cy",-5)
	.style("fill",((d,i)=>colors[i]))

}

export {sliders,radios,go,setup,reset,variables,choices}


