var ResultQueueRender = function(eventQueue, locations){
  this.render(eventQueue, locations);
}


ResultQueueRender.prototype = {

  render: function(eventQueue, locations){
    var modal = document.getElementById("special-event-invisible");
    modal.innerHTML = "";
    modal.id = "special-event-display";
    var content = document.createElement("div");
    content.id = "special-event-content";
    modal.appendChild(content);

    eventQueue.forEach(function(thisEvent){
      subEventContent = document.createElement("div");
      subEventContent.id = "sub-event-content";
      if(thisEvent.imgUrl != null || undefined){
        renderImg(subEventContent, thisEvent.imgUrl);
      }
      if(thisEvent.extraImgUrl != null || undefined){
        renderImg(subEventContent, thisEvent.extraImgUrl);
      }
      renderEventText(subEventContent, thisEvent.eventText);
      content.appendChild(subEventContent);
    });

    renderButton(content, modal);
  }

}

var renderImg = function(content, imgUrl){
  eventImg = document.createElement("img");
  eventImg.src = imgUrl;
  // eventImg.classList += "family-sprite";
  eventImg.id = "event-sprite";
  content.appendChild(eventImg);
}

var renderEventText = function(content, eventText){
  var text = document.createElement("p");
  text.innerText = eventText;
  text.id = "event-text";
  content.appendChild(text);
}

var renderButton = function(content, modal){
  var close = document.createElement("button");
  close.id = "special-event-close";
  close.innerText = "Ok";
  close.addEventListener("click", function(){
    modal.id = "special-event-invisible";
  });
  document.addEventListener('keypress', (event) => {
    const keyName = event.key;
    modal.id = "special-event-invisible";
  });
  //
  // if (gameOver == true) {
  //   close.innerText = "Restart Game";
  //   close.addEventListener("click", function(){
  //     window.location.reload;
  //   });
  // }
  content.appendChild(close);
}

module.exports = ResultQueueRender;
