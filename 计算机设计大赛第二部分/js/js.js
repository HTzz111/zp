 $(window).load(function(){  
             $(".loading").fadeOut()
            })  
			
/****/
$(document).ready(function(){
	var whei=$(window).width()
	$("html").css({fontSize:whei/20})
	$(window).resize(function(){
		var whei=$(window).width()
	 $("html").css({fontSize:whei/20})
});
	});


 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {
    // echarts_1()
    // echarts_2()
    echarts_3()
    echarts_4()
    echarts_5()
    echarts_6()
    // pe01()
    // pe02()
    // pe03()

//     function echarts_1() {
//         var myChart = echarts.init(document.getElementById('echarts1'));
      
//         var categories = ['2019年', '2020年', '2021年', '2022年', '2023年'];
      
//         var medicalStaffData = [1015.4, 1124.42, 1165.79, 1248.83, 1295]; // 卫生技术人员数(万人)
//         var neonatalMortalityData = [3.5, 3.4, 3.1, 3.1, 2.8]; // 新生儿死亡率(‰)
//         var infantMortalityData = [5.6, 5.4, 4.9, 4.5, 4.5]; // 婴儿死亡率(‰)
//         var under5MortalityData = [7.8, 7.5, 6.8, 6.8, 6.2]; // 5岁以下儿童死亡率(‰)
//         var maternalMortalityData = [17.8, 16.9, 16.1, 15.7, 15.1]; // 孕产妇死亡率(1/10万)
    
//         option = {
//             tooltip: {
//                 trigger: 'axis',
//                 axisPointer: {type: 'cross'}
//             },
//             grid: {
//                 top: "20%",
//                 right: "50",
//                 bottom: "20",
//                 left: "30",
//             },
//             legend: {
//                 data: ['卫生技术人员数', '新生儿死亡率', '婴儿死亡率', '5岁以下儿童死亡率', '孕产妇死亡率'],
//                 right: 'center', width: '100%',
//                 textStyle: {
//                     color: "#fff"
//                 },
//                 itemWidth: 12,
//                 itemHeight: 10,
//             },
//             xAxis: [
//                 {
//                     type: "category",
//                     data: categories,
//                     axisLine: {lineStyle: {color: "rgba(255,255,255,.1)"}},
//                     axisLabel: {textStyle: {color: "rgba(255,255,255,.7)", fontSize: '14'}}
//                 },
//             ],
//             yAxis: [
//                 {
//                     type: "value",
//                     name: "卫生技术人员数(万人)",
//                     axisTick: {show: false},
//                     splitLine: {show: false},
//                     axisLabel: {
//                         show: true,
//                         fontSize: 9,
//                         color: "rgba(255,255,255,.6)"
//                     },
//                     axisLine: {
//                         min: 0,
//                         max: 1500,
//                         lineStyle: {color: 'rgba(255,255,255,.1)'}
//                     }
//                 },
//     {
//                     type: "value",
//                     name: "死亡率(‰)",
//                     show: true,
//                     axisLabel: {
//                         show: true,
//                         fontSize: 10,
//                         formatter: "{value} %",
//                         color: "rgba(255,255,255,.6)"
//                     },
//                     axisTick: {show: false},
//                     axisLine: {lineStyle: {color: 'rgba(255,255,255,.1)'}},
//                     splitLine: {show: true, lineStyle: {color: 'rgba(255,255,255,.1)'}}
//          } ],
//             series: [
//                 {
//                     name: '卫生技术人员数',
//                     type: 'bar',
//                     data: medicalStaffData,
//                     barWidth: "15%",
//                     itemStyle: {
//                         normal: {
//                             barBorderRadius: 15,
//                             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                                 offset: 0,
//                                 color: '#8bd46e'
//                             }, {
//                                 offset: 1,
//                                 color: '#09bcb7'
//                             }])
//                         }
//                     },
//                     barGap: "0.2"
//                 },
//                 {
//                     name: '新生儿死亡率',
//                     type: 'line',
//                     yAxisIndex: 1,
//                     data: neonatalMortalityData,
//                     lineStyle: {
//                         normal: {
//                             width: 2
//                         },
//                     },
//                     itemStyle: {
//                         normal: {
//                             color: "#86d370",
//                         }
//                     },
//                 },
//                 {
//                     name: '婴儿死亡率',
//                     type: 'line',
//                     yAxisIndex: 1,
//                     data: infantMortalityData,
//                     lineStyle: {
//                         normal: {
//                             width: 2
//                         },
//                     },
//                     itemStyle: {
//                         normal: {
//                             color: "#fbc30d",
//                         }
//                     },
//                 },
//                 {
//                     name: '5岁以下儿童死亡率',
//                     type: 'line',
//                     yAxisIndex: 1,
//                     data: under5MortalityData,
//                     lineStyle: {
//                         normal: {
//                             width: 2
//                         },
//                     },
//                     itemStyle: {
//                         normal: {
//                             color: "#fbc30d",
//                         }
//                     },
//                 },
//                 {
//                     name: '孕产妇死亡率',
//                     type: 'line',
//                     yAxisIndex: 1,
//                     data: maternalMortalityData,
//                     lineStyle: {
//                         normal: {
//                             width: 2
//                         },
//                     },
//                     itemStyle: {
//                         normal: {
//                             color: "#fbc30d",
//                         }
//                     },
//                 }
//             ]
//         };
      
//         myChart.setOption(option);
//         window.addEventListener("resize", function () {
//             myChart.resize();
//         });
//     }
// function echarts_2() {
//     // 基于准备好的dom，初始化echarts实例
//     var myChart = echarts.init(document.getElementById('echarts2'));

//     var categories = ['2019年', '2020年', '2021年', '2022年', '2023年'];

//     // 数据
//     var medicalStaffData = [73, 76, 80, 83, 89]; // 每万人拥有卫生技术人员数(人)
//     var urbanMedicalStaffData = [111, 115, 99, 102, 109]; // 每万人拥有城市卫生技术人员数(人)
//     var ruralMedicalStaffData = [50, 52, 63, 66, 71]; // 每万人拥有农村卫生技术人员数(人)
//     var physiciansData = [28, 29, 30, 32, 34]; // 每万人拥有执业(助理)医师数(人)
//     var urbanPhysiciansData = [41, 43, 37, 38, 41]; // 每万人拥有城市执业(助理)医师数(人)
//     var ruralPhysiciansData = [20, 21, 24, 25, 27]; // 每万人拥有农村执业(助理)医师数(人)
//     var nursesData = [32, 33, 36, 37, 40]; // 每万人拥有注册护士数(人)
//     var urbanNursesData = [52, 54, 46, 47, 51]; // 每万人拥有城市注册护士数(人)
//     var ruralNursesData = [20, 21, 26, 28, 31]; // 每万人拥有农村注册护士数(人)

//     option = {
//         tooltip: {
//             trigger: 'axis',
//             axisPointer: {type: 'shadow'},
//         },
//         grid: {
//             left: '0',
//             top: '30',
//             right: '10',
//             bottom: '-20',
//             containLabel: true
//         },
//         legend: {
//             data: ['卫生技术人员', '城市卫生技术人员', '农村卫生技术人员', '执业(助理)医师', '城市执业(助理)医师', '农村执业(助理)医师', '注册护士', '城市注册护士', '农村注册护士'],
//             right: 'center',
//             top: 0,
//             textStyle: {
//                 color: "#fff"
//             },
//             itemWidth: 12,
//             itemHeight: 10,
//         },

//         xAxis: [{
//             type: 'category',
//             boundaryGap: false,
//             axisLabel: {
//                 rotate: -90,
//                 textStyle: {
//                     color: "rgba(255,255,255,.6)",
//                     fontSize: 14,
//                 },
//             },
//             axisLine: {
//                 lineStyle: {
//                     color: 'rgba(255,255,255,.1)'
//                 }
//             },
//             data: categories
//         }, {

//             axisPointer: {show: false},
//             axisLine: {show: false},
//             position: 'bottom',
//             offset: 20,

//         }],

//         yAxis: [{
//             type: 'value',
//             axisTick: {show: false},
//             axisLine: {
//                 lineStyle: {
//                     color: 'rgba(255,255,255,.1)'
//                 }
//             },
//             axisLabel: {
//                 formatter: "{value} 人",
//                 textStyle: {
//                     color: "rgba(255,255,255,.6)",
//                     fontSize: 14,
//                 },
//             },
//             splitLine: {
//                 lineStyle: {
//                     color: 'rgba(255,255,255,.1)'
//                 }
//             }
//         }],

//         series: [
//             {
//                 name: '卫生技术人员',
//                 type: 'line',
//                 smooth: true,
//                 symbol: 'circle',
//                 symbolSize: 5,
//                 showSymbol: false,
//                 lineStyle: {
//                     normal: {
//                         color: 'rgba(228, 228, 126, 1)',
//                         width: 2
//                     }
//                 },
//                 areaStyle: {
//                     normal: {
//                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                             offset: 0,
//                             color: 'rgba(228, 228, 126, .2)'
//                         }, {
//                             offset: 1,
//                             color: 'rgba(228, 228, 126, 0)'
//                         }], false),
//                         shadowColor: 'rgba(0, 0, 0, 0.1)',
//                     }
//                 },
//                 itemStyle: {
//                     normal: {
//                         color: 'rgba(228, 228, 126, 1)',
//                         borderColor: 'rgba(228, 228, 126, .1)',
//                         borderWidth: 12
//                     }
//                 },
//                 data: medicalStaffData
//             },
//             {
//                 name: '城市卫生技术人员',
//                 type: 'line',
//                 smooth: true,
//                 symbol: 'circle',
//                 symbolSize: 5,
//                 showSymbol: false,
//                 lineStyle: {
//                     normal: {
//                         color: 'rgba(255, 128, 128, 1)',
//                         width: 2
//                     }
//                 },
//                 areaStyle: {
//                     normal: {
//                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                             offset: 0,
//                             color: 'rgba(255, 128, 128, .2)'
//                         }, {
//                             offset: 1,
//                             color: 'rgba(255, 128, 128, 0)'
//                         }], false),
//                         shadowColor: 'rgba(0, 0, 0, 0.1)',
//                     }
//                 },
//                 itemStyle: {
//                     normal: {
//                         color: 'rgba(255, 128, 128, 1)',
//                         borderColor: 'rgba(255, 128, 128, .1)',
//                         borderWidth: 12
//                     }
//                 },
//                 data: urbanMedicalStaffData
//             },
//             {
//                 name: '农村卫生技术人员',
//                 type: 'line',
//                 smooth: true,
//                 symbol: 'circle',
//                 symbolSize: 5,
//                 showSymbol: false,
//                 lineStyle: {
//                     normal: {
//                         color: 'rgba(0, 0, 255, 1)',
//                         width: 2
//                     }
//                 },
//                 areaStyle: {
//                     normal: {
//                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                             offset: 0,
//                             color: 'rgba(0, 0, 255, .2)'
//                         }, {
//                             offset: 1,
//                             color: 'rgba(0, 0, 255, 0)'
//                         }], false),
//                         shadowColor: 'rgba(0, 0, 0, 0.1)',
//                     }
//                 },
//                 itemStyle: {
//                     normal: {
//                         color: 'rgba(0, 0, 255, 1)',
//                         borderColor: 'rgba(0, 0, 255, .1)',
//                         borderWidth: 12
//                     }
//                 },
//                 data: ruralMedicalStaffData
//             },
//             {
//                 name: '执业(助理)医师',
//                 type: 'line',
//                 smooth: true,
//                 symbol: 'circle',
//                 symbolSize: 5,
//                 showSymbol: false,
//                 lineStyle: {
//                     normal: {
//                         color: 'rgba(255, 255, 0, 1)',
//                         width: 2
//                     }
//                 },
//                 areaStyle: {
//                     normal: {
//                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                             offset: 0,
//                             color: 'rgba(255, 255, 0, .2)'
//                         }, {
//                             offset: 1,
//                             color: 'rgba(255, 255, 0, 0)'
//                         }], false),
//                         shadowColor: 'rgba(0, 0, 0, 0.1)',
//                     }
//                 },
//                 itemStyle: {
//                     normal: {
//                         color: 'rgba(255, 255, 0, 1)',
//                         borderColor: 'rgba(255, 255, 0, .1)',
//                         borderWidth: 12
//                     }
//                 },
//                 data: physiciansData
//             },
//             {
//                 name: '城市执业(助理)医师',
//                 type: 'line',
//                 smooth: true,
//                 symbol: 'circle',
//                 symbolSize: 5,
//                 showSymbol: false,
//                 lineStyle: {
//                     normal: {
//                         color: 'rgba(255, 165, 0, 1)',
//                         width: 2
//                     }
//                 },
//                 areaStyle: {
//                     normal: {
//                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                             offset: 0,
//                             color: 'rgba(255, 165, 0, .2)'
//                         }, {
//                             offset: 1,
//                             color: 'rgba(255, 165, 0, 0)'
//                         }], false),
//                         shadowColor: 'rgba(0, 0, 0, 0.1)',
//                     }
//                 },
//                 itemStyle: {
//                     normal: {
//                         color: 'rgba(255, 165, 0, 1)',
//                         borderColor: 'rgba(255, 165, 0, .1)',
//                         borderWidth: 12
//                     }
//                 },
//                 data: urbanPhysiciansData
//             },
//             {
//                 name: '农村执业(助理)医师',
//                 type: 'line',
//                 smooth: true,
//                 symbol: 'circle',
//                 symbolSize: 5,
//                 showSymbol: false,
//                 lineStyle: {
//                     normal: {
//                         color: 'rgba(255, 192, 203, 1)',
//                         width: 2
//                     }
//                 },
//                 areaStyle: {
//                     normal: {
//                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                             offset: 0,
//                             color: 'rgba(255, 192, 203, .2)'
//                         }, {
//                             offset: 1,
//                             color: 'rgba(255, 192, 203, 0)'
//                         }], false),
//                         shadowColor: 'rgba(0, 0, 0, 0.1)',
//                     }
//                 },
//                 itemStyle: {
//                     normal: {
//                         color: 'rgba(255, 192, 203, 1)',
//                         borderColor: 'rgba(255, 192, 203, .1)',
//                         borderWidth: 12
//                     }
//                 },
//                 data: ruralPhysiciansData
//             },
//             {
//                 name: '注册护士',
//                 type: 'line',
//                 smooth: true,
//                 symbol: 'circle',
//                 symbolSize: 5,
//                 showSymbol: false,
//                 lineStyle: {
//                     normal: {
//                         color: 'rgba(32, 178, 170, 1)',
//                         width: 2
//                     }
//                 },
//                 areaStyle: {
//                     normal: {
//                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                             offset: 0,
//                             color: 'rgba(32, 178, 170, .2)'
//                         }, {
//                             offset: 1,
//                             color: 'rgba(32, 178, 170, 0)'
//                         }], false),
//                         shadowColor: 'rgba(0, 0, 0, 0.1)',
//                     }
//                 },
//                 itemStyle: {
//                     normal: {
//                         color: 'rgba(32, 178, 170, 1)',
//                         borderColor: 'rgba(32, 178, 170, .1)',
//                         borderWidth: 12
//                     }
//                 },
//                 data: nursesData
//             },
//             {
//                 name: '城市注册护士',
//                 type: 'line',
//                 smooth: true,
//                 symbol: 'circle',
//                 symbolSize: 5,
//                 showSymbol: false,
//                 lineStyle: {
//                     normal: {
//                         color: 'rgba(135, 206, 250, 1)',
//                         width: 2
//                     }
//                 },
//                 areaStyle: {
//                     normal: {
//                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                             offset: 0,
//                             color: 'rgba(135, 206, 250, .2)'
//                         }, {
//                             offset: 1,
//                             color: 'rgba(135, 206, 250, 0)'
//                         }], false),
//                         shadowColor: 'rgba(0, 0, 0, 0.1)',
//                     }
//                 },
//                 itemStyle: {
//                     normal: {
//                         color: 'rgba(135, 206, 250, 1)',
//                         borderColor: 'rgba(135, 206, 250, .1)',
//                         borderWidth: 12
//                     }
//                 },
//                 data: urbanNursesData
//             },
//             {
//                 name: '农村注册护士',
//                 type: 'line',
//                 smooth: true,
//                 symbol: 'circle',
//                 symbolSize: 5,
//                 showSymbol: false,
//                 lineStyle: {
//                     normal: {
//                         color: 'rgba(173, 216, 230, 1)',
//                         width: 2
//                     }
//                 },
//                 areaStyle: {
//                     normal: {
//                         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                             offset: 0,
//                             color: 'rgba(173, 216, 230, .2)'
//                         }, {
//                             offset: 1,
//                             color: 'rgba(173, 216, 230, 0)'
//                         }], false),
//                         shadowColor: 'rgba(0, 0, 0, 0.1)',
//                     }
//                 },
//                 itemStyle: {
//                     normal: {
//                         color: 'rgba(173, 216, 230, 1)',
//                         borderColor: 'rgba(173, 216, 230, .1)',
//                         borderWidth: 12
//                     }
//                 },
//                 data: ruralNursesData
//             }
//         ]
//     };

//     // 使用刚指定的配置项和数据显示图表。
//     myChart.setOption(option);
//     window.addEventListener("resize", function () {
//         myChart.resize();
//     });
// }
    function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echarts3'));
      
        var categories = ['2019年', '2020年', '2021年', '2022年', '2023年'];
      
        var medicalStaffData = [1015.4, 1124.42, 1165.79, 1248.83, 1295]; // 卫生技术人员数(万人)
        var neonatalMortalityData = [3.5, 3.4, 3.1, 3.1, 2.8]; // 新生儿死亡率(‰)
        var infantMortalityData = [5.6, 5.4, 4.9, 4.5, 4.5]; // 婴儿死亡率(‰)
        var under5MortalityData = [7.8, 7.5, 6.8, 6.8, 6.2]; // 5岁以下儿童死亡率(‰)
        var maternalMortalityData = [17.8, 16.9, 16.1, 15.7, 15.1]; // 孕产妇死亡率(1/10万)
    
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {type: 'cross'}
            },
            grid: {
                top: "20%",
                right: "50",
                bottom: "20",
                left: "30",
            },
            legend: {
                data: ['卫生技术人员数', '新生儿死亡率', '婴儿死亡率', '5岁以下儿童死亡率', '孕产妇死亡率'],
                right: 'center', width: '100%',
                textStyle: {
                    color: "#fff"
                },
                itemWidth: 12,
                itemHeight: 10,
            },
            xAxis: [
                {
                    type: "category",
                    data: categories,
                    axisLine: {lineStyle: {color: "rgba(255,255,255,.1)"}},
                    axisLabel: {textStyle: {color: "rgba(255,255,255,.7)", fontSize: '14'}}
                },
            ],
            yAxis: [
                {
                    type: "value",
                    name: "卫生技术人员数(万人)",
                    axisTick: {show: false},
                    splitLine: {show: false},
                    axisLabel: {
                        show: true,
                        fontSize: 9,
                        color: "rgba(255,255,255,.6)"
                    },
                    axisLine: {
                        min: 0,
                        max: 1500,
                        lineStyle: {color: 'rgba(255,255,255,.1)'}
                    }
                },
    {
                    type: "value",
                    name: "死亡率(‰)",
                    show: true,
                    axisLabel: {
                        show: true,
                        fontSize: 10,
                        formatter: "{value} %",
                        color: "rgba(255,255,255,.6)"
                    },
                    axisTick: {show: false},
                    axisLine: {lineStyle: {color: 'rgba(255,255,255,.1)'}},
                    splitLine: {show: true, lineStyle: {color: 'rgba(255,255,255,.1)'}}
         } ],
            series: [
                {
                    name: '卫生技术人员数',
                    type: 'bar',
                    data: medicalStaffData,
                    barWidth: "15%",
                    itemStyle: {
                        normal: {
                            barBorderRadius: 15,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#8bd46e'
                            }, {
                                offset: 1,
                                color: '#09bcb7'
                            }])
                        }
                    },
                    barGap: "0.2"
                },
                {
                    name: '新生儿死亡率',
                    type: 'line',
                    yAxisIndex: 1,
                    data: neonatalMortalityData,
                    lineStyle: {
                        normal: {
                            width: 2
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: "#86d370",
                        }
                    },
                },
                {
                    name: '婴儿死亡率',
                    type: 'line',
                    yAxisIndex: 1,
                    data: infantMortalityData,
                    lineStyle: {
                        normal: {
                            width: 2
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: "#fbc30d",
                        }
                    },
                },
                {
                    name: '5岁以下儿童死亡率',
                    type: 'line',
                    yAxisIndex: 1,
                    data: under5MortalityData,
                    lineStyle: {
                        normal: {
                            width: 2
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: "#fbc30d",
                        }
                    },
                },
                {
                    name: '孕产妇死亡率',
                    type: 'line',
                    yAxisIndex: 1,
                    data: maternalMortalityData,
                    lineStyle: {
                        normal: {
                            width: 2
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: "#fbc30d",
                        }
                    },
                }
            ]
        };
      
        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }
    function echarts_5() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('echarts5'));

