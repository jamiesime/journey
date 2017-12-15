use journey;
db.dropDatabase();

db.locations.insertMany([{
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
},{
        placeName: "Montreal",
        Latlng: [ 45.501689, -73.567256],
        description: "Just a town.",
        event:[
            {
                date: "21-07-1837",
                text: "something weird happened",
                title: "The First Railway line Opens",
                choices: ["move to america", "embrace canada"]
            }
        ]},
        {
            placeName: "Quebec City",
            Latlng: [ 46.813878, -71.207981],
            description: "Just a town.",
            event:[
                {
                    date: "12-02-1837",
                    text: "something weird happened",
                    title: "Thing",
                    choices: ["move to america", "embrace canada"]
                }]},
                {
                    placeName: "Ottowa",
                    Latlng: [ 45.421530, -75.697193],
                    description: "T",
                    event:[
                        {
                            date: "12-02-1837",
                            text: "something weird happened",
                            title: "whoah",
                            choices: ["move to america", "embrace canada"]
                        }]}
                    ]);
