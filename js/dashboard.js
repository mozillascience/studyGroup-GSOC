var chart;
var my_JSON_object_1;
var my_JSON_object_4;

$(document).ready(function () {
	init_1();
	init_2();
	init_3();
	init_4();
	var total= Object.keys(my_JSON_object_1).length;
	fork_id.innerText = total;

	var total_event = 0;
	my_JSON_object_1.find(function(item, i){
                total_event += item.Event;
        });
	event_id.innerText = total_event;

	var total_country = Object.keys(my_JSON_object_4).length;
	country_id.innerText = total_country;
	
});

function show(name){
//	alert(name);
	var index;
	var filter_obj = my_JSON_object_1.find(function(item, i){
  		if(item.Name === name){
    			index = i;
  		}
	});
	var total= Object.keys(my_JSON_object_1).length;
	total--;	
//	alert(total);

//	alert(index);

	if (index > -1) {	
		var newData;

		newData = my_JSON_object_1.concat();
			
		if (index == 0){
        		newData.splice(index+1,total) 
     		 }
      		else if (index == total){
        		newData.splice(0, index)
      		}
      		else {
        		newData.splice(index+1,total-index+1)
        		newData.splice(0, index)
      		}

		chart.load({
			json: newData,
                	keys: {
           	        	x: 'Name',
                        	value: ["Event"]
                	},			
			unload: true
		});
	}
	else {
		alert("Study Group not found");
	}
}

function init_1(){
	var request_1 = new XMLHttpRequest();
	request_1.open("GET", "/home/ubuntu/studyGroup-GSOC/data/single_event.json", false);
	request_1.send(null);
	my_JSON_object_1 = JSON.parse(request_1.responseText);
	chart= c3.generate({
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

function init_4(){
        var request_4 = new XMLHttpRequest();
        request_4.open("GET", "/home/ubuntu/studyGroup-GSOC/data/countries.json", false);
        request_4.send(null); 
        my_JSON_object_4 = JSON.parse(request_4.responseText);
        var chart= c3.generate({
                bindto: '#chart_4',
                data: { 
                        json: my_JSON_object_4,
                        keys: {
                                x: 'Country',
                                value: ["Count"]
                        },
			color: function(d){
				return '#800000';
			},      
                        type: 'spline'
                },
                axis: {
                        x: {
                                type: 'categories',
                                label: {
                                        text: 'Countries',
                                        position: 'outer-center'
                                },      
                                extent: [0, 6]
                        },
                        y: {
                                label: {
                                        text: 'Number of Study Group',
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



