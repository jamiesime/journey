var FamilyRender = function(family, location){
  this.render(family, location);
}

FamilyRender.prototype = {

  render: function(family, location){
    container = document.getElementById("sidebar-info-content");
    container.innerHTML = "";
    var header = document.createElement("h2");
    header.innerText = family.name + " family";
    container.appendChild(header);
    familyContainer = document.createElement("div");
    familyContainer.id = "family-container";
    container.appendChild(familyContainer);
    renderEachMember(family, location);
    var distanceDiv = document.createElement('div');
    distanceDiv.id = "distance-display"
    var distanceCovered = document.createElement("p");
    distanceCovered.innerText = `Distance Travelled: ${kmCovered}km`;
    distanceDiv.appendChild(distanceCovered);
    container.appendChild(distanceDiv);
  }

}

var renderEachMember = function(family, location){
  family.members.forEach(function(member){
    memberFlex = document.createElement("div")
    memberFlex.classList += "member-container"
    memberFlex.style.alignItems = "center";
    memberBox = document.createElement("div");
    memberBox.classList += "member-box";
    var healthBarContainer = document.createElement("div");
    healthBarContainer.id = "health-bar-container";
    var healthBar = document.createElement("div");
    healthBar.id = "health-bar";

    healthBar.style.width = member.health + "%";

    var sprite = document.createElement("img");
    sprite.src = "./images/" + member.name + ".png";
    sprite.classList += "family-sprite";
    var name = document.createElement("p");
    name.innerText = member.name;
    var age = document.createElement("p");
    age.innerText = "Age: " + (location.events[0].date - member.born);
    var health = document.createElement("p");
    health.innerText = "Health: " + member.health;

    if(member.health > 95) {
      healthBar.style.borderRadius = "10px";
    } else {
      healthBar.style.borderRadius = "10px 0px 0px 10px";
    }

    healthBarContainer.appendChild(healthBar);
    memberBox.appendChild(sprite);
    memberBox.appendChild(name);
    memberBox.appendChild(age);
    memberBox.appendChild(health);
    memberFlex.appendChild(memberBox);
    memberFlex.appendChild(healthBarContainer);
    familyContainer.appendChild(memberFlex);
  })
}

module.exports = FamilyRender;
