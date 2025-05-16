 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {
    echarts_1();
echarts_4()
echarts_31()
function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
     var data = [
        { title: '**省' },
        ['三甲医院', '社区卫生中心'],
        [
            { name: '糖尿病控制达标率', max: 100 },
            { name: '抗生素合理使用率', max: 100 },
            { name: '患者满意度', max: 100 }
        ],
        [68, 82, 91], // 三甲医院的数据
        [41, 54, 76]  // 社区卫生中心的数据
    ];

    var option = {
        legend: {
            data: ['三甲医院', '社区卫生中心'],
            bottom: 10,
            textStyle: {
                color: '#fff'
            }
        },
        
        color: ['#9DD060', '#35C96E', '#4DCEF8'],
        tooltip: {},
        radar: {
            center: ['50%', '50%'],
            radius: ["25%", "70%"],
            name: {
                textStyle: {
                    color: '#72ACD1'
                }
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.2)',
                    width: 2
                }
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,0.2)',
                    width: 1,
                    type: 'dotted'
                }
            },
            splitArea: {
                areaStyle: {
                    color: ['rgba(255,255,255,.1)', 'rgba(255,255,255,0)']
                }
            },
            indicator: data[2]
        },
        series: [{
            name: '',
            type: 'radar',
            data: [
                {
                    areaStyle: {
                        normal: {
                            opacity: 0.3,
                        }
                    },
                    value: data[3],
                    name: data[1][0]
                },
                {
                    areaStyle: {
                        normal: {
                            opacity: 0.3,
                        }
                    },
                    value: data[4],
                    name: data[1][1]
                }
            ]
        }]
    };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));
        var myChart2 = echarts.init(document.getElementById('echart3'));
        option = {
            // title: {
            //     text: '诊疗量占比及差值变化趋势（2019-2023）',
            //     left: 'center',
            //     textStyle: {
            //         color: '#fff',
            //         fontSize: 18
            //     }
            // },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function (params) {
                    var htmlStr = params[0].name + '<br/>';
                    params.forEach(function (param) {
                        htmlStr += param.seriesName + ' : ' + param.data + '%<br/>';
                    });
                    if (params.length > 2) {
                        htmlStr += '差值变化趋势 : ' + params[2].data + '<br/>';
                    }
                    return htmlStr;
                }
            },
            legend: {
                data: ['全国基层占比', '三甲医院占比', '绝对差值（三甲-基层）'],
                top: '2%',
                textStyle: {
                    color: "rgba(255,255,255,.5)",
                    fontSize: '12'
                },
                itemWidth: 12,
                itemHeight: 12,
                itemGap: 35
            },
            grid: {
                left: '0%',
                top: '40px',
                right: '0%',
                bottom: '0%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['2019', '2020', '2021', '2022', '2023'],
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    show: true,
                    splitNumber: 5,
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '14'
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    show: true,
                    formatter: '{value} %',
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: '14'
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }],
            series: [
                {
                    name: '全国基层占比',
                    type: 'bar',
                    data: [51.8, 53.6, 54.1, 54.9, 55.2],
                    barWidth: '20%', // 柱子宽度
                    itemStyle: {
                        normal: {
                            color: '#2f89cf',
                            opacity: 1,
                            barBorderRadius: 5
                        }
                    }
                },
                {
                    name: '三甲医院占比',
                    type: 'bar',
                    data: [31.2, 30.5, 29.8, 29.1, 28.7],
                    barWidth: '20%', // 柱子宽度
                    itemStyle: {
                        normal: {
                            color: '#62c98d',
                            opacity: 1,
                            barBorderRadius: 5
                        }
                    }
                },
                {
                    name: '绝对差值（三甲-基层）',
                    type: 'line',
                    data: [-20.6, -23.1, -24.3, -25.8, -26.5],
                    itemStyle: {
                        normal: {
                            color: '#e0c828',
                            opacity: 1
                        }
                    }
                }
            ]
        };
    
// option2 = {
//     //  backgroundColor: '#00265f',
//       tooltip: {
//           trigger: 'axis',
//           axisPointer: {
//               type: 'shadow'
//           }
//       },
//       legend: {
//           data: ['2017年', '2018年'],
//           top:'5%',
//           textStyle: {
//               color: "#fff",
//               fontSize: '12',
  
