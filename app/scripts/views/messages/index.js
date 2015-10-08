import BaseView from 'views/base-view';
import CollectionView from 'views/collection-view';
import MessageItemView from 'views/messages/item';
import MessageCreateView from 'views/messages/create';
import LoginView from 'views/login';


var MessageListView = CollectionView.extend({
	tagName: 'ul',
	className: 'list-view',
	ItemViewConstructor: MessageItemView,
});

var MessageIndexView = BaseView.extend({
	initialize: function() {
		window.setInterval(this.collection.fetch.bind(this.collection), 5000);
		this.messageCreateView = new MessageCreateView({collection: this.collection, model: this.model});
		this.messageListView = new MessageListView({collection: this.collection});
		this.loginView = new LoginView({model: this.model});
	},

	render: function() {
		this.$el.append(this.messageListView.render().el);
		this.$el.append(this.messageCreateView.render().el);
		this.$el.append(this.loginView.render().el);
		return this;
	},

	remove: function() {
		this.messageCreateView.remove();
		this.messageListView.remove();
		this.loginView.remove();
		Backbone.View.prototype.remove.apply(this, arguments);
	}
	
});

export default MessageIndexView;