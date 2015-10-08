import Message from 'models/messages/message';

var MessageCollection = Backbone.Collection.extend({
	url: 'http://tiny-lasagna-server.herokuapp.com/collections/messages',
	model: Message,
	comparator: function(a, b){
		if(a.get('_id') > b.get('_id')) {
			return 1;
		} else if (a.get('_id') < b.get('_id')) {
			return -1;
		} else {
			return 0;
		}
	},
});
export default MessageCollection;