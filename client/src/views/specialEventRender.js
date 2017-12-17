var SpecialEventRender = function(){
  this.render();
}

SpecialEventRender.prototype = {

  render: function(){
    var modal = document.getElementById("special-event-modal");
    modal.id = "special-event-display";
    var content = document.createElement("div");
    content.id = "special-event-content";
    modal.appendChild(content);
    var test = document.createElement("p");
    test.innerText = "this is just some test text";
    content.appendChild(test);
  }

}

module.exports = SpecialEventRender;
