$(function () {
    map();
    function map() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('map'));

        // 2023年数据
        const medicalData = [
            { "地区": "北京市", "卫生机构床位数(万张)": 13.88, "医疗卫生机构数(个)": 11487, "卫生人员数(万人)": 38.9, "村卫生室个数(个)": 2774 },
            { "地区": "天津市", "卫生机构床位数(万张)": 7.25, "医疗卫生机构数(个)": 6799, "卫生人员数(万人)": 16.54, "村卫生室个数(个)": 2196 },
            { "地区": "河北省", "卫生机构床位数(万张)": 53.4, "医疗卫生机构数(个)": 92825, "卫生人员数(万人)": 79.07, "村卫生室个数(个)": 59321 },
            { "地区": "山西省", "卫生机构床位数(万张)": 23.23, "医疗卫生机构数(个)": 37849, "卫生人员数(万人)": 37.48, "村卫生室个数(个)": 22566 },
            { "地区": "内蒙古自治区", "卫生机构床位数(万张)": 17.31, "医疗卫生机构数(个)": 25685, "卫生人员数(万人)": 28.41, "村卫生室个数(个)": 12812 },
            { "地区": "辽宁省", "卫生机构床位数(万张)": 33.42, "医疗卫生机构数(个)": 34137, "卫生人员数(万人)": 44.26, "村卫生室个数(个)": 16401 },
            { "地区": "吉林省", "卫生机构床位数(万张)": 18.37, "医疗卫生机构数(个)": 26161, "卫生人员数(万人)": 29.42, "村卫生室个数(个)": 8799 },
            { "地区": "黑龙江省", "卫生机构床位数(万张)": 27.33, "医疗卫生机构数(个)": 21417, "卫生人员数(万人)": 33.57, "村卫生室个数(个)": 10325 },
            { "地区": "上海市", "卫生机构床位数(万张)": 17.5, "医疗卫生机构数(个)": 6514, "卫生人员数(万人)": 29.77, "村卫生室个数(个)": 1118 },
            { "地区": "江苏省", "卫生机构床位数(万张)": 57.88, "医疗卫生机构数(个)": 39536, "卫生人员数(万人)": 91.1, "村卫生室个数(个)": 14671 },
            { "地区": "浙江省", "卫生机构床位数(万张)": 40.61, "医疗卫生机构数(个)": 37679, "卫生人员数(万人)": 78.58, "村卫生室个数(个)": 11581 },
            { "地区": "安徽省", "卫生机构床位数(万张)": 45.35, "医疗卫生机构数(个)": 31361, "卫生人员数(万人)": 59.02, "村卫生室个数(个)": 15546 },
            { "地区": "福建省", "卫生机构床位数(万张)": 24.21, "医疗卫生机构数(个)": 30023, "卫生人员数(万人)": 39.71, "村卫生室个数(个)": 16487 },
            { "地区": "江西省", "卫生机构床位数(万张)": 34.07, "医疗卫生机构数(个)": 40129, "卫生人员数(万人)": 43.91, "村卫生室个数(个)": 27059 },
            { "地区": "山东省", "卫生机构床位数(万张)": 73.86, "医疗卫生机构数(个)": 88186, "卫生人员数(万人)": 113.59, "村卫生室个数(个)": 51541 },
            { "地区": "河南省", "卫生机构床位数(万张)": 77.74, "医疗卫生机构数(个)": 85044, "卫生人员数(万人)": 106.98, "村卫生室个数(个)": 59447 },
            { "地区": "湖北省", "卫生机构床位数(万张)": 47.61, "医疗卫生机构数(个)": 38586, "卫生人员数(万人)": 60.22, "村卫生室个数(个)": 22459 },
            { "地区": "湖南省", "卫生机构床位数(万张)": 54.45, "医疗卫生机构数(个)": 57503, "卫生人员数(万人)": 68.3, "村卫生室个数(个)": 36126 },
            { "地区": "广东省", "卫生机构床位数(万张)": 62.86, "医疗卫生机构数(个)": 62819, "卫生人员数(万人)": 116.91, "村卫生室个数(个)": 25127 },
            { "地区": "广西壮族自治区", "卫生机构床位数(万张)": 36.2, "医疗卫生机构数(个)": 34888, "卫生人员数(万人)": 53.61, "村卫生室个数(个)": 18589 },
            { "地区": "海南省", "卫生机构床位数(万张)": 6.09, "医疗卫生机构数(个)": 6538, "卫生人员数(万人)": 10.61, "村卫生室个数(个)": 2663 },
            { "地区": "重庆市", "卫生机构床位数(万张)": 25.56, "医疗卫生机构数(个)": 23389, "卫生人员数(万人)": 33.47, "村卫生室个数(个)": 9496 },
            { "地区": "四川省", "卫生机构床位数(万张)": 70.86, "医疗卫生机构数(个)": 74975, "卫生人员数(万人)": 92.61, "村卫生室个数(个)": 42301 },
            { "地区": "贵州省", "卫生机构床位数(万张)": 31.54, "医疗卫生机构数(个)": 30695, "卫生人员数(万人)": 43.05, "村卫生室个数(个)": 19643 },
            { "地区": "云南省", "卫生机构床位数(万张)": 35.99, "医疗卫生机构数(个)": 28765, "卫生人员数(万人)": 51.27, "村卫生室个数(个)": 13588 },
            { "地区": "西藏自治区", "卫生机构床位数(万张)": 2.16, "医疗卫生机构数(个)": 7058, "卫生人员数(万人)": 4.63, "村卫生室个数(个)": 5236 },
            { "地区": "陕西省", "卫生机构床位数(万张)": 30.62, "医疗卫生机构数(个)": 35133, "卫生人员数(万人)": 47.1, "村卫生室个数(个)": 21611 },
            { "地区": "甘肃省", "卫生机构床位数(万张)": 20.4, "医疗卫生机构数(个)": 25375, "卫生人员数(万人)": 26.84, "村卫生室个数(个)": 16272 },
            { "地区": "青海省", "卫生机构床位数(万张)": 4.57, "医疗卫生机构数(个)": 6950, "卫生人员数(万人)": 7.27, "村卫生室个数(个)": 4469 },
            { "地区": "宁夏回族自治区", "卫生机构床位数(万张)": 4.35, "医疗卫生机构数(个)": 4863, "卫生人员数(万人)": 7.81, "村卫生室个数(个)": 2142 },
            { "地区": "新疆维吾尔自治区", "卫生机构床位数(万张)": 19.75, "医疗卫生机构数(个)": 18416, "卫生人员数(万人)": 29.73, "村卫生室个数(个)": 9598 }
        ];
       

        // 地理坐标
        var geoCoordMap = {
            "北京市": [116.46, 39.92],
            "天津市": [121.48, 31.22],
            "河北省": [114.48, 38.03],
            "山西省": [112.53, 37.87],
            "内蒙古自治区": [111.65, 40.82],
            "辽宁省": [123.38, 41.8],
            "吉林省": [125.35, 43.88],
            "黑龙江省": [126.63, 45.75],
            "上海市": [121.48, 31.22],
            "江苏省": [118.78, 32.04],
            "浙江省": [120.19, 30.26],
            "安徽省": [117.27, 31.86],
            "福建省": [119.3, 26.08],
            "江西省": [115.89, 28.68],
            "山东省": [117, 36.65],
            "河南省": [113.65, 34.76],
            "湖北省": [114.31, 30.52],
            "湖南省": [113, 28.21],
            "广东省": [113.23, 23.16],
            "广西壮族自治区": [108.33, 22.84],
            "海南省": [110.35, 20.02],
            "四川省": [104.06, 30.67],
            "贵州省": [106.71, 26.57],
            "云南省": [102.73, 25.04],
            "西藏自治区": [91.11, 29.97],
            "陕西省": [108.95, 34.27],
            "甘肃省": [103.73, 36.03],
            "青海省": [101.74, 36.56],
            "宁夏回族自治区": [106.27, 38.47],
            "新疆维吾尔自治区": [87.68, 43.77],
            "重庆市": [106.54, 29.59]
        };

        var convertData = function (data, field) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].地区];
                if (geoCoord) {
                    res.push({
                        name: data[i].地区,
                        value: geoCoord.concat(data[i][field])
                    });
                }
            }
            return res;
        };

        function getMinMax(data, field) {
            var values = data.map(item => item[field]);
            return {
                min: Math.min(...values),
                max: Math.max(...values)
            };
        }

        function updateOption(field) {
            var minMax = getMinMax(medicalData, field);
            option.visualMap.min = minMax.min;
            option.visualMap.max = minMax.max;
            option.visualMap.text = [field + '低', field + '高'];
            option.series[0].data = medicalData.map(item => ({
                name: item.地区,
                value: item[field]
            }));
            option.series[1].data = convertData(medicalData, field);
            myChart.setOption(option);
        }

        // 创建可视化选项
        var option = {
            title: {
                text: '2023年中国各地区医疗卫生数据',
                subtext: '数据来源：国家统计局',
                left: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize: 18
                },
                subtextStyle: {
                    color: '#ccc',
                    fontSize: 12
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    if (params.seriesType === 'map') {
                        var data = medicalData.find(item => item.地区 === params.name);
                        return `
                            <strong>${params.name}</strong><br/>
                            卫生机构床位数(万张): ${data["卫生机构床位数(万张)"].toLocaleString()}<br/>
                            医疗卫生机构数(个): ${data["医疗卫生机构数(个)"].toLocaleString()}<br/>
                            卫生人员数(万人): ${data["卫生人员数(万人)"].toLocaleString()}<br/>
                            村卫生室个数(个): ${data["村卫生室个数(个)"].toLocaleString()}
                        `;
                    }
                    return params.name + ': ' + params.value[2];
                }
            },
            visualMap: {
                type: 'continuous',
                // min: 0,
                // max: 100000,
                // text: ['低', '高'],
                inRange: {
                    color: ['#1E90FF', '#FFD700', '#FF4500'] // 蓝-黄-红渐变
                },
                calculable: true,
                orient: 'horizontal',
                left: 'right',
                bottom: 5,
                textStyle: {
                    color: '#fff'
                }
            },
            geo: {
                map: 'china',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                roam: true,
                zoom: 1.2,
                itemStyle: {
                    normal: {
                        areaColor: 'rgba(2,37,101,.5)',
                        borderColor: 'rgba(112,187,252,.5)',
                        borderWidth: 1
                    },
                    emphasis: {
                        areaColor: 'rgba(2,37,101,.8)',
                        borderWidth: 2
                    }
                }
            },
            series: [
                {
                    name: '医疗卫生数据',
                    type: 'map',
                    map: 'china',
                    geoIndex: 0,
                    data: medicalData.map(item => ({
                        name: item.地区,
                        value: item["卫生机构床位数(万张)"]
                    })),
                    label: {
                        show: true,
                        color: '#fff',
                        fontSize: 10,
                        formatter: function (params) {
                            return params.name.substring(0, 2); // 只显示前两个字
                        }
                    },
                    emphasis: {
                        label: {
                            show: true
                        },
                        itemStyle: {
                            areaColor: '#3A5FCD'
                        }
                    }
                },
                {
                    name: '热点',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(medicalData, "卫生机构床位数(万张)"),
                    symbolSize: 10,
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        formatter: '{b}',
                        position: 'right',
                        show: false
                    },
                    itemStyle: {
                        color: '#f00',
                        shadowBlur: 10,
                        shadowColor: '#333'
                    },
                    zlevel: 1
                }
            ]
        };
        const defaultField = "卫生机构床位数(万张)";
        // 初始化图表时设置默认字段
        updateOption(defaultField);

        // myChart.setOption(option);

        $('#indicator-select').on('change', function () {
            var selectedField = $(this).val();
            updateOption(selectedField);
        });
        $('#indicator-select').val(defaultField).change();
    }
});