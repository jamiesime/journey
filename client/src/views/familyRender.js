var FamilyRender = function(family){
  this.render(family);
}

FamilyRender.prototype = {

  render: function(family){
    container = document.getElementById("sidebar-info");
    container.innerHTML = "";
    var header = document.createElement("h2");
    header.innerText = "Generic Family!";
    container.appendChild(header);
    renderEachMember(family);
  }

}

var renderEachMember = function(family){
  family.members.forEach(function(member){
    var pTest = document.createElement("p");
    pTest.innerText = member.name;
    container.appendChild(pTest);
  })
}

module.exports = FamilyRender;
