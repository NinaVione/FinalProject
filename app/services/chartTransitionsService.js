app.service('chartTransitions', function() {

  'use strict';

  this.transition = function(entering, chart, transitions, config) {
    var onEnter = entering.transition();
    var transition = chart.transition();
    var exit = chart.exit();
    var onExit = exit.transition();

    if (transitions.onEnter) onEnter.call(transitions.onEnter.bind(onEnter, config));
    if (transitions.onTransition) transition.call(transitions.onTransition.bind(transition, config));
    if (transitions.onExit) onExit.call(transitions.onExit.bind(onExit, config));
  };
});