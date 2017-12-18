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

      if(thisEvent.imgUrl != null || undefined){
        renderImg(content, thisEvent.imgUrl);
      }
      if(thisEvent.member != null || undefined){
        renderMemberInfo(content, thisEvent.member, locations);
      }

      var text = document.createElement("p");
      text.innerText = thisEvent.eventText;
      content.appendChild(text);

    });

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

var renderMemberInfo = function(content, member, locations){
  var name = document.createElement("p");
  name.innerText = member.name;
  var age = document.createElement("p");
  console.log(locations);
  age.innerText = "Age: " + (locations[currentPosition].events[currentEvent].date - member.born);
  var health = document.createElement("p");
  health.innerText = "Health: " + member.health;
  content.appendChild(name);
  content.appendChild(age);
  content.appendChild(health);
}

module.exports = ResultQueueRender;
