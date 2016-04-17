Template.input.events({
    'click .sendMsg': function(e) {
        _sendMessage();
    },
    'keyup #msg': function(e) {
        if (e.type == "keyup" && e.which == 13) {
            _sendMessage();
        }
    }
});

_sendMessage = function() {
    var el = document.getElementById("msg");

    Messages.insert({user: Meteor.user().username, msg: el.value, ts: new Date(), room: Session.get("roomname"), country: Session.get("countryname")});
InfoMessages.insert({messInfo: [{msg: el.value, ts: new Date(), room: Session.get("roomname"), country: Session.get("countryname")}]});
Country.insert({countryInfo: [{country: Session.get("countryname"), msg: el.value, room: Session.get("roomname"), ts: new Date()}]});
    el.value = "";
    el.focus();
};

Template.messages.helpers({
    messages: function() {
        return Messages.find({room: Session.get("roomname")}, {sort: {ts: +1}});
    },
   
    infoMessages: function() {
        return Messages.find({room: Session.get("roomname")}, {sort: {ts: +1}});
    },
    roomname: function() {
        return Session.get("roomname");
    },
    countryname: function() {
        return Session.get("countryname");
    }
});



Template.message.helpers({
    timestamp: function() {
        return this.ts.toLocaleString();
    }
});
