Meteor.subscribe('users');

Template.userList.helpers({
    users: function() {
        return Meteor.users.find();
    }

});

Template.userList.helpers({
countUsers: function() {
        return Users.count();
    }
});