//           },
   
//           itemGap: 35
//       },
//       grid: {
//           left: '0%',
//           top:'40px',
//           right: '0%',
//           bottom: '0',
//          containLabel: true
//       },
//       xAxis: [{
//           type: 'category',
//                 data: ['1月', '2月', '3月', '4月', '5月', '6月'],
//           axisLine: {
//               show: true,
//            lineStyle: {
//                   color: "rgba(255,255,255,.1)",
//                   width: 1,
//                   type: "solid"
//               },
//           },
//           axisTick: {
//               show: false,
//           },
//           axisLabel:  {
//                   interval: 0,
//                  // rotate:50,
//                   show: true,
//                   splitNumber: 5,
//                   textStyle: {
//                        color: "rgba(255,255,255,.6)",
//                       fontSize: '12',
//                   },
//               },
//       }],
//       yAxis: [{
//           type: 'value',
//           axisLabel: {
//              //formatter: '{value} %'
//               show:true,
//                textStyle: {
//                        color: "rgba(255,255,255,.6)",
//                       fontSize: '12',
//                   },
//           },
//           axisTick: {
//               show: false,
//           },
//           axisLine: {
//               show: true,
//               lineStyle: {
//                   color: "rgba(255,255,255,.1	)",
//                   width: 1,
//                   type: "solid"
//               },
//           },
//           splitLine: {
//               lineStyle: {
//                  color: "rgba(255,255,255,.1)",
//               }
//           }
//       }],
//       series: [{
//           name: '2017年',
//           type: 'line',
//    smooth: true,
//           data: [2, 6, 3, 8, 5, 8],
  
//           itemStyle: {
//               normal: {
//                   color:'#2f89cf',
//                   opacity: 1,
                  
//                   barBorderRadius: 5,
//               }
//           }
//       }, {
//           name: '2018年',
//           type: 'line',
//            smooth: true,
//           data: [5, 2, 6, 4, 5, 12],
//           barWidth:'15',
//          // barGap: 1,
//           itemStyle: {
//               normal: {
//                   color:'#62c98d',
//                   opacity: 1,
//                   barBorderRadius: 5,
//               }
//           }
//       },
//       ]
//   };
option2 = {
    // title: {
    //     text: '门诊次均费用、药占比和检查费占比（2018-2023）',
    //     left: 'center'
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function (params) {
            var htmlStr = params[0].name + '<br/>';
            params.forEach(function (param) {
                htmlStr += param.seriesName + ' : ' + param.data + '<br/>';
            });
            return htmlStr;
        }
    },
    legend: {
        data: ['门诊次均费用（元）', '药占比（%）', '检查费占比（%）'],
        top: '5%',
        textStyle: {
            color: "#fff",
            fontSize: '12'
        },
        itemGap: 35
    },
    grid: {
        left: '10%',
        top: '35%', // 增加了顶部空间，使图表下移
        right: '0%',
        bottom: '0',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: [ '2019', '2020', '2021', '2022', '2023'],
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.6)",
                width: 1,
                type: "solid"
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            show: true,
            splitNumber: 5,
            textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: '12'
            }
        }
    },
    yAxis: [
        {
            type: 'value',
            name: '门诊次均费用（元）',
            position: 'left',
            axisLabel: {
                formatter: '{value} 元'
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.6)",
                    width: 1,
                    type: "solid"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        },
        {
            type: 'value',
            name: '药占比（%）',
            position: 'right',
            axisLabel: {
                formatter: '{value} %',
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.6)",
                    width: 1,
                    type: "solid"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        },
        {
            type: 'value',
            name: '检查费占比（%）',
            position: 'right',
            offset: 80,
            axisLabel: {
                formatter: '{value} %'
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 1,
                    type: "solid"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }
    ],
    series: [
        {
            name: '门诊次均费用（元）',
            type: 'line',
            yAxisIndex: 0,
            smooth: true,
            data: [ 295, 320, 350, 380, 410],
            itemStyle: {
                normal: {
                    color: '#2f89cf',
                    opacity: 1,
                    barBorderRadius: 5
                }
            }
        },
        {
            name: '药占比（%）',
            type: 'line',
            yAxisIndex: 1,
            smooth: true,
            data: [ 43.8, 42.1, 39.8, 37.5, 35.2],
            itemStyle: {
                normal: {
                    color: '#62c98d',
                    opacity: 1,
                    barBorderRadius: 5
                }
            }
        },
        {
            name: '检查费占比（%）',
            type: 'line',
            yAxisIndex: 2,
            smooth: true,
            data: [ 23.5, 25.3, 26.7, 28.2, 29.5],
            itemStyle: {
                normal: {
                    color: '#f5a623',
                    opacity: 1,
                    barBorderRadius: 5
                }
            }
        }
    ]
};



