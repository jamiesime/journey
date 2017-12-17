var SpecialEventRender = function(memberName, eventText, imgUrl){
  this.render(memberName, eventText, imgUrl);
}

SpecialEventRender.prototype = {

  render: function(memberName, eventText, imgUrl){
    var modal = document.getElementById("special-event-invisible");
    modal.innerHTML = "";
    modal.id = "special-event-display";
    var content = document.createElement("div");
    content.id = "special-event-content";
    modal.appendChild(content);
    if(imgUrl != null || undefined){
      renderImg(content, imgUrl);
    }
    var text = document.createElement("p");
    text.innerText = eventText;
    content.appendChild(text);
    var close = document.createElement("button");
    close.id = "special-event-close";
    close.innerText = "Ok";
    close.addEventListener("click", function(){
      modal.id = "special-event-invisible";
    });
    content.appendChild(close);
  }

}

var renderImg = function(content, imgUrl){
  eventImg = document.createElement("img");
  eventImg.src = imgUrl;
  eventImg.classList += "family-sprite";
  content.appendChild(eventImg);
}

module.exports = SpecialEventRender;
