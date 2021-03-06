var assert = require("assert");
var Location = require("../location.js");
var Event = require("../event.js");

describe( "Location", function(){

  var event1;
  var event2;
  var testLocation;

  beforeEach(function(){

    event1 = new Event(
      "Battle of Montgomery's Tavern",
      "The Battle of Montgomery's Tavern was an incident in the Upper Canada Rebellion. The abortive revolutionary insurrection inspired by William Lyon Mackenzie was crushed by British authorities and Canadian volunteer units near a tavern on Yonge Street, Toronto.",
      -4167676800,
      ["Stay and Fight", "Flee to America with your Family"]
    );

    event2 = new Event(
      "Random event",
      "Something happened",
      -4167676800,
      ["Choice 1", "Choice 2", "Choice 3"]
    );

    testLocation = new Location("Nova Scotia", [44.651070, -63.582687], "Gaelic name for New Scotland", [event1, event2]);
  });

  it("should have a name", function(){
    assert.strictEqual(testLocation.name, "Nova Scotia");
  });

  it("should have a lat", function(){
    assert.deepStrictEqual(testLocation.latlng[0], 44.651070);
  });

  it("should have a lng", function(){
    assert.deepStrictEqual(testLocation.latlng[1], -63.582687);
  });

  it("should have a description", function(){
    assert.strictEqual(testLocation.description, "Gaelic name for New Scotland");
  })

  it("should have events", function(){
    assert.strictEqual(testLocation.events.length, 2);
  });

  it("should be able to get event details", function(){
    assert.strictEqual(testLocation.events[0].name, "Battle of Montgomery's Tavern");
    assert.strictEqual(testLocation.events[1].choices.length, 3);
  });

  it("should be able to add an event", function(){
    event3 = new Event(
      "Another event",
      "Something else happened",
      -4167676800,
      ["Choice 1", "Choice 2", "Choice 3"]
    );

    testLocation.events.push(event3);
    assert.strictEqual(testLocation.events.length, 3);
    assert.strictEqual(testLocation.events[2].name, "Another event");
  })

  it("should be able to remove an event", function(){
    testLocation.events.splice(1, 1);
    assert.strictEqual(testLocation.events.length, 1);
  });

});