// option2 = {
//     title: {
//         text: '广东省疫苗接种率阶段性数据（2019-2023）',
//         left: 'center'
//     },
//     tooltip: {
//         trigger: 'axis',
//         formatter: function (params) {
//             var htmlStr = params[0].name + '<br/>';
//             for (var i = 0; i < params.length; i++) {
//                 htmlStr += params[i].seriesName + ' : ' + params[i].data + '%<br/>';
//             }
//             return htmlStr;
//         }
//     },
//     legend: {
//         data: ['接种率'],
//         left: 'left'
//     },
//     xAxis: {
//         type: 'category',
//         data: [
//             '2020-1', '2021-3', '2021-6', '2021-12', '2022-3', '2022-9', '2022-12', '2023-6', '2023-12'
//         ],
//         axisLabel: {
//             formatter: function (value) {
//                 return value.split('-')[0] + '\n' + value.split('-')[1];
//             }
//         },
//         axisLine: {
//             show: true,
//             lineStyle: {
//                 color: "rgba(255,255,255,.1)",
//                 width: 1,
//                 type: "solid"
//             }
//         },
//         axisTick: {
//             show: false
//         }
//     },
//     yAxis: {
//         type: 'value',
//         min: 0,
//         max: 100,
//         interval: 20,
//         axisLabel: {
//             formatter: '{value} %'
//         },
//         axisLine: {
//             show: true,
//             lineStyle: {
//                 color: "rgba(255,255,255,.1)",
//                 width: 1,
//                 type: "solid"
//             }
//         },
//         splitLine: {
//             lineStyle: {
//                 color: "rgba(255,255,255,.1)"
//             }
//         }
//     },
//     series: [
//         {
//             name: '接种率',
//             type: 'line',
//             smooth: true,
//             data: [0, 7.5, 47.5, 77.5, 85, 90, 92, 88, 86],
//             itemStyle: {
//                 normal: {
//                     color: '#2f89cf',
//                     opacity: 1,
//                     barBorderRadius: 5
//                 }
//             }
//         }
//     ]
// };



// // 标注关键事件
// var events = [
//     {time: '2020-1', event: '广东报告全国首例境外输入病例，启动紧急防控'},
//     {time: '2021-3', event: '重点人群（医护、口岸工作者）接种启动'},
//     {time: '2021-6', event: '广州爆发Delta疫情，全民接种加速'},
//     {time: '2021-12', event: '完成全程接种目标，深圳、广州覆盖率超85%'},
//     {time: '2022-3', event: '推进老年人接种，深圳试点吸入式疫苗'},
//     {time: '2022-9', event: '香港通关需求推动加强针接种'},
//     {time: '2022-12', event: '奥密克戎疫情后补种率提升'},
//     {time: '2023-6', event: '接种需求下降，转向重点人群补种'},
//     {time: '2023-12', event: '与流感疫苗同步接种策略实施'}
// ];

