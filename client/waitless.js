Template.hello.greeting = function () {
  return "Welcome to waitless.";
};

Template.hello.events({
  'click input' : function () {
    // template data, if any, is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");

  }
});

Template.userprofile.information = function() {
	return "Welcome Constance";
};


Template.fb_pic.pic = function() {// helper function to display the pic on the page
	var userProfile;
	userProfile = Meteor.user().profile;
 
    if(userProfile) { // logic to handle logged out state
      return userProfile.picture;

 	}
    if (typeof console !== 'undefined')
      console.log("Function Ran");

 };

// first, remove configuration entry in case service is already configured
Accounts.loginServiceConfiguration.remove({
  service: "facebook"
});
Accounts.loginServiceConfiguration.insert({
  service: "facebook",
  clientId: "284871681660068",
  secret: "51b23e3d37e25b8e87754124b679e05d"
});