var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow' }
    },
    grid: {
        top: "15%",
        right: "10%",
        bottom: "20",
        left: "10%"
    },
    legend: {
        data: ['入院人数（万人）', '医疗卫生机构出院人数（万人）', '医疗卫生机构住院病人手术人次（万人次）'],
        right: 'center',
        top: 0,
        textStyle: {
            color: "#fff"
        },
        itemWidth: 12,
        itemHeight: 10,
    },
    xAxis: [
        {
            type: "category",
            data: ['2019', '2020', '2021', '2022', '2023'],
            axisLine: { lineStyle: { color: "rgba(255,255,255,.1)" } },
            axisLabel: {
                textStyle: { color: "rgba(255,255,255,.7)", fontSize: '14' }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '人数（万人）',
            splitLine: { show: false },
            axisTick: { show: false },
            position: 'left',
            axisLine: { lineStyle: { color: 'rgba(255,255,255,.1)' } },
            axisLabel: { formatter: '{value}', color: "rgba(255,255,255,.7)", fontSize: '10' }
        }
    ],
    series: [
        {
            name: '入院人数（万人）',
            type: 'bar',
            data: [26596.12, 23012.8, 24731.8, 24686.21, 30187.28],
            barWidth: "20%",
            itemStyle: {
                normal: {
                    barBorderRadius: 15,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#fccb05'
                    }, {
                        offset: 1,
                        color: '#f5804d'
                    }])
                }
            },
            barGap: "0"
        },
        {
            name: '医疗卫生机构出院人数（万人）',
            type: 'line',
            data: [26502.66, 22980.6, 24642.1, 24484.76, 30126.25],
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            itemStyle: {
                normal: {
                    color: "blue"
                }
            },
            smooth: true
        },
        {
            name: '医疗卫生机构住院病人手术人次（万人次）',
            type: 'line',
            data: [6930.44,6663.74,8103.1,8271.75,9638.74],
            lineStyle: {
                normal: {
                    width: 2
                }
            },
            itemStyle: {
                normal: {
                    color: "#ff3300"
                }
            },
            smooth: true
        }
    ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

