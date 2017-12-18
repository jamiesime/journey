var FamilyRender = function(family){
  this.render(family);
}

FamilyRender.prototype = {

  render: function(family){
    container = document.getElementById("sidebar-info-content");
    container.innerHTML = "";
    var header = document.createElement("h2");
    header.innerText = document.getElementById('userInput').value + " family";
    if(document.getElementById('userInput').value.length === 0){
      header.innerText = "Generic Family"
    }
    container.appendChild(header);
    familyContainer = document.createElement("div");
    familyContainer.id = "family-container";
    container.appendChild(familyContainer);
    renderEachMember(family);
    var distanceDiv = document.createElement('div');
    distanceDiv.id = "distance-display"
    var distanceCovered = document.createElement("p");
    distanceCovered.innerText = `Distance Travelled: ${kmCovered}km`;
    distanceDiv.appendChild(distanceCovered);
    container.appendChild(distanceDiv);
  }

}

var renderEachMember = function(family){
  family.members.forEach(function(member){
    memberFlex = document.createElement("div")
    memberFlex.style.display = "flex";
    memberFlex.style.flexDirection = "column";
    memberFlex.style.alignItems = "center";
    memberBox = document.createElement("div");
    memberBox.classList += "member-box";
    var healthBarContainer = document.createElement("div");
    var healthBar = document.createElement("div");

    healthBarContainer.style.position = "relative";
    healthBarContainer.style.backgroundColor = "#E68364";
    healthBar.style.position = "absolute";
    healthBar.style.backgroundColor = "#8DB255";
    healthBarContainer.style.height = "20px";
    healthBarContainer.style.borderRadius = "10px";
    healthBar.style.borderRadius = "10px";

    healthBar.style.height = "20px";
    healthBarContainer.style.width = "110px";
    healthBar.style.width = member.health + "%";

    var sprite = document.createElement("img");
    sprite.src = "./images/" + member.name + ".png";
    sprite.classList += "family-sprite";
    var name = document.createElement("p");
    name.innerText = member.name;
    var age = document.createElement("p");
    age.innerText = "Age: " + member.age;
    var health = document.createElement("p");
    health.innerText = "Health: " + member.health;

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
