var SubMenuRender = function(){
  this.render();
}

SubMenuRender.prototype = {

  render: function(){
    container = document.getElementById("sidebar-menu");
    container.innerHTML = "";
    eventBtn = document.createElement("button");
    eventBtn.classList += "menu-btn";
    eventBtn.id = "event-btn";
    eventBtn.innerText = "Event";
    familyBtn = document.createElement("button");
    familyBtn.classList += "menu-btn";
    familyBtn.id = "family-btn";
    familyBtn.innerText = "Family";
    logBtn = document.createElement("button");
    logBtn.classList += "menu-btn";
    logBtn.id = "log-btn";
    logBtn.innerText = "Log";
    moneyDisplay = document.createElement("div");
    moneyCount = document.createElement("p");
    moneyIcon = document.createElement("img");
    moneyIcon.src = "./images/money.png";
    moneyCount.innerText = money;
    moneyDisplay.appendChild(moneyIcon);
    moneyDisplay.appendChild(moneyCount);
    moneyDisplay.id = "money-display";
    container.appendChild(eventBtn);
    container.appendChild(familyBtn);
    container.appendChild(logBtn);
    container.appendChild(moneyDisplay);
  }

}

module.exports = SubMenuRender;
