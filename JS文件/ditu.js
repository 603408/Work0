function ditu_add(chart){
        var option= {
            backgroundColor: '#404a59',
            title: {
                text: '数据可视化案例',
                // subtext: 'data from PM25.in',
                // sublink: 'http://www.pm25.in', lia链接网站
                x:'center',
                textStyle: {
                    color: '#fff'
                }},
            color: [
                "#c23531",
                "#00FF00",
                "#FFFF00"
                
            ],
            "series": [
                {
                    "type": "scatter",
                    "name": "A系列",
                    "coordinateSystem": "geo",
                    "symbolSize": 12,
                    "data": [
                        {
                            "name": "\u547c\u548c\u6d69\u7279",
                            "value": [
                                111.65,
                                40.82,
                                58
                            ]
                        },
                        {
                            "name": "\u6e29\u5dde",
                            "value": [
                                120.65,
                                28.01,
                                95
                            ]
                        },
                        {
                            "name": "\u4e5d\u6c5f",
                            "value": [
                                115.97,
                                29.71,
                                96
                            ]
                        },
                        {
                            "name": "\u5e38\u5fb7",
                            "value": [
                                111.69,
                                29.05,
                                152
                            ]
                        },
                        {
                            "name": "\u4fdd\u5b9a",
                            "value": [
                                115.48,
                                38.85,
                                153
                            ]
                        },
                        {
                            "name": "\u6e58\u6f6d",
                            "value": [
                                112.91,
                                27.87,
                                154
                            ]
                        },
                        {
                            "name": "\u91d1\u534e",
                            "value": [
                                119.64,
                                29.12,
                                157
                            ]
                        },
                        {
                            "name": "\u5cb3\u9633",
                            "value": [
                                113.09,
                                29.37,
                                169
                            ]
                        },
                        {
                            "name": "海门",
                            "value": [
                                121.65,
                                31.82,
                                58
                            ]
                        },
                        {
                            "name": "鄂尔多斯",
                            "value": [
                                109.78,
                                39.06,
                                95
                            ]
                        },
                        {
                            "name": "齐齐哈尔",
                            "value": [
                                123.97,
                                47.71,
                                96
                            ]
                        },
                        {
                            "name": "拉萨",
                            "value": [
                                91.69,
                                29.05,
                                152
                            ]
                        },
                        {
                            "name": "青岛",
                            "value": [
                                120.33,36.07,
                                153
                            ]
                        },
                        {
                            "name": "日照",
                            "value": [
                                119.46,35.42,
                                154
                            ]
                        },
                        {
                            "name": "厦门",
                            "value": [
                                118.1,24.46,
                                157
                            ]
                        },
                        {
                            "name": "攀枝花",
                            "value": [
                                101.718637,26.582347,
                                169
                            ]
                        }
                    ],
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                },
                {
                    "type": "scatter",
                    "name": "G系列",
                    "coordinateSystem": "geo",
                    "symbolSize": 12,
                    "data": [
                        {
                            "name": "\u957f\u6c99",
                            "value": [
                                100,
                                28.21,
                                175
                            ]
                        },
                        {
                            "name": "\u8862\u5dde",
                            "value": [
                                98.88,
                                28.97,
                                177
                            ]
                        },
                        {
                            "name": "\u5eca\u574a",
                            "value": [
                                106.7,
                                39.53,
                                193
                            ]
                        },
                        {
                            "name": "\u83cf\u6cfd",
                            "value": [
                                115.480656,
                                35.23375,
                                194
                            ]
                        },
                        {
                            "name": "\u5408\u80a5",
                            "value": [
                                117.27,
                                31.86,
                                229
                            ]
                        },
                        {
                            "name": "\u6b66\u6c49",
                            "value": [
                                104.31,
                                30.52,
                                273
                            ]
                        },
                        {
                            "name": "\u5927\u5e86",
                            "value": [
                                125.03,
                                46.58,
                                279
                            ]
                        },
                                        {
                            "name": "克拉玛依",
                            "value": [
                                84.77,45.59,
                                175
                            ]
                        },
                        {
                            "name": "乌鲁木齐",
                            "value": [
                                87.68,43.77,
                                177
                            ]
                        },
                        {
                            "name": "库尔勒",
                            "value": [
                                86.06,41.68,
                                193
                            ]
                        },
                        {
                            "name": "兰州",
                            "value": [
                                103.73,36.03,
                                194
                            ]
                        },
                        {
                            "name": "连云港",
                            "value": [
                                119.16,34.59,
                                229
                            ]
                        },
                        {
                            "name": "嘉峪关",
                            "value": [
                                98.289152,39.77313,
                                273
                            ]
                        },
                        {
                            "name": "开封",
                            "value": [
                                114.35,34.79,
                                279
                            ]
                        }
                    ],
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                },
                {
                    "type": "scatter",
                    "name": "H系列",
                    "coordinateSystem": "geo",
                    "symbolSize": 12,
                    "data": [
                        {
                            "name": "葫芦岛",
                            "value": [
                                120.1575, 40.578,
                                375
                            ]
                        },
                        {
                            "name": "衡水",
                            "value": [
                                115.8838, 37.7161,
                                177
                            ]
                        },
                        {
                            "name": "邢台",
                            "value": [
                                114.8071, 37.2821,
                                193
                            ]
                        },
                        {
                            "name": "鄂尔多斯",
                            "value": [
                                108.9734, 39.2485,
                                194
                            ]
                        },
                        {
                            "name": "重庆",
                            "value": [
                                107.7539, 30.1904,
                                229
                            ]
                        },
                        {
                            "name": "金华",
                            "value": [
                                120.0037, 29.1028,
                                273
                            ]
                        },
                        {
                            "name": "长春",
                            "value": [
                                125.8154, 44.2584,
                                279
                            ]
                        },
                                        {
                            "name": "长沙",
                            "value": [
                                113.0823, 28.2568,
                                175
                            ]
                        },
                        {
                            "name": "青岛",
                            "value": [
                                120.4651, 36.3373,
                                177
                            ]
                        },
                        {
                            "name": "韶关",
                            "value": [
                                113.7964, 24.7028,
                                193
                            ]
                        },
                        {
                            "name": "铜川",
                            "value": [
                                109.0393, 35.1947,
                                194
                            ]
                        },
                        {
                            "name": "西安",
                            "value": [
                                109.1162, 34.2004,
                                229
                            ]
                        },
                        {
                            "name": "贵阳",
                            "value": [
                                106.6992, 26.7682,
                                273
                            ]
                        },
                        {
                            "name": "郑州",
                            "value": [
                                113.4668, 34.6234,
                                279
                            ]
                        }
                    ],
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                }
            ],
            "legend": [
                {
                    "data": [
                        "A系列",
                        "G系列",
                        "H系列"
                    ],
                    "selected": {
                        "A系列": true,
                        "G系列": true,
                        "H系列":true
                    },
                    "show": true,
                     padding: 100 ,//标题到图像的距离
                     textStyle:{color:'rgba(255, 255, 255, 0.9)'},

                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "formatter": function (params) {        return params.name + ' : ' + params.value[2];    },
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0
            },

            "geo": {
                "map": "china",
                "roam": true,
                "itemStyle": {
                    "color": "#323c48",
                    "borderColor": "#111"
                },
                "emphasis": {}
            },
            // visualMap: {
            //     min: 0,
            //     max: 200,
            //     calculable: true,
            //     inRange: {
            //         color: ['#50a3ba', '#eac736', '#d94e5d']
            //     },  
            //     textStyle: {
            //             color: '#fff'
            //         }
            // },//尺度表
        };
        chart.setOption(option);

        };

function Zhuxingtu(myChart)
 {
        
    var option = {

        toolbox: {
            show: true,
            feature: {
                magicType: {type: ['line', 'bar']},
            },
            backgroundColor:'rgba(255, 255, 255, 0.5)',
        },

        backgroundColor:'rgba(128, 128, 128, 0.6)',
        textStyle:{color:'rgba(255, 255, 255, 0.9)'},
        color: [
            "#c23531",
            "#00FF00",
            "#FFFF00"
            ],
        "series": [
            {
                "type": "bar",
                "name": "A系列",
                "data": [ 5,20,36,10,75,80
                ],
                "barCategoryGap": "20%",
                "label": {
                    "show": true,
                    "position": "top",
                    "margin": 8
                }
            },
            {
                "type": "bar",
                "name": "G系列",
                "data": [
                    15,6,45,20,35,66
                ],
                "barCategoryGap": "20%",
                "label": {
                    "show": true,
                    "position": "top",
                    "margin": 8
                }
            },
            {
                "type": "bar",
                "name": "H系列",
                "data": [
                    29,16,35,60,53,6
                ],
                "barCategoryGap": "20%",
                "label": {
                    "show": true,
                    "position": "top",
                    "margin": 8
                }
            },
        ],
        "legend": [
            {
                "data": [
                    "A系列",
                    "G系列",
                    "H系列"
                ],
                "selected": {
                    "A系列": true,
                    "G系列": true,
                    "H系列":true
                },
                "show": true,
                textStyle:{color:'rgba(255, 255, 255, 0.9)'},

            }
        ],
        "tooltip": {
            "show": true,
            "trigger": "item",
            "triggerOn": "mousemove|click",
            "axisPointer": {
                "type": "line"
            },
            "textStyle": {
                "fontSize": 14
            },
            "borderWidth": 0
        },
        "xAxis": [
            {
                "show": true,
                "scale": false,
                "nameLocation": "end",
                "nameGap": 15,
                "gridIndex": 0,
                "inverse": false,
                "offset": 0,
                "splitNumber": 5,
                "minInterval": 0,
                "splitLine": {
                    "show": false,
                    "lineStyle": {
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    }
                },
                "data": [
                    "故障",
                    "报警",
                    "维护",
                    "调整",
                    "运行",
                    "正常"
                ]
            }
        ],
        "yAxis": [
            {
                "show": true,
                "scale": false,
                "nameLocation": "end",
                "nameGap": 15,
                "gridIndex": 0,
                "inverse": false,
                "offset": 0,
                "splitNumber": 5,
                "minInterval": 0,
                "splitLine": {
                    "show": false,
                    "lineStyle": {
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    }
                }
            }
        ],
    };
        myChart.setOption(option);

  }                 


function PingXingTu(myChart)
{
        var option = {
         backgroundColor:'rgba(128, 128, 128, 0.4)',
        textStyle:{color:'rgba(255, 255, 255, 0.9)'},
        "color": [
            "#c23531", "#00FF00", "#FFFF00","#d48265", "#749f83", "#ca8622","#bda29a", "#6e7074","#546570", "#c4ccd3", "#f05b72","#ef5b9c",
        ],
        "series": [
            {
                "type": "pie",
                "clockwise": true,
                "data": [
                    {
                        "name": "故障",
                        "value": 90
                    },
                    {
                        "name": "报警",
                        "value": 119
                    },
                    {
                        "name": "维护",
                        "value": 120
                    },
                    {
                        "name": "调整",
                        "value": 109
                    },
                    {
                        "name": "运行",
                        "value": 89
                    },
                    {
                        "name": "正常",
                        "value": 57
                    },
                    {
                        "name": "良好",
                        "value": 130
                    }
                ],
                "radius": [
                    "30%",
                    "70%"
                ],
                "center": [
                    "50%",
                    "55%"
                ],
                "label": {
                    "show": true,
                    "position": "top",
                    "margin": 8,
                    "formatter": "{b}: {c}"
                },
                "rippleEffect": {
                    "show": true,
                    "brushType": "stroke",
                    "scale": 2.5,
                    "period": 4
                }
            }
        ],
        "legend": [
            {
                "data": [
                    "故障",
                    "报警",
                    "维护",
                    "调整",
                    "运行",
                    "正常",
                    "良好"
                ],
                "selected": {},
                "show": true,
                textStyle:{color:'rgba(255, 255, 255, 0.9)'},
                x: ' left',
            }
        ],
        "tooltip": {
            "show": true,
            "trigger": "item",
            "triggerOn": "mousemove|click",
            "axisPointer": {
                "type": "line"
            },
            "textStyle": {
                "fontSize": 14
            },
            "borderWidth": 0
        },
     };
      myChart.setOption(option);
}

function YBP(myChart)
{

        var option = {
         backgroundColor:'rgba(128, 128, 128, 0.4)',
        textStyle:{color:'rgba(255, 255, 255, 0.9)'},
        "color": [
            "#c23531", "#00FF00", "#FFFF00","#d48265", "#749f83", "#ca8622","#bda29a", "#6e7074","#546570", "#c4ccd3", "#f05b72","#ef5b9c",
        ],
        "series": [
            {
                "type": "gauge",
                "detail": {
                    "show": true,
                    "position": "left",
                    "margin": 0,
                    "formatter": "{value}%"
                },
                "min": 0,
                "max": 100,
                "splitNumber": 10,
                radius: "110%",
                center: ['25%', '55%'], 
                "data": [
                    {
                        "name": "稳定性",
                        "value": 68.6,
                    }
                ],
                axisLine: { //仪表盘轴线样式 
                    lineStyle: { 
                    width: 20 
                    } 
                }, 
                splitLine: { //分割线样式 
                    length: 20 
                    },
                itemStyle: { color:'#b6bcfb' }

            },
             {
                    "type": "gauge",
                    "detail": {
                        "show": true,
                        "position": "left",
                        "margin": 0,
                        "formatter": "{value}%"
                    },
                    "min": 0,
                    "max": 100,
                    "splitNumber": 10,
                    radius: "110%",
                    center: ['75%', '55%'], 
                    "data": [
                        {
                            "name": "安全性",
                            "value": 80.1,
                        }
                    ],
                    axisLine: { //仪表盘轴线样式 
                        lineStyle: { 
                        width: 20 
                        } 
                    }, 
                    splitLine: { //分割线样式 
                        length: 20 
                        },
                    itemStyle: { color:'#b6b00b' },


                }
        ],
            "legend": [
                {
                    "data": [
                        "123"
                    ],
                    "selected": {
                        "": true
                    },
                    "show": true,
                    textStyle:{color:'rgba(255, 255, 255, 0.9)'},
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "textStyle": {
                    "fontSize": 3
                },
                "borderWidth": 0
            },
        };
                myChart.setOption(option);
}

function ShiuQiu(myChart)
{
    var option = {
        backgroundColor:'rgba(128, 128, 128, 0.4)',
        textStyle:{color:'rgba(255, 255, 255, 0.9)'},
            "color": [
                "#d48265", "#749f83", "#ca8622","#bda29a"
            ],
            "series": [
                {
                    "type": "liquidFill",
                    "name": "A系列稳定性",
                    "data": [
                        0.8,
                        0.6
                    ],
                    radius: "45%",
                    center: ['18%', '25%'],
                    "waveAnimation": true,
                    "animationDuration": 2000,
                    "animationDurationUpdate": 1000,
                    "color": [
                        "#c23531","#00FF00","#FFFF00"
                    ],
                    "shape": "circle",
                    "outline": {
                        "show": false//外框
                    },
                    "label": {
                        "show": true,
                        "position": "inside",
                        "margin": 8,
                        "fontSize": 20,

                    }
                },
                {
                    "type": "liquidFill",
                    "name": "A系列维护量",
                    "data": [
                        0.7,
                        0.5
                    ],
                    radius: "43%",
                    center: ['18%', '75%'],
                    "waveAnimation": true,
                    "animationDuration": 2000,
                    "animationDurationUpdate": 1000,
                    "color": [
                        "#00FF00","#bf00ff"
                    ],
                    "shape": "arrow",
                    "outline": {
                        "show": false //外框
                    },
                    "label": {
                        "show": true,
                        "position": "inside",
                        "margin": 8,
                        "fontSize": 20
                    }
                },
                {
                    "type": "liquidFill",
                    "name": "G系列稳定性",
                    "data": [
                        0.5,
                        0.4
                    ],
                    radius: "45%",
                    center: ['48%', '25%'],
                    "waveAnimation": true,
                    "animationDuration": 2000,
                    "animationDurationUpdate": 1000,
                    "color": [
                        "#c23531","#00FF00","#FFFF00"
                    ],
                    "shape": "circle",
                    "outline": {
                        "show": false//外框
                    },
                    "label": {
                        "show": true,
                        "position": "inside",
                        "margin": 8,
                        "fontSize": 20,

                    }
                },
                {
                    "type": "liquidFill",
                    "name": "G系列维护量",
                    "data": [
                        0.8,
                        0.5
                    ],
                    radius: "43%",
                    center: ['48%', '75%'],
                    "waveAnimation": true,
                    "animationDuration": 2000,
                    "animationDurationUpdate": 1000,
                    "color": [
                        "#00FF00","#ff00ff"
                    ],
                    "shape": "arrow",
                    "outline": {
                        "show": false //外框
                    },
                    "label": {
                        "show": true,
                        "position": "inside",
                        "margin": 8,
                        "fontSize": 20
                    }
                },
                {
                    "type": "liquidFill",
                    "name": "H系列稳定性",
                    "data": [
                        0.9,
                        0.6
                    ],
                    radius: "45%",
                    center: ['78%', '25%'],
                    "waveAnimation": true,
                    "animationDuration": 2000,
                    "animationDurationUpdate": 1000,
                    "color": [
                        "#00FF00","#FFFF00","#c23531"
                    ],
                    "shape": "circle",
                    "outline": {
                        "show": false//外框
                    },
                    "label": {
                        "show": true,
                        "position": "inside",
                        "margin": 8,
                        "fontSize": 20,

                    }
                },
                {
                    "type": "liquidFill",
                    "name": "H系列维护量",
                    "data": [
                        0.7,
                        0.3
                    ],
                    radius: "43%",
                    center: ['78%', '75%'],
                    "waveAnimation": true,
                    "animationDuration": 2000,
                    "animationDurationUpdate": 1000,
                    "color": [
                        "#0000ff","#00FF00"
                    ],
                    "shape": "arrow",
                    "outline": {
                        "show": false //外框
                    },
                    "label": {
                        "show": true,
                        "position": "inside",
                        "margin": 8,
                        "fontSize": 20
                    }
                }
            ],
            "legend": [
                {
                    "data": [],
                    "selected": {},
                    "show": true
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0
            },
        };
        myChart.setOption(option);
}
function ZheXian(myChart)
{

    var option = {
            backgroundColor:'rgba(128, 128, 128, 0.4)',
            textStyle:{color:'rgba(255, 255, 255, 0.9)'},
            "color": [
                "#d48265", "#749f83", "#ca8622","#bda29a"
            ],
            "series": [
                {
                    "type": "line",
                    "name": "A系列",
                    "connectNulls": false,
                    "symbolSize": 4,
                    "showSymbol": true,
                    "smooth": false,
                    "step": false,
                    "data": [
                        [
                            "故障",
                            148
                        ],
                        [
                            "报警",
                            30
                        ],
                        [
                            "维护",
                            92
                        ],
                        [
                            "调整",
                            144
                        ],
                        [
                            "运行",
                            103
                        ],
                        [
                            "正常",
                            81
                        ],
                        [
                            "综合",
                            66
                        ]
                    ],
                    "label": {
                        "show": true,
                        "position": "top",
                        "margin": 8
                    },
                    "lineStyle": {
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "markLine": {
                        "silent": false,
                        "precision": 2,
                        "label": {
                            "show": true,
                            "position": "top",
                            "margin": 8
                        },
                        "data": [
                            {
                                "type": "average"
                            }
                        ]
                    }
                },
                {
                    "type": "line",
                    "name": "H系列",
                    "connectNulls": false,
                    "symbolSize": 4,
                    "showSymbol": true,
                    "smooth": false,
                    "step": false,
                    "data": [
                        [
                            "故障",
                            91
                        ],
                        [
                            "报警",
                            65
                        ],
                        [
                            "维护",
                            120
                        ],
                        [
                            "调整",
                            144
                        ],
                        [
                            "运行",
                            107
                        ],
                        [
                            "正常",
                            125
                        ],
                        [
                            "综合",
                            24
                        ]
                    ],
                    "label": {
                        "show": true,
                        "position": "top",
                        "margin": 8
                    },
                    "lineStyle": {
                        "width": 1,
                        "opacity": 1,
                        "curveness": 0,
                        "type": "solid"
                    },
                    "areaStyle": {
                        "opacity": 0
                    },
                    "markLine": {
                        "silent": false,
                        "precision": 2,
                        "label": {
                            "show": true,
                            "position": "top",
                            "margin": 8
                        },
                        "data": [
                            {
                                "type": "average"
                            }
                        ]
                    }
                },
                // {
                //     "type": "line",
                //     "name": "G系列",
                //     "connectNulls": false,
                //     "symbolSize": 4,
                //     "showSymbol": true,
                //     "smooth": false,
                //     "step": false,
                //     "data": [
                //         [
                //             "故障",
                //             109
                //         ],
                //         [
                //             "报警",
                //             10
                //         ],
                //         [
                //             "维护",
                //             20
                //         ],
                //         [
                //             "调整",
                //             50
                //         ],
                //         [
                //             "运行",
                //             120
                //         ],
                //         [
                //             "正常",
                //             65
                //         ],
                //         [
                //             "综合",
                //             85
                //         ]
                //     ],
                //     "label": {
                //         "show": true,
                //         "position": "top",
                //         "margin": 8
                //     },
                //     "lineStyle": {
                //         "width": 1,
                //         "opacity": 1,
                //         "curveness": 0,
                //         "type": "solid"
                //     },
                //     "areaStyle": {
                //         "opacity": 0
                //     },
                //     "markLine": {
                //         "silent": false,
                //         "precision": 2,
                //         "label": {
                //             "show": true,
                //             "position": "top",
                //             "margin": 8
                //         },
                //         "data": [
                //             {
                //                 "type": "average"
                //             }
                //         ]
                //     }
                // }
            ],
            "legend": [
                {
                    "data": [
                        "A系列",
                        "H系列",
                        // "G系列",
                    ],
                    "selected": {
                        "A系列": true,
                        "H系列": true,
                        // "G系列" true,
                    },
                    "show": true
                }
            ],
            "tooltip": {
                "show": true,
                "trigger": "item",
                "triggerOn": "mousemove|click",
                "axisPointer": {
                    "type": "line"
                },
                "textStyle": {
                    "fontSize": 14
                },
                "borderWidth": 0
            },
            "xAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": false,
                        "lineStyle": {
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    },
                    "data": [
                        "故障",
                        "报警",
                        "维护",
                        "调整",
                        "运行",
                        "正常",
                        "综合"
                    ]
                }
            ],
            "yAxis": [
                {
                    "show": true,
                    "scale": false,
                    "nameLocation": "end",
                    "nameGap": 15,
                    "gridIndex": 0,
                    "inverse": false,
                    "offset": 0,
                    "splitNumber": 5,
                    "minInterval": 0,
                    "splitLine": {
                        "show": false,
                        "lineStyle": {
                            "width": 1,
                            "opacity": 1,
                            "curveness": 0,
                            "type": "solid"
                        }
                    }
                }
            ],
        };
    myChart.setOption(option);
}

function changeDiv(){  

        var w = window.innerWidth;//获取页面可见宽度
        var h = window.innerHeight;//获取页面可见高度
        // 根据当前浏览器宽度显示内容
        if (h<700 || w<1000 ) 
        {
            document.getElementById("SQ").style.display="none";
            document.getElementById("Pie").style.display="none";
            document.getElementById("YBP").style.display="none";
            document.getElementById("bar").style.display="none";
        }
        if (h>700 && w>1000 ) 
        {
            document.getElementById("Pie").style.display="block";
            document.getElementById("YBP").style.display="block";
            document.getElementById("SQ").style.display="block";
            document.getElementById("bar").style.display="block";
        }
        // if (h<680) 
        // {
        //     document.getElementById("SQ").style.display="none";
        //     document.getElementById("Pie").style.display="none";
        //     document.getElementById("YBP").style.display="none";
        //     document.getElementById("bar").style.display="none";
            
        // }
        // else
        // {
        //     document.getElementById("Pie").style.display="block";
        //     document.getElementById("YBP").style.display="block";
        //     document.getElementById("SQ").style.display="block";
        //     document.getElementById("bar").style.display="block"
        // }

        // // 根据当前浏览器高度显示内容
        // if (w<900) 
        // {
        //     document.getElementById("SQ").style.display="none";
        //     document.getElementById("Pie").style.display="none";
        //     document.getElementById("YBP").style.display="none";
        //     document.getElementById("bar").style.display="none";
            
        // }
        // else
        // {
        //     document.getElementById("Pie").style.display="block";
        //     document.getElementById("YBP").style.display="block";
        //     document.getElementById("SQ").style.display="block";
        //     document.getElementById("bar").style.display="block";
            
        // }
    
};