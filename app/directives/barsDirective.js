app.directive('bars', ['chartTransitions',
  function(chartTransitions) {
    return {
      require: '^chart',
      scope: {},
      link: function($scope, element, attrs, ctrl) {

        var key = attrs.configKey || 'undefined';
        var transition = function(config) {
          this.duration(1000)
            .attr('opacity', 1)
            .attr("x", function(d) {
              return config.x(d.x);
            })
            .attr("width", config.x.rangeBand())
            .attr("y", function(d) {
              return config.y(d.y);
            })
            .attr("height", function(d) {
              return config.height - config.y(d.y);
            });
        };

        var exit = function(config) {
          this.duration(1000).remove();
        };

        var enter = function(config) {
          this.duration(1000).attr('opacity', 0);
        };

        function update(data) {
          var config = data.config,
            data = data.data;

          var bars = config.svg.selectAll(".bar")
            .data(data);

          var entered = bars.enter().append("rect")
            .attr('class', 'bar')
            .attr('opacity', 0);

          var transitions = {};
          transitions.onEnter = (config[key] && config[key].onEnter) ? config[key].onEnter : enter;
          transitions.onTransition = (config[key] && config[key].onTransition) ? config[key].onTransition : transition;
          transitions.onExit = (config[key] && config[key].onExit) ? config[key].onExit : exit;

          chartTransitions.transition(entered, bars, transitions, config);
        }

        ctrl.addListener(update.bind(this));
      }
    };
  }
]);