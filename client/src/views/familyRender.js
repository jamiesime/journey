var FamilyRender = function(family){
  this.render(family);
}

FamilyRender.prototype = {

  render: function(family){
    container = document.getElementById("sidebar-info");
    container.innerHTML = "";
    var pTest = document.createElement("p");
    pTest.innerText = "this is a test";
    container.appendChild(pTest);
  }

}

module.exports = FamilyRender;
