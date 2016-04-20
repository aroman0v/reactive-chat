
  
 
  
  
  Rooms.deny({
    insert: function (userId, doc) {
      return true;
    },
    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },
    remove: function (userId, doc) {
      return true;
    }
  });
  Country.deny({
    insert: function (userId, doc) {
      return true;
    },
    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },
    remove: function (userId, doc) {
      return true;
    }
  });
  Messages.deny({
    insert: function (userId, doc) {
      return (userId === null);
    },
    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },
    remove: function (userId, doc) {
      return true;
    }
  });
  Messages.allow({
    insert: function (userId, doc) {
      return (userId !== null);
    }
  });


InfoMessages.deny({
    insert: function (userId, doc) {
      return (userId === null);
    },
    update: function (userId, doc, fieldNames, modifier) {
      return true;
    },
    remove: function (userId, doc) {
      return true;
    }
  });
  InfoMessages.allow({
    insert: function (userId, doc) {
      return (userId !== null);
    }
  });
InfoMessages.allow({
    insert: function (userId, doc) {
      return (userId !== null);
    }
  });
  
  
 
   Meteor.publish("users", function () {
    return Meteor.users.find();
  });
  Meteor.publish("country", function () {
    return Country.find();
  });
  Meteor.publish("rooms", function () {
    return Rooms.find();
  });
  Meteor.publish("messages", function () {
    return Messages.find({}, {sort: {ts: +1}});
  });

Meteor.publish("infoMessages", function () {
    return InfoMessages.find({}, {sort: {ts: +1}});
  });


