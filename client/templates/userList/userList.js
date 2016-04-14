Meteor.subscribe('users');

Template.userList.helpers({
    users: function() {
        return Meteor.users.find();
    }
});


