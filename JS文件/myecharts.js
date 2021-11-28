document.write("<script type='text/javascript' src='./JS文件/echarts.min.js'></script>"); 
// https://blog.csdn.net/zhang__ao/article/details/80745873 // 参考文章

function First(myChart)
 {

/*var data1 = [3,2,1,2,3,2,2,2,0,1,3,2,1,1,6,2,2,2,0,2,2,1,5,1,1,0,1,3,4,0,5,2,1,1,1,1,1];
var data2 = [27,28,29,28,27,28,28,28,30,29,27,28,29,29,24,28,28,28,30,28,28,29,25,29,29,30,29,27,26,30,25,28,29,29,29,29,29];
var data3 = [3,2,1,2,3,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,5,1,1,0,1,3,4,0,5,2,1,1,1,1,1];
var data4 = [3,2,1,2,3,2,2,2,0,1,3,2,1,1,6,2,2,2,0,0,0,0,0,0,0,0,0,0,0,0,5,2,1,1,1,1,1];
var data5 = [0,0,0,0,0,0,0,0,0,0,3,2,1,1,6,2,2,2,0,2,2,1,5,1,1,0,1,3,4,0,5,2,1,1,1,1,1];*/
	option = {
	  color: [
    '#5470c6',
    '#91cc75',
    '#fac858',
    '#ee6666',
    '#73c0de',
    '#3ba272',
    '#fc8452',
    '#9a60b4',
    '#ea7ccc',
    '#546570',
    '#c4ccd3'
  ],
  title: {
    text: ''
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {

   data: ['忘情水', '老鼠爱大米', '中国话', '小苹果','告白气球']

      },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['-6','-5', '-4', '-3', '-2', '-1', '0', '1', '2', '3', '4', '5', '6', '7']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '忘情水',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [73.3, 76.6, 70, 83.3, 83.3, 80, 80, 90, 93.3, 96.6, 93.3, 93.3, 83.3, 76.6]
    },
    {
      name: '老鼠爱大米',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [56.6, 56.6, 56.6, 56.6, 56.6, 56.6, 56.6, 86.6, 86.6, 83.3, 86.6, 76.6, 73.3, 60]
    },
    {
      name: '中国话',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [33.3, 30, 43.3, 26.6, 30, 30, 60, 83.3, 93.3, 90, 83.3, 86.6, 86.6, 76.6]
    },
    {
      name: '小苹果',
      type: 'line',
      stack: 'Total',
      label: {
        show: false,
        position: 'top'
      },
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [76.6, 76.6, 76.6, 76.6, 70, 63.3, 70, 100, 100, 96.6, 93.3, 93.3, 93.3, 86.6]
    },
    {
      name: '告白气球',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [46.6, 40, 23.3, 30, 33.3, 36.6, 33.3, 76.6, 83.33, 80, 80, 76.6, 70, 66.6]
    }

  ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);};

  }                 



function Second(myChart)
 {
	option = {
	  color: [
    '#5470c6',
    '#91cc75',
    '#fac858',
    '#ee6666',
    '#73c0de',
    '#3ba272',
    '#fc8452',
    '#9a60b4',
    '#ea7ccc',
    '#546570',
    '#c4ccd3'
  ],
  title: {
    text: '---------'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['我的中国心', '冬天里的一把火', '相约1998', '吉祥三宝', '时间都去哪儿了','小苹果']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['-6', '-5', '-4', '-3', '-2', '-1','0','1','2','3','4','5','6','7']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '我的中国心',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [0, 0, 0, 0, 0, 0,43.3, 100,100,100,100,100,100,100]
    },
    {
      name: '冬天里的一把火',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [0, 0, 0, 0, 0,0, 16.6, 100,93.3,86.6,90,90,86.6,80]
    },
    {
      name: '相约1998',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [0, 0, 0, 0, 0,0, 100, 100,100,100,100,100,96.6,93.3]
    },
    {
      name: '吉祥三宝',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [6.6, 13.3, 3.3, 0, 0, 0, 73.3,96.6,96.6,96.6,96.6,93.3,90,90]
    },
    {
      name: '时间都去哪儿了',
      type: 'line',
      stack: 'Total',
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [0, 0, 0, 0, 0, 0, 40,76.6,96.6,96.6,96.6,96.6,96.6,96.6]
    },
    {
      name: '小苹果',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [86.6,83.3,83.3,80,83.3,80,100,100,100,100,100,100,100,100]
    },
  ]
};
if (option && typeof option === "object") {
    myChart.setOption(option, true);};
 }


