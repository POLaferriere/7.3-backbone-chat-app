import MessageCollection from 'models/messages/model-collection';
import User from 'models/users/user';
import MessageIndexView from 'views/messages/index';

var AppRouter = Backbone.Router.extend({
	routes: {
		'': 'index',
	},

	logSomething: function() {
		console.log('something');
	},

	initialize: function(){
		$('#container').html(JST['application']);
		this.messages = new MessageCollection;
		this.user = new User;
	},

	index: function(){
		var view = new MessageIndexView({collection: this.messages, model: this.user,});
		this.messages.fetch();
		this.showView(view);
	},

	showView: function(view){
		if(this.currentView) {
			this.currentView.remove();
		}
		this.currentView = view;
		$('#container').html(view.render().el);
		return view;
	},
});

export default AppRouter;