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
