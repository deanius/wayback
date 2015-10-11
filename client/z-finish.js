Template.finish.onRendered(() => {
  chartUpdater = Tracker.autorun(() => {
    theRun.passedWaypoints().depend()
    //console.table(theRun.surplusHistory())
    drawChart(theRun.surplusHistory())
  })
})

function drawChart (chartData) {

var chart = AmCharts.makeChart("chartdiv", {
    "theme": "light",
    "type": "serial",
    "dataProvider": chartData,
    "valueAxes": [{
      "inside":true,
      "axisAlpha": 0
    }],
    "graphs": [{
      "id":"g1",
      "balloonText": "<div style='margin:5px; font-size:19px;'><span style='font-size:13px;'>[[category]]</span><br>[[value]]</div>",
      "bullet": "round",
      "bulletBorderAlpha": 1,
      "bulletBorderColor": "#FFFFFF",
      "hideBulletsCount": 50,
      "lineThickness": 2,
      "lineColor": "#0f0",
      "negativeLineColor": "#f00",
      "valueField": "cumulativeSurplus"
    }],
    "chartScrollbar": {

    },
    "chartCursor": {},
    "categoryField": "elapsedDistance",
    "categoryAxis": {
      "axisAlpha": 0
    }
});

}