// events.forEach(function (item) {
//     var timeIndex = option2.xAxis.data.indexOf(item.time);
//     if (timeIndex !== -1) {
//         myChart.dispatchAction({
//             type: 'showTip',
//             seriesIndex: 0,
//             name: item.time
//         });
//         myChart.getZr().storage.getDisplayList().forEach(function (el) {
//             if (el.type === 'text' && el.style.text === item.time) {
//                 el.style.text = item.event;
//             }
//         });
//     }
// });


        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option2);
        myChart2.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_31() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb01'));
	var myChart2 = echarts.init(document.getElementById('fb02')); 
	var myChart3 = echarts.init(document.getElementById('fb03'));
	var myChart4 = echarts.init(document.getElementById('fb04')); 
	var myChart5 = echarts.init(document.getElementById('myd1')); 

	var myChart7 = echarts.init(document.getElementById('sysx')); 
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
            position: function(p) {
                // 其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        legend: {
            orient: 'vertical',
            top: '25%',
            right: 0,
            itemWidth: 10,
            itemHeight: 10,
            data: ['18-25岁', '26-35岁', '36-45岁', '46-55岁', '56岁以上'],
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: '12',
            }
        },
        series: [
            {
                name: '年龄分布',
                type: 'pie',
                center: ['35%', '50%'],
                radius: ['40%', '50%'],
                color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828', '#e58c00'],
                label: { show: false },
                labelLine: { show: false },
                data:[
                    { value: 15.8, name: '18-25岁' },  // Z世代渗透率+3.5%
                    { value: 36.4, name: '26-35岁' },  // 职场主力微降2.3%
                    { value: 31.2, name: '36-45岁' },  // 家庭健康需求增长
                    { value: 12.6, name: '46-55岁' },  // 中年群体保持稳定
                    { value: 4.0,  name: '56岁以上' }  // 适老化改造见效
                ]
            }
        ]
    };
    option2 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            top: '25%',
            right: '8%',
            itemWidth: 10,
            itemHeight: 10,
            data: ['2019年', '2020年', '2021年', '2022年', '2023年'],
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: '12',
            }
        },
        series: [
            {
                name: '互联网诊疗占比',
                type: 'pie',
                center: ['35%', '50%'],
                radius: ['40%', '50%'],
                color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828', '#e58c00'],
                label: { show: false },
                labelLine: { show: false },
               
                data: [
                    {value: 0.35, name: '2019年'},  // 试点医院12%
                    {value: 2.14, name: '2020年'},  // 疫情催化期
                    {value: 3.75, name: '2021年'},  // 医保在线支付
                    {value: 4.82, name: '2022年'},  // 服务标准化
                    {value: 6.91, name: '2023年'}   // AI辅助诊断普及
                ]
            }
        ]
    };
   option3 = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function (params) {
            var htmlStr = params[0].name + '<br/>';
            params.forEach(function (param) {
                htmlStr += param.seriesName + ' : ' + param.value + '%<br/>';
            });
            return htmlStr;
        }
    },
    legend: {
        orient: 'horizontal', // 设置图例为水平布局
        bottom: '0%', // 将图例放置在底部
        data: ['城市社区', '农村乡镇', '全国平均'],
        top: '5%',
        textStyle: {
            color: "#fff",
            fontSize: '12'
        },
        
        itemGap: 35
    },
    grid: {
        left: '10%', // 调整左边距
        top: '80px', // 调整顶部距
        right: '0%', // 调整右边距
        bottom: '0%', // 调整底部距
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.6)",
                width: 1,
                type: "solid"
            }
        },
        axisLabel: {
            formatter: '{value} %',
            rotate: 45, // 旋转标签45度
            interval: 0, // 显示所有标签
            textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: '12'
            }
        },
        splitLine: {
            show: false // 隐藏分隔线
        }
    },
    yAxis: {
        type: 'category',
        data: ['健康档案更新率', '年度体检率', '慢性病规范管理率'],
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.6)",
                width: 1,
                type: "solid"
            }
        },
        axisLabel: {
            interval: 0,
            show: true,
            splitNumber: 5,
            textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: '12'
            }
        },
        splitLine: {
            show: false // 隐藏分隔线
        }
    },
    series: [
        {
            name: '城市社区',
            type: 'bar',
            stack: '健康管理率',
            data: [68.3, 59.7, 51.2],
            color: '#62c98d'
        },
        {
            name: '农村乡镇',
            type: 'bar',
            stack: '健康管理率',
            data: [42.1, 37.5, 29.8],
            color: '#f5a623'
        },
        {
            name: '全国平均',
            type: 'bar',
            stack: '健康管理率',
            data: [55.2, 48.6, 40.5],
            color: '#2f89cf'
        }
    ]
};
    option4 = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            top: '0%',
            right: '0%',
            itemWidth: 10,
            itemHeight: 10,
            data: ['新生儿访视 - 城市' ,'新生儿访视 - 农村','1岁内4次体检 - 城市','1岁内4次体检 - 农村','3-6岁年度体检 - 城市','3-6岁年度体检 - 农村'],
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: '12',
            }
        },
        series: [
            {
                name: '服务项目覆盖率',
                type: 'pie',
                center: ['25%', '50%'],
                radius: ['40%', '50%'],
                color: ['#62c98d', '#2f89cf', '#4cb9cf', '#e0c828', '#e58c00','#ff4d4f'],
                label: { show: false },
                labelLine: { show: false },
                data: [
                    { value: 92.1, name: '新生儿访视 - 城市' },
                    { value: 85.3, name: '新生儿访视 - 农村' },
                    { value: 78.6, name: '1岁内4次体检 - 城市' },
                    { value: 63.4, name: '1岁内4次体检 - 农村' },
                    { value: 71.2, name: '3-6岁年度体检 - 城市' },
                    { value: 54.9, name: '3-6岁年度体检 - 农村' }
                ]
            }
        ]
    };
