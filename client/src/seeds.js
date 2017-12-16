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
    placeName: "Greenock",
    Latlng: [ 55.956476, -4.771983],
    description: "Greenock is a port town located in the west cental Lowlands of Scotland",
    events:
      [{
          date: "12-02-1830",
          text: "Due to the Highland Clearances, which were the evictions of a significant number of tenants in the Scottish Highlands mostly during the 18th and 19th centuries, a large number of the of the evictee’s travelled abroad.",
          title: "Leaving Scotland",
          choices:
          [
            { text: "Get on the Boat",
              goto: [1, 0] }
          ]
      }]
});

db.locations.insert({
    placeName: "Atlantic Ocean",
    Latlng: [ -14.599413, -28.673147],
    description: "Many passenger ships travelled across the Atlantic to America and Canada",
    events:
      [{
          date: "14-02-1830",
          text: "On the journey you talk to some other families.  After landing in Quebec its recommended you travel to either Halifax or Nova Scotia",
          title: "Journey across the Atlantic",
          choices:
          [
            { text: "Go to Halifax",
              goto: [1, 0] },
              { text: "Go to Nova Scotia",
                goto: [1, 0] }
          ]
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
              goto: [0, 2] },
            { text: "Go to xxx",
              goto: [2, 0]}
          ]
      },
      {
          date: "14-04-1865",
          text: "Abraham Lincoln, the 16th President of the United States, was assassinated by well-known stage actor John Wilkes Booth on April 14, 1865, while attending the play Our American Cousin at Ford's Theatre",
          title: "Lincoln Assassination",
          choices:
          [
            { text: "Leave DC",
              goto: [2, 0]}
          ]
      }

    ]
});
