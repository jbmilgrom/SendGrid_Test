var App = App || { Models: {}, Collections: {}, Views: {}, Initializer: {}, CurrentUser: {} };

App.Models.User = Backbone.Model.extend({
	
	initialize: function(){
		console.log("User has been created");

		// creating an empty followeeCollection
		// Note that the url function is primed and ready for current_user's ID
		this.set("followeeCollection", new App.Collections.FolloweeCollection([], {user_id: this.collection.user_id}));		
	}

});