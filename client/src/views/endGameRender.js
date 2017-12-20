var EndGameRender = function(eventText, imgUrl){
  this.render(eventText, imgUrl);
}

EndGameRender.prototype = {

  render: function(eventText, imgUrl){
    var container = document.getElementById("special-event-invisible");
    container.id = "special-event-display";
    container.innerHTML = "";
    container.style.backgroundColor = "rgba(0,0,0,0.9)";
    var content = document.createElement("div");
    content.id = "modal-content";
    renderDisplayWindow(content);
    renderEventText(eventText, content);
    renderButton(content);
    container.appendChild(content);
  }

}

var renderDisplayWindow = function(content){

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