window.addEventListener("resize", function () {
    myChart.resize();
});
}
function echarts_4() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echarts4'));

    option = {

        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ['社区卫生服务中心(站)诊疗人次数(亿人次)', '卫生院诊疗人次数(亿人次)', '街道卫生院诊疗人次数(亿人次)', '乡镇卫生院诊疗人次数(亿人次)', '门诊部诊疗人次数(亿人次)'],
          right:"center",
          top: '0', 
          textStyle: {
              color: "#fff"
          },
          itemWidth: 12,
          itemHeight: 10,
        },
        grid: {
          left: '0',
          right: '20',
          bottom: '40',
          top: '15%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          data: ['2019年', '2020年', '2021年', '2022年', '2023年'],
          axisLine: {
            lineStyle: {
              color: 'white'
            }
          },
          axisLabel: {
            textStyle: {
              color: "rgba(255,255,255,.6)",
              fontSize: 14,
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(255,255,255,0.3)'
            }
          },
        },
  
        yAxis: {
          type: 'value',
          name: '亿人次',
          splitNumber: 4,
          axisTick: {show: false},
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.1)'
            }
          },
          axisLabel: {textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 14,
          }},
          axisLine: {show:false},
        },
  
        series: [{
          name: '社区卫生服务中心(站)诊疗人次数(亿人次)',
          type: 'bar',
          stack: 'a',
          barWidth: '30', barGap: 0,
          itemStyle: {
            normal: {
              color: '#8bd46e', }
          },
          data: [8.59, 7.55, 8.36, 8.33, 10.35]
        },
        {
          name: '卫生院诊疗人次数(亿人次)',
          type: 'bar',
          stack: 'a',
          barWidth: '30', barGap: 0,
          itemStyle: {
            normal: {
              color: '#f5804d',
              barBorderRadius: 0, }
          },
          data: [11.86, 11.07, 11.74, 12.23, 13.27]
        },
        {
          name: '街道卫生院诊疗人次数(亿人次)',
          type: 'bar',
          stack: 'a',
          barWidth: '30', barGap: 0,
          itemStyle: {
            normal: {
              color: '#248ff7',
              barBorderRadius: 0, }
          },
          data: [0.12, 0.12, 0.14, 0.16, 0.18]
        },
        {
          name: '乡镇卫生院诊疗人次数(亿人次)',
          type: 'bar',
          stack: 'a',
          barWidth: '30', barGap: 0,
          itemStyle: {
            normal: {
              color: '#ffa500',
              barBorderRadius: 0, }
          },
          data: [11.75, 10.95, 11.61, 12.08, 13.09]
        },
        {
          name: '门诊部诊疗人次数(亿人次)',
          type: 'bar',
          stack: 'a',
          barWidth: '30', barGap: 0,
          itemStyle: {
            normal: {
              color: '#4169e1',
              barBorderRadius: 0, }
          },
          data: [1.56, 1.57, 1.87, 1.94, 2.54]
        }
      ]
      };
  
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
      window.addEventListener("resize",function(){
          myChart.resize();
      });
  }
  function echarts_6() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echarts6'));

    var years = {
        "2019": {
            "卫生总费用": 65841.39,
            "政府卫生支出": 18016.95,
            "社会卫生支出": 29150.57,
            "个人现金卫生支出": 18673.87,
            "人均卫生费用": 4669.34
        },
        "2020": {
            "卫生总费用": 72175,
            "政府卫生支出": 21941.9,
            "社会卫生支出": 30273.67,
            "个人现金卫生支出": 19959.43,
            "人均卫生费用": 5112.34
        },
        "2021": {
            "卫生总费用": 76844.99,
            "政府卫生支出": 20676.06,
            "社会卫生支出": 34963.26,
            "个人现金卫生支出": 21205.67,
            "人均卫生费用": 5439.97
        },
        "2022": {
            "卫生总费用": 85327.49,
            "政府卫生支出": 24040.89,
            "社会卫生支出": 38345.67,
            "个人现金卫生支出": 22940.94,
            "人均卫生费用": 6044.09
        },
        "2023": {
            "卫生总费用": 90575.81,
            "政府卫生支出": 24147.89,
            "社会卫生支出": 41676.8,
            "个人现金卫生支出": 24751.13,
            "人均卫生费用": 6425.32
        }
    };

    function updateChart() {
        var year = document.getElementById('yearSelect').value;
        var data = years[year];

        var option = {
            title: {
                subtext: '总体',
                x: 'center',
                y: '40%',
                textStyle: {
                    color: '#fff',
                    fontSize: 22,
                    lineHeight: 10,
                },
                subtextStyle: {
                    color: '#90979c',
                    fontSize: 16,
                    lineHeight: 10,
                },
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            visualMap: {
                show: false,
                min: 0,
                max: 90000,
                inRange: {
                    // colorLightness: [0, 1]
                }
            },
            series: [{
                name: '卫生费用',
                type: 'pie',
                radius: ['50%', '70%'],
                center: ['50%', '50%'],
                color: ['rgb(131,249,103)', '#FBFE27', '#FE5050', '#1DB7E5'],
                data: [
                    { "value": data["卫生总费用"], "name": "卫生总费用" },
                    { "value": data["政府卫生支出"], "name": "政府卫生支出" },
                    { "value": data["社会卫生支出"], "name": "社会卫生支出" },
                    { "value": data["个人现金卫生支出"], "name": "个人现金卫生支出" },
                    { "value": data["人均卫生费用"], "name": "人均卫生费用" }
                ].sort(function(a, b) {
                    return a.value - b.value;
                }),
                roseType: 'radius',
                label: {
                    normal: {
                        formatter: ['{c|{c}亿元}', '{b|{b}}'].join('\n'),
                        rich: {
                            c: {
                                color: 'rgb(241,246,104)',
                                fontSize: 14,
                                fontWeight: 'bold',
                                lineHeight: 5
                            },
                            b: {
                                color: 'rgb(98,137,169)',
                                fontSize: 14,
                                height: 44
                            },
                        },
                    }
                },
                labelLine: {
                    normal: {
                        lineStyle: {
                            color: 'rgb(98,137,169)',
                        },
                        smooth: 0.2,
                        length: 10,
                        length2: 20,
                    }
                }
            }]
        };

        myChart.setOption(option);
    }

    // 初始化图表
    updateChart();

    // 绑定事件
    document.getElementById('yearSelect').addEventListener('change', updateChart);

    // 监听窗口大小变化
    window.addEventListener("resize", function () {
        myChart.resize();
    });
}

    // function pe01() {
    //     // 基于准备好的dom，初始化echarts实例
    //     var myChart = echarts.init(document.getElementById('pe01'));
    //     var txt=81
    //     option = {
    //         title: {
    //           text: txt+'%',
    //           x: 'center',
    //          y: 'center',
    //           textStyle: {
    //             fontWeight: 'normal',
    //             color: '#fff',
    //             fontSize: '18'
    //           }
    //         },
    //         color:'rgba(255,255,255,.3)',
         
    //         series: [{
    //           name: 'Line 1',
    //           type: 'pie',
    //           clockWise: true,
    //           radius: ['65%', '80%'],
    //           itemStyle: {
    //             normal: {
    //               label: {
    //                 show: false
    //               },
    //               labelLine: {
    //                 show: false
    //               }
    //             }
    //           },
    //           hoverAnimation: false,
    //           data: [{
    //             value: txt,
    //             name: '已使用',
    //             itemStyle: {
    //               normal: {
    //                 color:'#eaff00',
    //                 label: {
    //                   show: false
    //                 },
    //                 labelLine: {
    //                   show: false
    //                 }
    //               }
    //             }
    //           }, {
    //             name: '未使用',
    //             value: 100-txt
    //           }]
    //         }]
    //     };

    //     // 使用刚指定的配置项和数据显示图表。
    //     myChart.setOption(option);
    //     window.addEventListener("resize",function(){
    //         myChart.resize();
    //     });
    // }

    // function pe02() {
    //     // 基于准备好的dom，初始化echarts实例
    //     var myChart = echarts.init(document.getElementById('pe02'));
    //     var txt=17
    //     option = {
    //         title: {
    //           text: txt+'%',
    //           x: 'center',
    //          y: 'center',
    //           textStyle: {
    //             fontWeight: 'normal',
    //             color: '#fff',
    //             fontSize: '18'
    //           }
    //         },
    //         color:'rgba(255,255,255,.3)',
         
    //         series: [{
    //           name: 'Line 1',
    //           type: 'pie',
    //           clockWise: true,
    //           radius: ['65%', '80%'],
    //           itemStyle: {
    //             normal: {
    //               label: {
    //                 show: false
    //               },
    //               labelLine: {
    //                 show: false
    //               }
    //             }
    //           },
    //           hoverAnimation: false,
    //           data: [{
    //             value: txt,
    //             name: '已使用',
    //             itemStyle: {
    //               normal: {
    //                 color:'#ea4d4d',
    //                 label: {
    //                   show: false
    //                 },
    //                 labelLine: {
    //                   show: false
    //                 }
    //               }
    //             }
    //           }, {
    //             name: '未使用',
    //             value: 100-txt
    //           }]
    //         }]
    //     };

    //     // 使用刚指定的配置项和数据显示图表。
    //     myChart.setOption(option);
    //     window.addEventListener("resize",function(){
    //         myChart.resize();
    //     });
    // }
    // function pe03() {
    //     // 基于准备好的dom，初始化echarts实例
    //     var myChart = echarts.init(document.getElementById('pe03'));
    //     var txt=2
    //     option = {
    //         title: {
    //           text: txt+'%',
    //           x: 'center',
    //          y: 'center',
    //           textStyle: {
    //             fontWeight: 'normal',
    //             color: '#fff',
    //             fontSize: '18'
    //           }
    //         },
    //         color:'rgba(255,255,255,.3)',
         
    //         series: [{
    //           name: 'Line 1',
    //           type: 'pie',
    //           clockWise: true,
    //           radius: ['65%', '80%'],
    //           itemStyle: {
    //             normal: {
    //               label: {
    //                 show: false
    //               },
    //               labelLine: {
    //                 show: false
    //               }
    //             }
    //           },
    //           hoverAnimation: false,
    //           data: [{
    //             value: txt,
    //             name: '已使用',
    //             itemStyle: {
    //               normal: {
    //                 color:'#395ee6',
    //                 label: {
    //                   show: false
    //                 },
    //                 labelLine: {
    //                   show: false
    //                 }
    //               }
    //             }
    //           }, {
    //             name: '未使用',
    //             value: 100-txt
    //           }
    //         ]
    //         }]
    //     };

    //     // 使用刚指定的配置项和数据显示图表。
    //     myChart.setOption(option);
    //     window.addEventListener("resize",function(){
    //         myChart.resize();
    //     });
    // }
})



		
		
		


		



