function Third(myChart)
 {
	myChart.showLoading();
$.getJSON( 'Third.json', function (graph) {
  myChart.hideLoading();
  graph.nodes.forEach(function (node) {
    node.label = {
      show: node.symbolSize > 10
    };
  });
  option = {
  color: [
    '#5470c6',
    '#91cc75',
    '#fac858',
    '#ee6666',
    '#73c0de',
    '#3ba272',
    '#fc8452',
    '#9a60b4',
    '#ea7ccc',
    '#546570',
    '#c4ccd3'
  ],

    title: {
      text: '',
      color:'#5470c6',
      subtext: 'Circular layout',
      top: 'bottom',
      left: 'right'
    },
    tooltip: {},
    legend: [
      {
        data: graph.categories.map(function (a) {
          return a.name;
        })
      }
    ],
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        name: 'Les Miserables',
        type: 'graph',
        layout: 'circular',
        circular: {
          rotateLabel: true
        },
        data: graph.nodes,
        links: graph.links,
        categories: graph.categories,
        roam: true,
        label: {
          position: 'right',
          formatter: '{b}'
        },
        lineStyle: {
          color: 'source',
          curveness: 0.4
        }
      }
    ]
  };
  myChart.setOption(option);
});
	/*if (option && typeof option === "object") {
    myChart.setOption(option, true);};*/
 }