option5 = {
    // title: {
    //     text: '全国住院费用实际报销比例（2019-2023）',
    //     left: 'center'
    // },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function (params) {
            var htmlStr = params[0].name + '<br/>';
            params.forEach(function (param) {
                htmlStr += param.seriesName + ' : ' + param.data + '%<br/>';
            });
            return htmlStr;
        }
    },
    legend: {
        data: ['职工医保实际报销比', '城乡居民医保实际报销比', '政策范围内报销比（职工）', '政策范围内报销比（居民）'],
        top: '5%',
        textStyle: {
            color: "#fff",
            fontSize: '12'
        },
        itemGap: 35
    },
    grid: {
        left: '0%',
        top: '80px',
        right: '0%',
        bottom: '0',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['2019', '2020', '2021', '2022', '2023'],
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.6)",
                width: 1,
                type: "solid"
            }
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            interval: 0,
            show: true,
            splitNumber: 5,
            textStyle: {
                color: "rgba(255,255,255,.6)",
                fontSize: '12'
            }
        }
    },
    yAxis: [
        {
            type: 'value',
            name: '报销比例（%）',
            position: 'left',
            axisLabel: {
                formatter: '{value} %'
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: "rgba(255,255,255,.6)",
                    width: 1,
                    type: "solid"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }
    ],
    series: [
        {
            name: '职工医保实际报销比',
            type: 'bar',
            data: [71.2, 72.8, 73.0, 73.4, 73.1],
            itemStyle: {
                normal: {
                    color: '#2f89cf',
                    opacity: 1,
                    barBorderRadius: 5
                }
            }
        },
        {
            name: '城乡居民医保实际报销比',
            type: 'bar',
            data: [53.6, 55.1, 56.3, 56.5, 56.7],
            itemStyle: {
                normal: {
                    color: '#62c98d',
                    opacity: 1,
                    barBorderRadius: 5
                }
            }
        },
        {
            name: '政策范围内报销比（职工）',
            type: 'bar',
            data: [83.5, 84.3, 84.9, 85.1, 85.2],
            itemStyle: {
                normal: {
                    color: '#4cb9cf',
                    opacity: 1,
                    barBorderRadius: 5
                }
            }
        },
        {
            name: '政策范围内报销比（居民）',
            type: 'bar',
            data: [66.8, 68.2, 69.0, 69.2, 69.3],
            itemStyle: {
                normal: {
                    color: '#e0c828',
                    opacity: 1,
                    barBorderRadius: 5
                }
            }
        }
    ]
};


