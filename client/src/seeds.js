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
          choices:
          [
            { text: "move to america",
              goto: [1, 0] },
            { text: "embrace canada",
              goto: [2, 0]}
              //[0] in goto is location index, [1] is event index
          ]
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
          choices:
          [
            { text: "move to america",
              goto: [1, 0] },
            { text: "embrace canada",
              goto: [2, 0]}
          ]
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
          choices:
          [
            { text: "move to america",
              goto: [1, 0] },
            { text: "embrace canada",
              goto: [2, 0]}
          ]
      }]
});
