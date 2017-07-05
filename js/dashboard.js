var chart;
var my_JSON_object_1;
var my_JSON_object_4;
var my_JSON_object_5;

$(document).ready(function () {
	init_1();
	init_2();
	init_3();
	init_4();
	init_5();

	var total= Object.keys(my_JSON_object_1).length;
	fork_id.innerText = total;

	var total_event = 0;
	my_JSON_object_1.find(function(item, i){
                total_event += item.Event;
        });
	event_id.innerText = total_event;

	var total_country = Object.keys(my_JSON_object_4).length;
	country_id.innerText = total_country;

	var total_members=0;
	my_JSON_object_5.find(function(item, i){
		total_members += item.Members;
	});
	members_id.innerText = total_members;
	
});

function init_5(){
	var request_5 = new XMLHttpRequest();
        request_5.open("GET", "/home/ubuntu/studyGroup-GSOC/data/sg_members.json", false);
        request_5.send(null);
        my_JSON_object_5 = JSON.parse(request_5.responseText);
	var chart_5 = c3.generate({
                bindto: '#chart_5',
                data: {
                        json: my_JSON_object_5,
                        keys: {
                                x: 'Name',
                                value: ["Members"]
                        },
			 color: function(d){
                                return '#006400';
                        },
                        type: 'area'
                },
                axis: {
                        x: {
                                type: 'categories',
                                label: {
                                        text: 'Study Group Lead',
                                        position: 'outer-center'
                                },
                                extent: [0, 9]
                        },
                        y: {
                                label: {
                                        text: 'Number of Members',
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

function JSONtoCSV(JSONData, Report_title, show_label){
        var data = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData
//        alert(data);
        var CSV = '';
        CSV += Report_title + '\r\n';

        if (show_label){
                var row = "";
                for (var index in data[0]){
                        row+=index+ ',';
                }
                row = row.slice(0, -1);

                CSV += row + '\r\n';
        }
        for(var i =0; i<data.length; i++){
                var row = "";
                for(var index in data[i]){
                        row += '"' + data[i][index] + '",';
                }
                row.slice(0, row.length-1);
                CSV+=row + '\r\n';
        }

        if (CSV == ''){
                alert("Invalid data");
                return;
        }
        var filename = "Report_";
        filename += Report_title.replace(/ /g,"_");
        var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

        var link = document.createElement("a");
        link.href = uri;

        link.style = "visibility:hidden";
        link.download = filename + ".csv";

        document.body.appendChild(link);
	link.click();
        document.body.removeChild(link);
}


function export_csv_1(){
	var req_1 = new XMLHttpRequest();
	req_1.open("GET", "/home/ubuntu/studyGroup-GSOC/data/single_event.json", false);
	req_1.send(null);
	var json_obj = JSON.parse(req_1.responseText);
//	alert(json_obj);
	JSONtoCSV(json_obj, "study_group_events", true);
}

function export_csv_2(){
	var req_2 = new XMLHttpRequest();
        req_2.open("GET", "/home/ubuntu/studyGroup-GSOC/data/countries.json", false);
        req_2.send(null);
        var json_obj_2 = JSON.parse(req_2.responseText);
	JSONtoCSV(json_obj_2, "study_group_countries", true);
}

function show(name){
	alert(name);
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
				color: function(d){
					return '#FF8C00';
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
	var chart = c3.generate({
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



