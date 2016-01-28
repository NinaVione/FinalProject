app.directive('axis', function() {
  return {
    require: '^chart',
    scope: {
      position: '@'
    },
    link: function($scope, element, attrs, ctrl) {

      function update(data) {
        var config = data.config,
          data = data.data;
        var transition = config.svg.transition().duration(1000).transition();

        if (attrs.position === 'bottom') {
          transition.selectAll("g.x.axis")
            .attr("transform", "translate(0," + config.height + ")")
            .call(config.xAxis);
        } else if (attrs.position === 'left') {
          transition.selectAll("g.y.axis")
            .call(config.yAxis);
        }
      }

      ctrl.addListener(update.bind(this));
    }
  };
});