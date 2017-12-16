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
    Latlng: [ 0, 1],
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

db.locations.insert({
    placeName: "California",
    Latlng: [ 36.778261, -119.417932],
    description: "California, a western U.S. state, stretches from the Mexican border along the Pacific for nearly 900 miles",
    events:
      [{
          date: "24-01-1848",
          text: "The California Gold Rush began on January 24, 1848, when gold was found by James W. Marshall at Sutter's Mill in Coloma, California. The news of gold brought some 300,000 people to California from the rest of the United States and abroad.",
          title: "California Gold Rush",
          choices:
          [
            { text: "Find Gold",
              goto: [0, 1] },
            { text: "Go to xxx",
              goto: [2, 0]}
          ]
      }]
});

db.locations.insert({
    placeName: "Washington DC",
    Latlng: [ 38.907192, -77.036871],
    description: "Washington DC is the capital of the US.  It’s defined by imposing neoclassical monuments and buildings – including the iconic ones that house the federal government’s 3 branches: the Capitol, White House and Supreme Court.",
    events:
      [{
          date: "22-07-1862",
          text: "President Lincoln read the first draft of the Emancipation Proclamation to his Cabinet members on July 22, 1862. After some changes, he issued the preliminary version on September 22, which specified that the final document would take effect January 1, 1863. Slaves in Confederate states which were not back in the Union by then would be free, but slaves in the Border States were not affected.",
          title: "Emancipation Proclamation",
          choices:
          [
            { text: "Lincoln Assasination",
              goto: [0, 1] },
            { text: "Go to xxx",
              goto: [2, 0]}
          ]
      }
    ]
});
