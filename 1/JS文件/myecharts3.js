document.write("<script type='text/javascript' src='./JS文件/echarts.min.js'></script>");
// https://blog.csdn.net/zhang__ao/article/details/80745873 // 参考文章




function Second(myChart)
 {

myChart.showLoading();
$.get( 'earth.json', function (data) {
  myChart.hideLoading();
  var itemStyle = {
    opacity: 0.85,
                color:'#B9B8CE',

  };
  var sizeFunction = function (x) {
    var y = Math.sqrt(x / 5e8) + 0.1;
    return y * 80;
  };
  // Schema:
  var schema = [
    { name: 'Income', index: 0, text: 'imcome', unit: '' },
    { name: 'LifeExpectancy', index: 1, text: 'life-expectancy', unit: '' },
    { name: 'Population', index: 2, text: 'population', unit: '' },
    { name: 'Country', index: 3, text: 'country', unit: '' }
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
        top: 20,
        bottom: 20,
        width: 55,
        height: null,
        symbol: 'none',
        checkpointStyle: {
          borderWidth: 2,
            color:'#B9B8CE',
        },
        controlStyle: {
          showNextBtn: false,
          showPrevBtn: false,
            color:'#B9B8CE',
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
            fontSize: 100,
            color:'#B9B8CE',
          }
        },
        {
          text: 'Evolution of the relationship between life expectancy and GDP in various countries',

          left: 'center',
          top: 10,
          textStyle: {
            fontWeight: 'normal',
            fontSize: 20,
            color:'#B9B8CE',
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
        right: '110',
                    color:'#B9B8CE',

      },
      xAxis: {
        type: 'log',
        name: 'income',
        max: 100000,
        min: 300,
        nameGap: 25,
        nameLocation: 'middle',
        nameTextStyle: {
          fontSize: 18,
            color:'#B9B8CE',
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          formatter: '${value} ',
            color:'#B9B8CE',
        }
      },
      yAxis: {
        type: 'value',
        name: 'life-expectancy',
        max: 100,
        nameTextStyle: {
          fontSize: 18,
            color:'#B9B8CE',
        },
        splitLine: {
          show: false,

        },
        axisLabel: {
          formatter: '{value} years old',
            color:'#B9B8CE',
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
if (option && typeof option === "object") {
    myChart.setOption(option, true);};
 }

