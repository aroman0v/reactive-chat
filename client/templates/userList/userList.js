Template.userList.helpers({
    logins: function() {
      return Logins.find();
    }
  });

Template.logins.helpers({
    logins: function() {
        return Logins.find();
    }
});

Template.users.helpers({
    users: function() {
        return Users.find();
    }
});


