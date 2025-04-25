// the global properties of the explorable, widget geometries etc. depending on the choice and application
// you are free to define new variables and properties for later access and for setting up the explorable
// the only place this is needed is for setting up the interactions in setup_interactions.js and in
// controls.js

export default { 
	widgets:{
		slider_size: 400,
		slider_show: true,
		slider_gap : 1.5,
		slider_girth: 12,
		slider_knob: 14,
		slider_anchor: {x:1,y:7},
		playbutton_size: 120,
		playbutton_anchor:{x:3,y:2},
		backbutton_anchor:{x:4,y:4.5},
		resetbutton_anchor:{x:2,y:4.5},
		radio_anchor:{x:8,y:5},
		radio_size:40,
		radio_orientation:"vertical",
		radio_label_position:"right",
		radio_shape:"rect",
		legend_anchor:{x:6,y:4},
		legend_gap:3.5,
		legend:["Predator","Prey"]
	},
	simulation: {
		delay:10,
		color:{predator:"#800220",prey:"#d1ba23",empty:"#f1eae4"},
		legend_symbol_size:20
	},
	cartoon:{
		anchor:{x:6,y:3},
		width:200,
		height:80,
		x_label:"time"
	}
}