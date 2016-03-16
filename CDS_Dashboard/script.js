        var chart;
        $(document).ready(function () {
            var title = 'Commerce Data Service',
                subtitle = 'Click on a section to drill-down',
                colors = Highcharts.getOptions().colors,
                categories = ['Pre-Discovery', 'Discovery', 'In-Progress', 'Complete'], // category name matches 'name' property
                name = 'Groups',
                subtitle2 = 'Click section to return Home',
                data = [{
                    y: 2, // this is to determine how big the slice of the pie you want for this item
                    name: 'Pre-Discovery', // this is the top group - used in  328, 339 for tool tip and resetting
                    color: '#6bad50', // decide color for the slice
                    list: 'DOC, BEA',
                    // THIS BEGINS THE NEXT DRILLDOWN - for deeper drilldowns you create another object in the 'data' property
                    drilldown: {
                        title: 'Pre-Discovery Clients', // title at top of drill down
                        subtitle: subtitle2, // can set subtitle here or you can use the one made above
                        name: 'Users', // Way to organize your drilldowns based on info, doesn't show up in graph
                        categories: ['DOC'], // Line 227 uses this category to make X Axis
                        data: [{
                            y: 1, // setting this to 0 makes it disappear
                            name: 'DOC',
                            color: '#6bad50',
                            initiative: 'Commerce Data Academy',
                            services: 'UI/UX',
                            objective: 'Delivering Data Services'
                        }]
                    }
                }, {
                    y: 1,
                    name: 'Discovery',
                    color: '#dee58c',
                    list: 'BEA',
                    drilldown: {
                        title: 'Discovery Clients',
                        subtitle: subtitle2,
                        name: 'Users',
                        categories: ['BEA'],
                        data: [{
                            y: 1,
                            name: 'BEA',
                            color: '#dee58c',
                            initiative: 'BEA RIMS II',
                            services: 'UI/UX',
                            objective: 'Delivering Data Services'
                        }]
                    }
                }, {
                    y: 5,
                    name: 'In-Progress',
                    color: '#006c79',
                    list: 'ITA, NIST, PTO, ESA',
                    drilldown: {
                        title: 'In-Progress Clients',
                        subtitle: subtitle2,
                        name: 'Users',
                        categories: ['NIST', 'PTO', 'ESA', 'ITA'],
                        data: [{
                            y: 1,
                            name: 'NIST',
                            color: colors[2],
                            initiative: 'Commerce Interoperability Project',
                            services: 'Data Science, Back-End',
                            objective: 'Creating Data-Driven Government'
                        },  {
                            y: 1,
                            name: 'PTO',
                            color: colors[3],
                            initiative: 'Open Data Roadmap',
                            services: 'General',
                            objective: 'Fueling Economic Growth'
                        }, {
                            y: 1,
                            name: 'ESA',
                            color: colors[4],
                            initiative: 'Commerce Data Advisory Council',
                            services: 'General',
                            objective: 'Fueling Economic Growth'
                        }, {
                            y: 2,
                            name: 'ITA',
                            color: colors[5],
                            initiative: 'Numerous Projects',
                            services: 'UI/UX, Back-End, Data Science',
                            objective: 'Numerous Objectives',
                            drilldown: {
                                title: 'ITA',
                                subtitle: subtitle,
                                name: 'Users',
                                categores: ['New Exporters', 'Principal Tracker'],
                                data: [{
                                    y: 1,
                                    name: 'Principal Tracker',
                                    color: colors[1],
                                    services: 'UX/UI, Back-End',
                                    objective: 'Delivering Data Services'
                                },{
                                    y: 1,
                                    name: 'New Exporters Project',
                                    color: colors[2],
                                    services: 'Data Science',
                                    objective: 'Fueling Economic Growth'
                                }]
                            }
                        }]
                    }
                }, {
                    y: 4,
                    name: 'Complete',
                    color: '#00305d',
                    list: 'DOC, CENSUS',
                    drilldown: {
                        title: 'Complete Projects',
                        subtitle: subtitle,
                        name: 'Users',
                        categories: ['DOC, CENSUS'],
                        data: [{
                            y: 1,
                            name: 'CENSUS',
                            color: colors[1],
                            initiative: 'Income Inequality',
                            services: 'General',
                            objective: 'Fueling Economic Growth'
                        }, {
                            y: 3,
                            name: 'DOC',
                            color: colors[2],
                            initiative: 'Numerous Projects',
                            services: 'UX/UI, Data Science, Back-End',
                            objective: 'Numerous Objectives',
                            drilldown: {
                                title: 'DOC Projects',
                                subtitle: 'Completed',
                                name: 'Users',
                                categories: ['Commerce Data Usability Project', 'Data.Commerce.Gov', 'White House Council of Women and Girls'],
                                data: [{
                                    y: 1,
                                    name: 'Commerce Data Usability Project',
                                    color: colors[1],
                                    services: 'Data Science, UX/UI, Back-End',
                                    objective: 'Delivering Data Services'
                                }, {
                                    y: 1,
                                    name: 'Data.Commerce.Gov',
                                    color: colors[2],
                                    services: 'General',
                                    objective: 'Fueling Economic Growth'
                                }, {
                                    y: 1, 
                                    name: 'White House Council of Women and Girls',
                                    color: colors[3],
                                    services: 'Data Science, UX/UI',
                                    objective: 'Delivering Data Services'
                                }]
                            }
                        }]
                    }
                }], // end of data property
                chartType = 'pie'
            //    alpha = 0;

            // if (chartType == 'pie') {
            //     subtitle = 'Click on a slice to drill-down';
            //     // alpha = 60; // this is chooses the angle that people see the 3d pie chart (along top down axis)
            //}

            function setChart(options) {
                chart.setTitle({
                    text: options.title
                }, {
                    text: options.subtitle
                });
                chart.series[0].remove(false); //boolean decides if it needs to redraw immediately, sinc we are doing more we do not set it to true, we remove the series
                chart.xAxis[0].setCategories(options.categories, false);
                chart.addSeries({
                    type: options.type,
                    name: options.name,
                    data: options.data,
                    color: options.color || 'white'
                }, false); // adds the series (which contains the data) - we pass it a new object and tell it false so it doesn't automatically re-render
                 // xAxis[0] since there is only 1 axis - setCategory sets categories from the array you pass it (options.categories - you use false so it doesn't automatically redraw THUS you use chart.redraw() after)
                chart.redraw() // redraws chart
            }

            function redraw(options) {
                chart.redraw();
            }

            chart = new Highcharts.Chart({
                credits: {
                    enabled: false
                },
                chart: {
                    style: {
                        fontFamily: 'SourceSansProRegular, Open Sans, Helvetica Neue, Arial, sans-serif'
                    },
                    renderTo: 'chartContainer', // passing it where to put it on the HTML - there is a div with ID 'chartContainer'
                    // options3d: {
                    //     enabled: true,
                    //     alpha: alpha,
                    //     beta: 0,
                    //     depth: 50,
                    //     frame: {
                    //         bottom: {
                    //             size: 10,
                    //             color: '#C0C0C0'
                    //         }
                    //     },
                    // },
                    //height: 600, // sets chart height regardless of div
                    //width: 800, // sets chart width regardless of div
                    // plotBackgroundColor: { //sets the background color
                    //     linearGradient: [0, 0, 500, 500],
                    //     stops: [
                    //         [0, 'rgb(200, 200, 255)'],
                    //         [1, 'rgb(255, 255, 255)']
                    //     ]
                    // }
                }, // end of chart property
                title: {
                    text: title,
                    style: {
                        fontWeight: 'bold',
                        textTransform: 'uppercase'
                    }
                },
                subtitle: {
                    text: subtitle
                },
                xAxis: {
                    categories: categories
                },
                yAxis: { // i don't know get this
                    title: {
                        text: 'Assignments'
                    }
                },
                plotOptions: {
                    pie: {
                        // depth: 50,
                        // innerSize: '40%',
                        //slicedOffset: 20, // decides how far a slice should move if chosen - related to mouseout event below
                        // point: { //sets events
                        //     events: {
                        //         mouseOut: function (event) {
                        //             this.slice(false); // 'false' boolean sets it back into the pie
                        //         },
                        //         mouseOver: function (event) {
                        //             this.slice(false); // 'true' boolean sets it away from pie using slicedOffset
                        //         }
                        //     }
                        // },
                        dataLabels: {
                            enabled: true,
                            color: 'black',
                            style: {
                                fontWeight: 'bold'
                            }
                        }
                    },
                    series: {
                        cursor: 'pointer', // cursor set to pointer since we have 'click' events
                        point: {
                            events: {
                                click: function () {
                                    var drilldown = this.drilldown; // uses keyword 'this'
                                    var options; // create variable to passed into setChart function
                                    if (drilldown) { // drill down
                                        options = {
                                                'title': drilldown.title,
                                                'subtitle': drilldown.subtitle,
                                                'name': drilldown.name,
                                                'categories': drilldown.categories,
                                                'data': drilldown.data,
                                                'type': chartType
                                        };
                                    } else { // restore to first level
                                        options = {
                                                'title': title,
                                                'subtitle': subtitle,
                                                'name': name,
                                                'categories': categories,
                                                'data': data,
                                                'type': chartType
                                            // return options;
                                        };
                                    }
                                    setChart(options); // redraws the chart and initializes it
                                }
                            }
                        },
                    } //end of series
                }, //end of plotOptions
                tooltip: {
                    formatter: function () {
                        var point = this.point, // sets keyword 'this' -- this.point is really series.data
                            s = point.name + ': ' + point.list + '. '; //formats pointer
                        if (point.drilldown) { // if the point is in series.data.drilldown do this
                            s = 'Click to view ' + point.name;
                        } else {
                            s = point.name + '<br/>' + 
                                'Initiative: ' + point.initiative + '<br/>' +
                                'Services: ' + point.services + '<br/>' +
                                'Objective: ' + point.objective + '<br/>' + '<br/>' +
                                '<em>' + 'Click Back to Home' + '</em>';
                        }
                        return s;
                    }
                },
                series: [{  // sets chart series here 
                    type: chartType,
                    name: name,
                    data: data,
                    color: 'white' // don't know why you set this to white
                }],
                exporting: {
                    enabled: false // can't print chart
                },
            }); // end of chart = new Highcharts.Chart()
        }); // end of document.ready()