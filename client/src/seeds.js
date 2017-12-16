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
            { text: "go to vancouver",
              goto: [1, 0] },
            { text: "go to canada city",
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
            { text: "go to Halifax",
              goto: [1, 0] },
            { text: "go to Canada City",
              goto: [0, 0]}
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
            { text: "go to vancouver",
              goto: [1, 0] },
            { text: "go to halifax",
              goto: [2, 0]}
          ]
      }]
});

db.locations.insert({
    placeName: "Aberdeen",
    Latlng: [ 57.149717, -2.094278],
    description: "Just a town 4.",
    events:
      [{
          date: "12-02-1837",
          text: "something weird happened",
          title: "whoah",
          choices: ["move to america", "embrace canada"]
      }]
});
