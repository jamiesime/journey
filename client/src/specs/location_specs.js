var assert = require("assert")
var Location = require("../location.js")

describe( "Location", function(){

  var testLocation

  beforeEach(function(){
    testLocation = new Location("Nova Scotia", [5, 3], "Galic name for New Scotland", ["Event A", "Event B"]);
  });

  it("should have a name", function(){
    assert.strictEqual(testLocation.name, "Nova Scotia")
  });
  it("should have a lat", function(){
    assert.deepStrictEqual(testLocation.latlng[0], 5)
  });
  it("should have a lng", function(){
    assert.deepStrictEqual(testLocation.latlng[1], 3)
  });
  it("should have a description", function(){
    assert.strictEqual(testLocation.description, "Galic name for New Scotland")
  })
  it("should have events", function(){
    assert.strictEqual(testLocation.events.length, 2)
  });


});
