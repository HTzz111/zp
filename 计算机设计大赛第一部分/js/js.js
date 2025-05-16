$(function () {
            // 病床使用率数据
            const bedUsageData = {
               "三级医院": {
                    2019: 83.6,
                    2020: 72.3,
                    2021: 74.6,
                    2022: 66.1,
                    2023: 74.2},
                    "基层医疗卫生机构": {
                        2019: 56.3,
                        2020: 49.2,
                        2021: 47.4,
                        2022: 46,
                        2023: 52.8
                    },
                    "专业公共卫生机构": {
                        2019: 68.9,
                        2020: 57.8,
                        2021: 58.8,
                        2022: 55.3,
                        2023: 62.6
                    },
                    "中西医结合医院": {
                        "2019": 78.2,
                        "2020": 67.9,
                        "2021": 71.2,
                        "2022": 68.1,
                        "2023": 77.6
                    },
                    "乡镇卫生院病床使用率": {
                        "2019": 57.5,
                        "2020": 50.4,
                        "2021": 48.2,
                        "2022": 46.9,
                        "2023": 53.3
                    },
                    "妇幼保健院/所、站": {
                        "2019": 68.9,
                        "2020": 56.9,
                        "2021": 57.8,
                        "2022": 53.9,
                        "2023": 62
                    },
            };

            // 图表实例缓存
            const chartInstances = {};

            // 初始化年份选择器
            initYearSelector();
            updateCharts(2023); // 默认显示2023年数据

            // 年份选择器初始化
            function initYearSelector() {
                const container = $('.tqdb').closest('.boxnav');

                $('#yearSelect').change(function () {
                    updateCharts(parseInt($(this).val()));
                });

                // 统一处理窗口大小变化事件
                window.addEventListener("resize", () => {
                    for (const domId in chartInstances) {
                        chartInstances[domId].resize();
                    }
                });
            }

            // 更新所有图表
            function updateCharts(year) {
                echarts_1(year);
                echarts_2(year);
                echarts_3(year);
                echarts_4(year);
                echarts_5(year);
                echarts_6(year);
            }

            // 通用饼图创建函数（带实例缓存）
            function createPieChart(domId, value) {
                // 获取或初始化图表实例
                if (!chartInstances[domId]) {
                    chartInstances[domId] = echarts.init(document.getElementById(domId));
                }
                const myChart = chartInstances[domId];

                // 更新图表配置
                const option = {
                    title: {
                        text: value.toFixed(1) + '%',
                        x: 'center',
                        y: 'center',
                        textStyle: {
                            fontWeight: 'normal',
                            color: '#0580f2',
                            fontSize: '24'
                        }
                    },
                    color: ['rgba(176, 212, 251, .1)'],
                    series: [{
                        type: 'pie',
                        clockWise: true,
                        radius: ['75%', '85%'],
                        itemStyle: {
                            normal: {
                                label: { show: false },
                                labelLine: { show: false },
                            }
                        },
                        hoverAnimation: false,
                        data: [{
                            value: value,
                            itemStyle: {
                                normal: {
                                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                                        { offset: 0, color: '#00cefc' },
                                        { offset: 1, color: '#367bec' }
                                    ])
                                }
                            }
                        }, {
                            value: 100 - value,
                            itemStyle: {
                                normal: {
                                    color: 'rgba(176, 212, 251, .1)'
                                }
                            }
                        }]
                    }]
                };
                myChart.setOption(option);
            }

            // 各图表函数定义
            function echarts_1(year) { createPieChart('echart1', bedUsageData["三级医院"][year]); }
            function echarts_2(year) { createPieChart('echart2', bedUsageData["基层医疗卫生机构"][year]); }
            function echarts_3(year) { createPieChart('echart3', bedUsageData["专业公共卫生机构"][year]); }
            function echarts_4(year) { createPieChart('echart4', bedUsageData["中西医结合医院"][year]); }
            function echarts_5(year) { createPieChart('echart5', bedUsageData["乡镇卫生院病床使用率"][year]); }
            function echarts_6(year) { createPieChart('echart6', bedUsageData["妇幼保健院/所、站"][year]); }
        });