/*
function forth(myChart){
	const dataBJ = [
  [1, 55, 9, 56, 0.46, 18, 6, '良'],
  [2, 25, 11, 21, 0.65, 34, 9, '优'],
  [3, 56, 7, 63, 0.3, 14, 5, '良'],
  [4, 33, 7, 29, 0.33, 16, 6, '优'],
  [5, 42, 24, 44, 0.76, 40, 16, '优'],
  [6, 82, 58, 90, 1.77, 68, 33, '良'],
  [7, 74, 49, 77, 1.46, 48, 27, '良'],
  [8, 78, 55, 80, 1.29, 59, 29, '良'],
  [9, 267, 216, 280, 4.8, 108, 64, '重度污染'],
  [10, 185, 127, 216, 2.52, 61, 27, '中度污染'],
  [11, 39, 19, 38, 0.57, 31, 15, '优'],
  [12, 41, 11, 40, 0.43, 21, 7, '优'],
  [13, 64, 38, 74, 1.04, 46, 22, '良'],
  [14, 108, 79, 120, 1.7, 75, 41, '轻度污染'],
  [15, 108, 63, 116, 1.48, 44, 26, '轻度污染'],
  [16, 33, 6, 29, 0.34, 13, 5, '优'],
  [17, 94, 66, 110, 1.54, 62, 31, '良'],
  [18, 186, 142, 192, 3.88, 93, 79, '中度污染'],
  [19, 57, 31, 54, 0.96, 32, 14, '良'],
  [20, 22, 8, 17, 0.48, 23, 10, '优'],
  [21, 39, 15, 36, 0.61, 29, 13, '优'],
  [22, 94, 69, 114, 2.08, 73, 39, '良'],
  [23, 99, 73, 110, 2.43, 76, 48, '良'],
  [24, 31, 12, 30, 0.5, 32, 16, '优'],
  [25, 42, 27, 43, 1, 53, 22, '优'],
  [26, 154, 117, 157, 3.05, 92, 58, '中度污染'],
  [27, 234, 185, 230, 4.09, 123, 69, '重度污染'],
  [28, 160, 120, 186, 2.77, 91, 50, '中度污染'],
  [29, 134, 96, 165, 2.76, 83, 41, '轻度污染'],
  [30, 52, 24, 60, 1.03, 50, 21, '良'],
  [31, 46, 5, 49, 0.28, 10, 6, '优']
];
const dataGZ = [
  [1, 26, 37, 27, 1.163, 27, 13, '优'],
  [2, 85, 62, 71, 1.195, 60, 8, '良'],
  [3, 78, 38, 74, 1.363, 37, 7, '良'],
  [4, 21, 21, 36, 0.634, 40, 9, '优'],
  [5, 41, 42, 46, 0.915, 81, 13, '优'],
  [6, 56, 52, 69, 1.067, 92, 16, '良'],
  [7, 64, 30, 28, 0.924, 51, 2, '良'],
  [8, 55, 48, 74, 1.236, 75, 26, '良'],
  [9, 76, 85, 113, 1.237, 114, 27, '良'],
  [10, 91, 81, 104, 1.041, 56, 40, '良'],
  [11, 84, 39, 60, 0.964, 25, 11, '良'],
  [12, 64, 51, 101, 0.862, 58, 23, '良'],
  [13, 70, 69, 120, 1.198, 65, 36, '良'],
  [14, 77, 105, 178, 2.549, 64, 16, '良'],
  [15, 109, 68, 87, 0.996, 74, 29, '轻度污染'],
  [16, 73, 68, 97, 0.905, 51, 34, '良'],
  [17, 54, 27, 47, 0.592, 53, 12, '良'],
  [18, 51, 61, 97, 0.811, 65, 19, '良'],
  [19, 91, 71, 121, 1.374, 43, 18, '良'],
  [20, 73, 102, 182, 2.787, 44, 19, '良'],
  [21, 73, 50, 76, 0.717, 31, 20, '良'],
  [22, 84, 94, 140, 2.238, 68, 18, '良'],
  [23, 93, 77, 104, 1.165, 53, 7, '良'],
  [24, 99, 130, 227, 3.97, 55, 15, '良'],
  [25, 146, 84, 139, 1.094, 40, 17, '轻度污染'],
  [26, 113, 108, 137, 1.481, 48, 15, '轻度污染'],
  [27, 81, 48, 62, 1.619, 26, 3, '良'],
  [28, 56, 48, 68, 1.336, 37, 9, '良'],
  [29, 82, 92, 174, 3.29, 0, 13, '良'],
  [30, 106, 116, 188, 3.628, 101, 16, '轻度污染'],
  [31, 118, 50, 0, 1.383, 76, 11, '轻度污染']
];
const dataSH = [
  [1, 91, 45, 125, 0.82, 34, 23, '良'],
  [2, 65, 27, 78, 0.86, 45, 29, '良'],
  [3, 83, 60, 84, 1.09, 73, 27, '良'],
  [4, 109, 81, 121, 1.28, 68, 51, '轻度污染'],
  [5, 106, 77, 114, 1.07, 55, 51, '轻度污染'],
  [6, 109, 81, 121, 1.28, 68, 51, '轻度污染'],
  [7, 106, 77, 114, 1.07, 55, 51, '轻度污染'],
  [8, 89, 65, 78, 0.86, 51, 26, '良'],
  [9, 53, 33, 47, 0.64, 50, 17, '良'],
  [10, 80, 55, 80, 1.01, 75, 24, '良'],
  [11, 117, 81, 124, 1.03, 45, 24, '轻度污染'],
  [12, 99, 71, 142, 1.1, 62, 42, '良'],
  [13, 95, 69, 130, 1.28, 74, 50, '良'],
  [14, 116, 87, 131, 1.47, 84, 40, '轻度污染'],
  [15, 108, 80, 121, 1.3, 85, 37, '轻度污染'],
  [16, 134, 83, 167, 1.16, 57, 43, '轻度污染'],
  [17, 79, 43, 107, 1.05, 59, 37, '良'],
  [18, 71, 46, 89, 0.86, 64, 25, '良'],
  [19, 97, 71, 113, 1.17, 88, 31, '良'],
  [20, 84, 57, 91, 0.85, 55, 31, '良'],
  [21, 87, 63, 101, 0.9, 56, 41, '良'],
  [22, 104, 77, 119, 1.09, 73, 48, '轻度污染'],
  [23, 87, 62, 100, 1, 72, 28, '良'],
  [24, 168, 128, 172, 1.49, 97, 56, '中度污染'],
  [25, 65, 45, 51, 0.74, 39, 17, '良'],
  [26, 39, 24, 38, 0.61, 47, 17, '优'],
  [27, 39, 24, 39, 0.59, 50, 19, '优'],
  [28, 93, 68, 96, 1.05, 79, 29, '良'],
  [29, 188, 143, 197, 1.66, 99, 51, '中度污染'],
  [30, 174, 131, 174, 1.55, 108, 50, '中度污染'],
  [31, 187, 143, 201, 1.39, 89, 53, '中度污染']
];
const schema = [
  { name: 'date', index: 0, text: '日' },
  { name: 'AQIindex', index: 1, text: 'AQI指数' },
  { name: 'PM25', index: 2, text: 'PM2.5' },
  { name: 'PM10', index: 3, text: 'PM10' },
  { name: 'CO', index: 4, text: '一氧化碳（CO）' },
  { name: 'NO2', index: 5, text: '二氧化氮（NO2）' },
  { name: 'SO2', index: 6, text: '二氧化硫（SO2）' }
];
const itemStyle = {
  opacity: 0.8,
  shadowBlur: 10,
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowColor: 'rgba(0,0,0,0.3)'
};
option = {
  color: ['#dd4444', '#fec42c', '#80F1BE'],
  legend: {
    top: 10,
    data: ['北京', '上海', '广州'],
    textStyle: {
      fontSize: 16
    }
  },
  grid: {
    left: '10%',
    right: 150,
    top: '18%',
    bottom: '10%'
  },
  tooltip: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    formatter: function (param) {
      var value = param.value;
      // prettier-ignore
      return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + param.seriesName + ' ' + value[0] + '日：'
                + value[7]
                + '</div>'
                + schema[1].text + '：' + value[1] + '<br>'
                + schema[2].text + '：' + value[2] + '<br>'
                + schema[3].text + '：' + value[3] + '<br>'
                + schema[4].text + '：' + value[4] + '<br>'
                + schema[5].text + '：' + value[5] + '<br>'
                + schema[6].text + '：' + value[6] + '<br>';
    }
  },
  xAxis: {
    type: 'value',
    name: '日期',
    nameGap: 16,
    nameTextStyle: {
      fontSize: 16
    },
    max: 31,
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    name: 'AQI指数',
    nameLocation: 'end',
    nameGap: 20,
    nameTextStyle: {
      fontSize: 16
    },
    splitLine: {
      show: false
    }
  },
  visualMap: [
    {
      left: 'right',
      top: '10%',
      dimension: 2,
      min: 0,
      max: 250,
      itemWidth: 30,
      itemHeight: 120,
      calculable: true,
      precision: 0.1,
      text: ['圆形大小：PM2.5'],
      textGap: 30,
      inRange: {
        symbolSize: [10, 70]
      },
      outOfRange: {
        symbolSize: [10, 70],
        color: ['rgba(255,255,255,0.4)']
      },
      controller: {
        inRange: {
          color: ['#c23531']
        },
        outOfRange: {
          color: ['#999']
        }
      }
    },
    {
      left: 'right',
      bottom: '5%',
      dimension: 6,
      min: 0,
      max: 50,
      itemHeight: 120,
      text: ['明暗：二氧化硫'],
      textGap: 30,
      inRange: {
        colorLightness: [0.9, 0.5]
      },
      outOfRange: {
        color: ['rgba(255,255,255,0.4)']
      },
      controller: {
        inRange: {
          color: ['#c23531']
        },
        outOfRange: {
          color: ['#999']
        }
      }
    }
  ],
  series: [
    {
      name: '北京',
      type: 'scatter',
      itemStyle: itemStyle,
      data: dataBJ
    },
    {
      name: '上海',
      type: 'scatter',
      itemStyle: itemStyle,
      data: dataSH
    },
    {
      name: '广州',
      type: 'scatter',
      itemStyle: itemStyle,
      data: dataGZ
    }
  ]
};
	if (option && typeof option === "object") {
    myChart.setOption(option, true);};
}
*/
function Forth(myChart)
 {
	/*	// prettier-ignore
const hours = [
    '12a', '1a', '2a', '3a', '4a', '5a', '6a',
    '7a', '8a', '9a', '10a', '11a',
    '12p', '1p', '2p', '3p', '4p', '5p',
    '6p', '7p', '8p', '9p', '10p', '11p'
];
// prettier-ignore
const days = [
    'Saturday', 'Friday', 'Thursday',
    'Wednesday', 'Tuesday', 'Monday', 'Sunday'
];
// prettier-ignore
const data = [[0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]];
const title = [];
const singleAxis = [];
const series = [];
days.forEach(function (day, idx) {
  title.push({
    textBaseline: 'middle',
    top: ((idx + 0.5) * 100) / 7 + '%',
    text: day
  });
  singleAxis.push({
    left: 150,
    type: 'category',
    boundaryGap: false,
    data: hours,
    top: (idx * 100) / 7 + 5 + '%',
    height: 100 / 7 - 10 + '%',
    axisLabel: {
      interval: 2
    }
  });
  series.push({
    singleAxisIndex: idx,
    coordinateSystem: 'singleAxis',
    type: 'scatter',
    data: [],
    symbolSize: function (dataItem) {
      return dataItem[1] * 4;
    }
  });
});
data.forEach(function (dataItem) {
  series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
});
option = {
  tooltip: {
    position: 'top'
  },
  title: title,
  singleAxis: singleAxis,
  series: series
};*/
// prettier-ignore
const hours = [
    '1982', '1983', '1984', '1985', '1986', '1987', '1988',
    '1989', '1990', '1991', '1992', '1993',
    '1994', '1995', '1996', '1997', '1998', '1999',
    '2000', '2001', '2002', '2003', '2004', '2005',
    '2006', '2007', '2008', '2009', '2010', '2011',
    '2012', '2013', '2014', '2015', '2016', '2017',
    '2018', '2019', '2020'
];
// prettier-ignore
const days = [
    'length'
];
// prettier-ignore
//const data = [[0,0,4.9],[0,1,4.6],[0,2,2.8],[0,3,5.2],[0,4,4.6],[0,5,4.9],[0,6,4.2],[0,7,5.1],[0,8,4.3],[0,9,3.9],[0,10,4.5],[0,11,5.1],[0,12,4.4],[0,13,3.9],[0,14,5.1],[0,15,5.3],[0,16,4.3],[0,17,4.3],[0,18,4.6],[0,19,3.6],[0,20,0],[0,21,5.1],[0,22,2.4],[0,23,4.8],[0,24,4.3],[0,25,4.5],[0,26,5.2],[0,27,0],[0,28,3.1],[0, 29, 5.0],[0,30,4.9],[0,31,0],[0,32,4.5],[0,33,4.1],[0, 34, 5.2],[0,35,3.9],[0,36,0],[0,37,4.7],[0,38,4.5]]
  //  .map(function (item) {
  //  return [item[1], item[0], item[2]];

    const data = [[0,0,5.88],[0,1,4.6],[0,2,1.68],[0,3,8.32],[0,4,4.6],[0,5,5.88],[0,6,3,36],[0,7,8.16],[0,8,3.44],[0,9,3.12],[0,10,4.5],[0,11,8.16],[0,12,3.52],[0,13,3.12],[0,14,8.16],[0,15,8.5],[0,16,3.44],[0,17,3.44],[0,18,4.6],[0,19,2.88],[0,20,0],[0,21,8.16],[0,22,1.44],[0,23,5.8],[0,24,3.44],[0,25,4.5],[0,26,8.32],[0,27,0],[0,28,1.86],[0, 29, 8],[0,30,5.88],[0,31,0],[0,32,4.5],[0,33,4.1],[0, 34, 8.32],[0,35,3.12],[0,36,0],[0,37,4.7],[0,38,4.5]]
    .map(function (item) {
    return [item[1], item[0], item[2]];

});
option = {
  color: [
    '#5470c6',
    '#91cc75',
    '#fac858',
    '#ee6666',
    '#73c0de',
    '#3ba272',
    '#fc8452',
    '#9a60b4',
    '#ea7ccc',
    '#546570',
    '#c4ccd3'
  ],
  title: {
    text: '-----------'
  },
  legend: {
    data: ['年份'],
    left: 'right'
  },
  tooltip: {
    position: 'top',
    formatter: function (params) {
      return (
        params.value[2] +
        ' commits in ' +
        hours[params.value[0]] +
        ' of ' +
        days[params.value[1]]
      );
    }
  },
  grid: {
    left: 2,
    bottom: 10,
    right: 10,
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: hours,
    boundaryGap: false,
    splitLine: {
      show: true
    },
    axisLine: {
      show: false
    }
  },
  yAxis: {
    type: 'category',
    data: days,
    axisLine: {
      show: false
    }
  },
  series: [
    {
      name: '年份',
      type: 'scatter',
      symbolSize: function (val) {
        return val[2] * 2;
      },
      data: data,
      animationDelay: function (idx) {
        return idx * 5;
      }
    }
  ]
};

	if (option && typeof option === "object") {
    myChart.setOption(option, true);};
 }




