var assert = require("assert")
var Event = require("../event.js")

describe( "Event", function(){

  var testEvent;

  beforeEach(function(){
    testEvent = new Event(
      "Battle of Montgomery's Tavern",
      "The Battle of Montgomery's Tavern was an incident in the Upper Canada Rebellion. The abortive revolutionary insurrection inspired by William Lyon Mackenzie was crushed by British authorities and Canadian volunteer units near a tavern on Yonge Street, Toronto.",
      -4167676800,
      ["Stay and Fight", "Flee to America with your Family"]);
    });

    it("should have a name", function(){
      assert.strictEqual(testEvent.name, "Battle of Montgomery's Tavern")
    });

    it("should have a description", function(){
      assert.strictEqual(testEvent.description, "The Battle of Montgomery's Tavern was an incident in the Upper Canada Rebellion. The abortive revolutionary insurrection inspired by William Lyon Mackenzie was crushed by British authorities and Canadian volunteer units near a tavern on Yonge Street, Toronto.")
    });

    it("should have a date", function(){
      var eventDate = testEvent.getDateAsString(testEvent.date)
      assert.strictEqual(eventDate, "4 December, 1837")
    });

    it("should have a choices array", function(){
      assert.deepStrictEqual(testEvent.choices, ["Stay and Fight", "Flee to America with your Family"])
    });

    it("should be able to return a month name by number", function(){
      var monthName = testEvent.getMonth(1)
      assert.strictEqual(monthName, "January")
    });

    it("should be able to return a month name by number", function(){
      var monthName = testEvent.getMonth(1)
      assert.strictEqual(monthName, "January")
    });

    it("should be able to turn a unix time object into a date string", function(){
      var eventDate = testEvent.getDateAsString(testEvent.date)
      assert.strictEqual(eventDate, "4 December, 1837")
    })
  });
