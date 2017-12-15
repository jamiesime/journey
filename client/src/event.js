var Event = function(name, description, date, choices) {
  this.name = name;
  this.description = description;
  this.date = date;
  this.choices = choices;
}

Event.prototype.getMonth = function(monthNumber){
  switch(monthNumber) {
    case 1:
    return "January";
    break;
    case 2:
    return "February"
    break;
    case 3:
    return "March";
    break;
    case 4:
    return "April";
    break;
    case 5:
    return "May";
    break;
    case 6:
    return "June";
    break;
    case 7:
    return "July";
    break;
    case 8:
    return "August"
    break;
    case 9:
    return "September";
    break;
    case 10:
    return "October";
    break;
    case 11:
    return "November";
    break;
    case 12:
    return "December";
    break;
  }
}

Event.prototype.getDateAsString = function(date){
  date = new Date(date * 1000);
  var day = date.getDay();
  var month = this.getMonth(date.getMonth()+1);
  var year = date.getFullYear();
<<<<<<< HEAD
  var fullYearString = day + " " + month + ", " + year;
=======
  var fullYearString = day + " " + month + ", " + year
>>>>>>> 0c143fda4cf369e56ddfda703809c87b6178644b
  return fullYearString;
}

module.exports = Event;
