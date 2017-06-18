$(document).ready(function () {
	init_1();
	init_2();
	init_3();
});

function init_1(){
	var request_1 = new XMLHttpRequest();
	request_1.open("GET", "/home/ubuntu/studyGroup-GSOC/data/single_event.json", false);
	request_1.send(null);
	var my_JSON_object_1 = JSON.parse(request_1.responseText);
	var chart= c3.generate({
		bindto: '#chart_1',
		data: {
			json: my_JSON_object_1,
			keys: {
				x: 'Name',
				value: ["Event"]
			},
			type: 'bar'
		},
		axis: {
			x: {
				type: 'categories',
				label: {
					text: 'Study Group Lead',
					position: 'outer-center'
				},
				extent: [0, 6]
			},
			y: {
				label: {
					text: 'Number of Events',
					position: 'outer-middle'
				}
			}
		},
		zoom: {
			enabled: true,
			rescale: true
		},
		legend: {
                         show:false
                }
	});
}

function init_2(){			
		var request_2 = new XMLHttpRequest();
 		request_2.open("GET", "/home/ubuntu/studyGroup-GSOC/data/types.json", false);
   		request_2.send(null);
   		var my_JSON_object_2 = JSON.parse(request_2.responseText);

		var chart= c3.generate({
			bindto: '#chart_2',
			data: {
				json: my_JSON_object_2,
				keys: {
					x: 'Type',
					value: ["Count"]
				},
				type: 'line'
			},
			axis: {
				x: {
					type: 'categories',
					label: {
						text: 'Types of Lessons',
						position: 'outer-center'
					},
					extent: [0, 6]
				},
				y: {
					label: {
						text: 'Number of Lessons',
						position: 'outer-middle'
					}
				}
			},
			subchart: {
    				show: true,
    				size: {
    					height: 80,
    				}
    			},
    			zoom: {
    				enabled: true,
    				rescale: true
    			},
			legend: {
                                show:false
                        }
	});
}

function init_3(){
	var request = new XMLHttpRequest();
	request.open("GET", "/home/ubuntu/studyGroup-GSOC/data/levels.json", false);
	request.send(null);
	var my_JSON = JSON.parse(request.responseText);
	var data = {};
	var sites = [];
	my_JSON.forEach(function(e) {
		sites.push(e.Level);
		data[e.Level] = e.Count;
	});	
	chart = c3.generate({
		bindto: '#chart_3',
		data: {
			json: [ data ],
			keys: {
          			value: sites,
  			},
		type:'donut',
		onclick: function (d, i) { console.log("onclick", d, i); },
	        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
		onmouseout: function (d, i) { console.log("onmouseout", d, i); }
        	},
		donut: {
               		title: "Levels of Lessons"
        	}
	});
}
