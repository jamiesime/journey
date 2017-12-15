use journey;
db.dropDatabase();

db.locations.insert({
    placeName: "Halifax",
    Latlng: [ 41.991213, -70.861985],
    description: "Just a town.",
    events:
      [{
          date: "12-02-1837",
          text: "something weird happened",
          title: "whoah",
          choices: ["move to america", "embrace canada"]
      }]
});

db.locations.insert({
    placeName: "Vancouver",
    Latlng: [ 41.991213, -70.861985],
    description: "Just a town 3.",
    events:
      [{
          date: "12-02-1837",
          text: "something weird happened",
          title: "whoah",
          choices: ["move to america", "embrace canada"]
      }]
});

db.locations.insert({
    placeName: "Canada City",
    Latlng: [ 41.991213, -70.861985],
    description: "Just a town 3.",
    events:
      [{
          date: "12-02-1837",
          text: "something weird happened",
          title: "whoah",
          choices: ["move to america", "embrace canada"]
      }]
});
