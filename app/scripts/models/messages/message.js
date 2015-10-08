var Message = Backbone.Model.extend({
	idAttribute: '_id',
	defaults: function(){
		return {
			message: '',
			createdAt: Date.now(),
		};
	}
});

export default Message;