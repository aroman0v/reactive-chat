Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

Meteor.subscribe("rooms");
Meteor.subscribe("messages");
Meteor.subscribe("users");
Meteor.subscribe("logins");
Session.setDefault("roomname", "Meteor solutions");
