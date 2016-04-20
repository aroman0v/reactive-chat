Meteor.startup(function () {
    Messages.remove({});
    Rooms.remove({});
    Country.remove({});
    if (Rooms.find().count() === 0) {
      ["Meteor Solutions", "JavaScript", "PhP Dev", "MongoDB"].forEach(function(r) {
        Rooms.insert({roomname: r});
      });
    if (Country.find().count() === 0) {
      ["Lviv", "Ternopil", "Kyiv", "Odessa"].forEach(function(c) {
        Country.insert({countryname: c});
      });
    }
    }
  });
