document.write("<script type='text/javascript' src='./JS文件/echarts.min.js'></script>"); 
// https://blog.csdn.net/zhang__ao/article/details/80745873 // 参考文章


function table1(myChart)
 {
	myChart.showLoading();
$.getJSON('1.json', function (graph) {
  myChart.hideLoading();
  graph.nodes.forEach(function (node) {
    node.label = {
      show: node.symbolSize > 5
    };
  });
  option = {
  color:['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
    title: {
      text: 'Data Visualization',
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
  myChart.setOption(option);
});

	if (option && typeof option === "object") {
    myChart.setOption(option, true);};
}