function Fifth(myChart1)
 {
		myChart1.showLoading();
        $.getJSON('les.json', function (graph) {
        myChart1.hideLoading();
        graph.nodes.forEach(function (node) {
        node.label = {
           show: node.symbolSize > 30
        };
        });
        option = {
        title: {
        text: 'Les Miserables',
      subtext: 'Circular layout',
      top: 'bottom',
      left: 'right'
    },
    tooltip: {},
    legend: [
      {
        data: graph.categories.map(function (a) {
          return a.name;
        })
      }
    ],
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        name: 'Les Miserables',
        type: 'graph',
        layout: 'circular',
        circular: {
          rotateLabel: true
        },
        data: graph.nodes,
        links: graph.links,
        categories: graph.categories,
        roam: true,
        label: {
          position: 'right',
          formatter: '{b}'
        },
        lineStyle: {
          color: 'source',
          curveness: 0.3
        }
      }
    ]
  };
  myChart1.setOption(option);
});

 if (option && typeof option === "object") {
    myChart1.setOption(option, true);};
}






function Sixth(myChart)
 {
myChart.showLoading();
$.get( 'NewData.json', function (data) {
  myChart.hideLoading();
  var itemStyle = {
    opacity: 0.99
  };
  var sizeFunction = function (x) {
    var y = Math.sqrt(x / 5e8) + 0.1;
    return y * 80;
  };
  // Schema:
  var schema = [
    { name: 'Income', index: 0, text: '人均收入', unit: '美元' },
    { name: 'LifeExpectancy', index: 1, text: '人均寿命', unit: '岁' },
    { name: 'Population', index: 2, text: '总人口', unit: '' },
    { name: 'Country', index: 3, text: '国家', unit: '' }
  ];
  option = {
    baseOption: {
      timeline: {
        axisType: 'category',
        orient: 'vertical',
        autoPlay: true,
        inverse: true,
        playInterval: 1000,
        left: null,
        right: 0,
        top: 0,
        bottom: 20,
        width: 55,
        height: null,
        symbol: 'none',
        checkpointStyle: {
          borderWidth: 3
        },
        controlStyle: {
          showNextBtn: false,
          showPrevBtn: false
        },
        data: []
      },
      title: [
        {
          text: data.timeline[0],
          textAlign: 'center',
          left: '63%',
          top: '55%',
          textStyle: {
            fontSize: 60
          }
        },
        {
          text: '各国人均寿命与GDP关系演变',
          left: 'center',
          top: 10,
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16
          }
        }
      ],
      tooltip: {
        padding: 5,
        borderWidth: 1,
        formatter: function (obj) {
          var value = obj.value;
          // prettier-ignore
          return schema[3].text + '：' + value[3] + '<br>'
                        + schema[1].text + '：' + value[1] + schema[1].unit + '<br>'
                        + schema[0].text + '：' + value[0] + schema[0].unit + '<br>'
                        + schema[2].text + '：' + value[2] + '<br>';
        }
      },
      grid: {
        top: 100,
        containLabel: true,
        left: 30,
        right: '110'
      },
      xAxis: {
        type: 'log',
        name: '人均收入',
        max: 100000,
        min: 300,
        nameGap: 25,
        nameLocation: 'middle',
        nameTextStyle: {
          fontSize: 10
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          formatter: '{value} $'
        }
      },
      yAxis: {
        type: 'value',
        name: '平均寿命',
        max: 100,
        nameTextStyle: {
          fontSize: 10
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          formatter: '{value} 岁'
        }
      },
      visualMap: [
        {
          show: false,
          dimension: 3,
          categories: data.counties,
          inRange: {
            color: (function () {
              // prettier-ignore
              var colors = ['#51689b', '#ce5c5c', '#fbc357', '#8fbf8f', '#659d84', '#fb8e6a', '#c77288', '#786090', '#91c4c5', '#6890ba'];
              return colors.concat(colors);
            })()
          }
        }
      ],
      series: [
        {
          type: 'scatter',
          itemStyle: itemStyle,
          data: data.series[0],
          symbolSize: function (val) {
            return sizeFunction(val[2]);
          }
        }
      ],
      animationDurationUpdate: 1000,
      animationEasingUpdate: 'quinticInOut'
    },
    options: []
  };
  for (var n = 0; n < data.timeline.length; n++) {
    option.baseOption.timeline.data.push(data.timeline[n]);
    option.options.push({
      title: {
        show: true,
        text: data.timeline[n] + ''
      },
      series: {
        name: data.timeline[n],
        type: 'scatter',
        itemStyle: itemStyle,
        data: data.series[n],
        symbolSize: function (val) {
          return sizeFunction(val[2]);
        }
      }
    });
  }
  myChart.setOption(option);
});

	/*if (option && typeof option === "object") {
    myChart.setOption(option, true);};*/
}