option7 = {
    title: {
        text: '广东省新冠疫苗接种率的阶段性数据（2019-2023年）',
        left: 'center',
        textStyle: {
            color: '#fff',
            fontSize: 15
              // 设置标题颜色为白色
        }
        
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            var htmlStr = params[0].name + '<br/>';
            for (var i = 0; i < params.length; i++) {
                htmlStr += params[i].seriesName + ' : ' + params[i].data + '%<br/>';
            }
            // 添加关键事件的描述
            var event = events.find(e => e.time === params[0].name);
            if (event) {
                htmlStr += '<br/><strong>事件：</strong>' + event.event;
            }
            return htmlStr;
        }
    },
    legend: {
        data: ['接种率'],
        left: 'left'
    },
    grid: {
        left: '0%',
        top: '40px',
        right: '0%',
        bottom: '0',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: [
            '2020-1', '2021-3', '2021-6', '2021-12', '2022-3', '2022-9', '2022-12', '2023-6', '2023-12'
        ],
        axisLabel: {
            formatter: function (value) {
                return value.split('-')[0] + '\n' + value.split('-')[1];
            }
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.6)",
                width: 1,
                type: "solid"
            }
        },
        axisTick: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        min: 0,
        max: 100,
        interval: 20,
        axisLabel: {
            formatter: '{value} %'
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.6)",
                width: 1,
                type: "solid"
            }
        },
        splitLine: {
            lineStyle: {
                color: "rgba(255,255,255,.1)"
            }
        }
    },
    series: [
        {
            name: '接种率',
            type: 'line',
            smooth: true,
            data: [0, 7.5, 47.5, 77.5, 85, 90, 92, 88, 86],
            itemStyle: {
                normal: {
                    color: '#2f89cf',
                    opacity: 1,
                    barBorderRadius: 5
                }
            }
        }
    ]
};



// 关键事件数据
var events = [
    {time: '2020-1', event: '广东报告全国首例境外输入病例，启动紧急防控'},
    {time: '2021-3', event: '重点人群（医护、口岸工作者）接种启动'},
    {time: '2021-6', event: '广州爆发Delta疫情，全民接种加速'},
    {time: '2021-12', event: '完成全程接种目标，深圳、广州覆盖率超85%'},
    {time: '2022-3', event: '推进老年人接种，深圳试点吸入式疫苗'},
    {time: '2022-9', event: '香港通关需求推动加强针接种'},
    {time: '2022-12', event: '奥密克戎疫情后补种率提升'},
    {time: '2023-6', event: '接种需求下降，转向重点人群补种'},
    {time: '2023-12', event: '与流感疫苗同步接种策略实施'}
];

	
// 	option7 = {
//       //  backgroundColor: '#00265f',
//     tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//             type: 'shadow'
//         }
//     },
//     grid: {
//         left: '0%',
// 		top:'10px',
//         right: '0%',
//         bottom: '0',
//        containLabel: true
//     },
//     xAxis: [{
//         type: 'category',
//       		data: ['1月', '2月', '3月', '4月', '5月', '6月'],
//         axisLine: {
//             show: true,
//          lineStyle: {
//                 color: "rgba(255,255,255,.1)",
//                 width: 1,
//                 type: "solid"
//             },
//         },
//         axisTick: {
//             show: false,
//         },
// 		axisLabel:  {
//                 interval: 0,
//                // rotate:50,
//                 show: true,
//                 splitNumber: 5,
//                 textStyle: {
//  					color: "rgba(255,255,255,.6)",
//                     fontSize: '12',
//                 },
//             },
//     }],
//     yAxis: [{
//         type: 'value',
//         axisLabel: {
//            //formatter: '{value} %'
// 			show:true,
// 			 textStyle: {
//  					color: "rgba(255,255,255,.6)",
//                     fontSize: '12',
//                 },
//         },
//         axisTick: {
//             show: false,
//         },
//         axisLine: {
//             show: true,
//             lineStyle: {
//                 color: "rgba(255,255,255,.1	)",
//                 width: 1,
//                 type: "solid"
//             },
//         },
//         splitLine: {
// 			 show: false,
//             lineStyle: {
//                color: "rgba(255,255,255,.1)",
//             }
//         }
//     }],
//     series: [{
//         name: '2017年',
//         type: 'line',
//  //smooth: true,
//         data: [2, 6, 3, 8, 5, 8],

//         itemStyle: {
//             normal: {
//                 color:'#2f89cf',
//                 opacity: 1,
				
// 				barBorderRadius: 5,
//             }
//         }
//     }
// 	]
// };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        myChart2.setOption(option2);
        myChart3.setOption(option3);
        myChart4.setOption(option4);
        myChart5.setOption(option5);
 
        myChart7.setOption(option7);

        window.addEventListener("resize",function(){
            myChart.resize();
            myChart7.resize();
            myChart2.resize();
            myChart3.resize();
            myChart4.resize();
            myChart5.resize();
 
        });
    }
})



		
		
		


		









