use journey;
db.dropDatabase();

db.locations.insert({
  placeName: "Halifax",
  Latlng: [ 100.00, 100.00],
  description: "Just a town.",
  event:[
    {
      date: "12-02-1837",
      text: "something weird happened",
      title: "whoah",
      choices: ["move to america", "embrace canada"]
    }
  ]
});

db.locations.insert({
  placeName: "Ottowa",
  Latlng: [ 100.00, 100.00],
  description: "Just another town.",
  event:[
    {
      date: "12-02-1837",
      text: "something else weird happened",
      title: "whoah man",
      choices: ["move to america", "embrace canada"]
    }
  ]
});