function Seventh(myChart)
 {
		myChart.showLoading();
$.getJSON( 'data.json', function (graph) {
  myChart.hideLoading();
  graph.nodes.forEach(function (node) {
    node.label = {
      show: node.symbolSize > 30
    };
  });
  option = {
    title: {
      text: 'Les Miserables',
      subtext: 'Default layout',
      top: 'bottom',
      left: 'right'
    },
    tooltip: {},
    legend: [
      {
        // selectedMode: 'single',
        data: graph.categories.map(function (a) {
          return a.name;
        })
      }
    ],
    animationDuration: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        name: 'Les Miserables',
        type: 'graph',
        layout: 'none',
        data: graph.nodes,
        links: graph.links,
        categories: graph.categories,
        roam: true,
        label: {
          position: 'right',
          formatter: '{b}'
        },
        lineStyle: {
          color: 'source',
          curveness: 0.3
        },
        emphasis: {
          focus: 'adjacency',
          lineStyle: {
            width: 10
          }
        }
      }
    ]
  };
  myChart.setOption(option);
});

 if (option && typeof option === "object") {
    myChart.setOption(option, true);};
}

/*
function Hunhetu(myChart){
  $.get( '1.json',
  function (_rawData) {
    run(_rawData);
  }
);
function run(_rawData) {
  // var countries = ['Australia', 'Canada', 'China', 'Cuba', 'Finland', 'France', 'Germany', 'Iceland', 'India', 'Japan', 'North Korea', 'South Korea', 'New Zealand', 'Norway', 'Poland', 'Russia', 'Turkey', 'United Kingdom', 'United States'];
  const countries = [
    'Finland',
    'France',
    'Germany',
    'Iceland',
    'Norway',
    'Poland',
    'Russia',
    'United Kingdom'
  ];
  const datasetWithFilters = [];
  const seriesList = [];
  echarts.util.each(countries, function (country) {
    var datasetId = 'dataset_' + country;
    datasetWithFilters.push({
      id: datasetId,
      fromDatasetId: 'dataset_raw',
      transform: {
        type: 'filter',
        config: {
          and: [
            { dimension: 'Year', gte: 1950 },
            { dimension: 'Country', '=': country }
          ]
        }
      }
    });
    seriesList.push({
      type: 'line',
      datasetId: datasetId,
      showSymbol: false,
      name: country,
      endLabel: {
        show: true,
        formatter: function (params) {
          return params.value[3] + ': ' + params.value[0];
        }
      },
      labelLayout: {
        moveOverlap: 'shiftY'
      },
      emphasis: {
        focus: 'series'
      },
      encode: {
        x: 'Year',
        y: 'Income',
        label: ['Country', 'Income'],
        itemName: 'Year',
        tooltip: ['Income']
      }
    });
  });
  option = {
    animationDuration: 10000,
    dataset: [
      {
        id: 'dataset_raw',
        source: _rawData
      },
      ...datasetWithFilters
    ],
    title: {
      text: 'Income of Germany and France since 1950'
    },
    tooltip: {
      order: 'valueDesc',
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      nameLocation: 'middle'
    },
    yAxis: {
      name: 'Income'
    },
    grid: {
      right: 140
    },
    series: seriesList
  };
  myChart.setOption(option);
}
  if (option && typeof option === "object") {
    myChart.setOption(option, true);};
}
*/

