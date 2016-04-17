
Template.country.events({
    'click li': function(e) {
        Session.set("countryname", e.target.innerText);
    }
});

Template.country.helpers({
    country: function() {
        return Country.find();
    }
});

Template.country.helpers({
    countrystyle: function() {
        return Session.equals("countryname", this.countryname) ? "font-weight: bold" : "";
    }
});
