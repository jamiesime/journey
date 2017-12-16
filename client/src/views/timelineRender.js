var TimelineRender = function(event){
  this.render(event);
}

TimelineRender.prototype = {
  render: function(event){
    var timeline = document.getElementById('timeline');
    var timelineObject = document.createElement('div');
    var joiner = document.createElement('div');
    joiner.className = "joiner";
    timelineObject.className = "timeline-object";
    timeline.appendChild(joiner);
    timeline.appendChild(timelineObject);
  }
};

module.exports = TimelineRender;