function eighth(myChart)
 {
 backgroundColor:'rgba(255, 255, 255, 0.5)',

	option = {
  color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
  title: {
    text: ''
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
    data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5','Line6']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  textStyle:{color:'rgba(255, 255, 255, 0.9)'},
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['1983','1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019','2020']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Line 1',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.99,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(128, 255, 165)'
          },
          {
            offset: 1,
            color: 'rgba(1, 191, 236)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [26,27,28,29,28,27,28,28,28,30,29,27,28,29,29,24,28,28,28,30,28,28,29,25,29,29,30,29,27,26,30,25,28,29,29,29,29,29]
    },
    {
      name: 'Line 2',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.99,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(0, 221, 255)'
          },
          {
            offset: 1,
            color: 'rgba(77, 119, 255)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [15.38,11.11,7.14,3.45,7.14,11.11,7.14,7.14,7.14,0,3.45,11.11,7.14,3.45,3.45,25,7.14,7.14,7.14,0,7.14,7.14,3.45,20,3.45,3.45,0,3.45,11.11,15.38,0,20,7.14,3.45,3.45,3.45,3.45,3.45]
    },
    {
      name: 'Line 3',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.99,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(55, 162, 255)'
          },
          {
            offset: 1,
            color: 'rgba(116, 21, 219)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [4,3,2,1,2,3,2,2,2,0,1,3,2,1,1,6,2,2,2,0,2,2,1,5,1,1,0,1,3,4,0,5,2,1,1,1,1,1]
    },
{
      name: 'Line 4',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.99,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(0, 21, 55)'
          },
          {
            offset: 1,
            color: 'rgba(77, 119, 55)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,2,1,3,1,0,0,0,2,2,0,1,0,0,0,0,1,0]
    },{
      name: 'Line 5',
      type: 'line',
      stack: 'Total',
      smooth: true,
      lineStyle: {
        width: 0
      },
      showSymbol: false,
      areaStyle: {
        opacity: 0.99,
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgba(0, 221, 25)'
          },
          {
            offset: 1,
            color: 'rgba(77, 119, 25)'
          }
        ])
      },
      emphasis: {
        focus: 'series'
      },
      data: [1,1,0,1,2,1,1,1,0,0,1,0,2,0,0,2,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,3,2,0,0,0,0,1,3]
    }
  ]
};
	if (option && typeof option === "object") {
    myChart.setOption(option, true);};
 }


