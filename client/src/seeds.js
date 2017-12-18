use journey;
db.dropDatabase();

// index 0 in array
db.locations.insert({
    placeName: "Scottish Highlands",
    Latlng: [ 57.394109, -4.899902],
    description: "The Highlands are a vast landscape of differing rural topographies. It is the year 1830, and over the past few decades the land owners have implemented the Highland Clearances; the forced eviction of inhabitants of the Highlands and western islands of Scotland. Woken in the late of night by a gang of armed men, hired by the local landowner, you're family is forced out your home. Told never to return, you're left with no other option than to head south in hope of opportunity.",
    events:
      [{
          date: "12-02-1830",
          text: "Upon reaching the nearest town, you hear about the conditions of the cities. Edinburgh rife with over population and crammed housing conditions, horrible working conditions for adults and children in the mills. But a fated meeting in a tavern one night brings hope. A sailor speaks of his coming voyage, to sail from Greenock and cross the western ocean and reach the Empires collonies in Canada where war has past and the land is thirving with opportunity. Seeing no better fortune arising, the family reailises the only path before them.",
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
    description: "Greenock became a centre of industry, with water power being used to process imported goods. In 1827 Loch Thom was constructed as a reservoir with The Cut aqueduct, bringing water to two lines of falls for water mills to power a paper mill, cotton and woollen mills, sugar refineries and shipbuilding. This made the port one of the most economically viable ports in Scotland at this time.",
    events:
      [{
          date: "30-03-1830",
          text: "The Family arrives to a busy bustling town. Greenock itself is full of fisherman and sailors from the canal and ocean, with tales from far and wide. Your guide, the fortuitously met sailor, leads you strait to the vessel he is to travel on and you negotiate passage for the voyage ahead. Getting yourself settled into the available cabins on board, you spot a few other families who are travelling the same brave path as your own. Upon high tide, the call from the captain comes to cast off, and as the ship pulls out of dock your family says farewell the home they thought they'd never leave.",
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
                gambleDice: 10,
                memberRemove: "Grace"
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
              moneyChange: { value: -25, source: "carriage ticket"},
              memberHealthChange: {name: "Jonas", change: -20}
            }
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
