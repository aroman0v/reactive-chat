Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

Meteor.subscribe("rooms");
Meteor.subscribe("messages");
Meteor.subscribe("users");
Meteor.subscribe("logins");
Meteor.subscribe("country");
Session.setDefault("roomname", "Meteor solutions");
Session.setDefault("countryname", "Lviv");
