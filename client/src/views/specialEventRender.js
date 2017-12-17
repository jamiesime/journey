var SpecialEventRender = function(){
  this.render();
}

SpecialEventRender.prototype = {

  render: function(){
    var modal = document.getElementById("special-event-invisible");
    modal.innerHTML = "";
    modal.id = "special-event-display";
    var content = document.createElement("div");
    content.id = "special-event-content";
    modal.appendChild(content);
    var test = document.createElement("p");
    test.innerText = "this is just some test text";
    content.appendChild(test);
    var close = document.createElement("button");
    close.id = "special-event-close";
    close.innerText = "Ok";
    close.addEventListener("click", function(){
      modal.id = "special-event-invisible";
    });
    content.appendChild(close);
  }

}

module.exports = SpecialEventRender;
