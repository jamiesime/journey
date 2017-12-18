var FamilyRender = function(family){
  this.render(family);
}

FamilyRender.prototype = {

  render: function(family){
    container = document.getElementById("sidebar-info-content");
    container.innerHTML = "";
    var header = document.createElement("h2");
    header.innerText = document.getElementById('userInput').value;
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
    memberBox = document.createElement("div");
    memberBox.classList += "member-box";
    var sprite = document.createElement("img");
    sprite.src = "./images/" + member.name + ".png";
    sprite.classList += "family-sprite";
    var name = document.createElement("p");
    name.innerText = member.name;
    var age = document.createElement("p");
    age.innerText = "Age: " + member.age;
    var health = document.createElement("p");
    health.innerText = "Health: " + member.health;
    memberBox.appendChild(sprite);
    memberBox.appendChild(name);
    memberBox.appendChild(age);
    memberBox.appendChild(health);
    familyContainer.appendChild(memberBox);
  })
}

module.exports = FamilyRender;
