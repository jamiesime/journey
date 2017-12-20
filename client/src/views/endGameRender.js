var EndGameRender = function(eventText, header){
  this.render(eventText, header);
}

EndGameRender.prototype = {

  render: function(eventText, header){
    var container = document.getElementById("special-event-invisible");
    container.id = "special-event-display";
    container.innerHTML = "";
    container.style.backgroundColor = "rgba(0,0,0,0.9)";
    var content = document.createElement("div");
    content.id = "modal-content";
    renderHeader(header, content);
    renderEventText(eventText, content);
    renderButton(content);
    container.appendChild(content);
  }

}

var renderHeader = function(headerText, content){
  var header = document.createElement("h1");
  header.innerText = headerText;
  content.appendChild(header);
}

var renderEventText = function(eventText, content){
  var text = document.createElement("p");
  text.innerText = eventText
  content.appendChild(text);
}

var renderButton = function(content){
  var reloadBtn = document.createElement("button");
  reloadBtn.innerText = "Restart";
  reloadBtn.addEventListener("click", function(){
    window.location.reload();
  });
  content.appendChild(reloadBtn);
}

module.exports = EndGameRender;
