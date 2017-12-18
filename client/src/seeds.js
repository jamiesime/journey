use journey;
db.dropDatabase();

// index 0 in array
db.locations.insert({
    placeName: "Isle of Lewis",
    Latlng: [ 58.241575, -6.661592],
    description: "The Highlands are high in scotland",
    events:
      [{
          date: "12-02-1830",
          text: "Bla bla bla",
          title: "Go to Greenock",
          choices:
          [
            { text: "Go to Greenock",
              goto: [1, 0]}
          ]
      }]
});

// index 1 in array
db.locations.insert({
    placeName: "Greenock",
    Latlng: [ 55.956476, -4.771983],
    description: "Greenock is a port town located in the west cental Lowlands of Scotland",
    events:
      [{
          date: "30-03-1830",
          text: "Due to the Highland Clearances, which were the evictions of a significant number of tenants in the Scottish Highlands mostly during the 18th and 19th centuries, a large number of the of the evictee’s travelled abroad.",
          title: "Leaving Scotland",
          choices:
          [
            { text: "Get on the Boat",
              goto: [2, 0],
              moneyChange: {value: -50, source: "Boat Ticket"} }
          ]
      }]
});

// index 2 in array
db.locations.insert({
    placeName: "Atlantic Ocean",
    Latlng: [ 52.908902, -32.519531],
    description: "Many passenger ships made the month long voyage across the Atlantic to America and Canada.",
    events:
      [{
          date: "14-04-1830",
          text: "On the journey over you hear tales of the new land to be. Fresh lands, not yet steeped in the heavy industries like back home, full of opportunities",
          title: "Journey across the Atlantic",
          choices:
          [
            { text: "Arrive to Halifax",
              goto: [3, 0],
              memberAdd: {name: "James", age: 4, health: 75}
            },
              { text: "Play dice with the crew....",
                goto: [3, 0],
                gambleDice: 10
                // ,
                // memberRemove: "Grace"
            }
          ]
      }]
});

// index 3 in array
db.locations.insert({
    placeName: "Halifax, Nova Scotia",
    Latlng: [ 44.655537, -63.578568],
    description: "Halifax, the capital city of the Nova Scotia region, was considered one of the most important financial centres of the North Britsh America (and later Canada, when it was formed). ",
    events:
      [{
          date: "02-05-1830",
          text: "You've arrived on new land, shaky from the voyage. Eager for work, your family finds slim choice locally, but upon asking around word reaches you of employment prospects in nearby provinces. ",
          title: "Where to now?",
          choices:
          [
            { text: "Go to Quebec City",
              goto: [1, 0],
              moneyChange: -25,
              memberHealthChange: {name: "Jonas", change: -20}}
          ]
      }]
});

// index 4 in array
db.locations.insert({
    placeName: "Quebec City, Quebec",
    Latlng: [ 46.813878, -71.207981],
    description: "Many passenger ships travelled across the Atlantic to America and Canada",
    events:
      [{
          date: "14-02-1830",
          text: "On the journey you talk to some other families.  After landing in Quebec its recommended you travel to either Halifax or Nova Scotia",
          title: "Journey across the Atlantic",
          choices:
          [
            { text: "Go to Halifax",
              goto: [3, 0],
              memberAdd: ["James", "4", 75]},
              { text: "Go to Nova Scotia",
                goto: [3, 0],
                memberRemove: "Grace"}
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
