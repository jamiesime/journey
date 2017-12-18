var SpecialEventRender = function(member, eventText, imgUrl){
  this.render(member, eventText, imgUrl);
}

SpecialEventRender.prototype = {

  render: function(member, eventText, imgUrl){
    var modal = document.getElementById("special-event-invisible");
    modal.innerHTML = "";
    modal.id = "special-event-display";
    var content = document.createElement("div");
    content.id = "special-event-content";
    modal.appendChild(content);
    if(imgUrl != null || undefined){
      renderImg(content, imgUrl);
    }
    if(member != null || undefined){
      renderMemberInfo(content, member, eventText);
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

var renderMemberInfo = function(content, member){
  var name = document.createElement("p");
  name.innerText = member[0];
  var age = document.createElement("p");
  age.innerText = "Age: " + member[1];
  var health = document.createElement("p");
  health.innerText = "Health: " + member[2];
  content.appendChild(name);
  content.appendChild(age);
  content.appendChild(health);
}

module.exports = SpecialEventRender;
