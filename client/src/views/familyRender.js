var FamilyRender = function(family){
  this.render(family);
}

FamilyRender.prototype = {

  render: function(family){
    container = document.getElementById("sidebar-info");
    content = document.getElementById("sidebar-info-content");
    content.innerHTML = "";
    var header = document.createElement("h2");
    header.innerText = "Generic Family!";
    content.appendChild(header);
    container.appendChild(content);
    renderEachMember(family);
  }

}

var renderEachMember = function(family){
  family.members.forEach(function(member){
    var pTest = document.createElement("p");
    pTest.innerText = member.name;
    content.appendChild(pTest);
  })
}

module.exports = FamilyRender;
