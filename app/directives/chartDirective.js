app.directive('chart', function() {

  'use strict';
  
  return {
    replace: true,
    controller: 'chartController',
    controllerAs: 'ctrl',
    bindToController: true,
    link: function($scope, element, attrs, ctrl) {

      function getDefaultConfig() {
        var margin = {
          top: 20,
          right: 20,
          bottom: 20,
          left: 40
        },
          width = 500 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom,
          config = {};

        config.margin = margin;
        config.height = height;
        config.width = width;

        return config;
      }

      var config = $scope.ctrl.config = angular.extend(getDefaultConfig(), $scope.ctrl.config || {});
      var svg = config.svg = d3.select(element[0]).append("svg")
        .attr("width", config.width + config.margin.left + config.margin.right)
        .attr("height", config.height + config.margin.top + config.margin.bottom)
        .append("g")
        .attr("transform", "translate(" + config.margin.left + "," + config.margin.top + ")");


      config.x = d3.scale.ordinal().rangeRoundBands([0, config.width], .05);
      config.y = d3.scale.linear().range([config.height, 0]);
      config.axisX = svg.append("g").attr("class", "x axis");
      config.axisY = svg.append("g").attr("class", "y axis");

      function notify() {
        var data = $scope.ctrl.data || {};

        config.xAxis = d3.svg.axis()
          .scale(config.x)
          .orient("bottom");

        config.yAxis = d3.svg.axis()
          .scale(config.y)
          .orient("left");

        config.x.domain(data.map(function(d) {
          return d.x;
        }));
        config.y.domain([0, d3.max(data, function(d) {
          return d.y;
        })]);

        ctrl.notify({
          data: data,
          config: config
        });
      }

      $scope.$watch('ctrl.data', notify);
    },
    scope: {
      data: '=',
      config: '='
    }
  };
});