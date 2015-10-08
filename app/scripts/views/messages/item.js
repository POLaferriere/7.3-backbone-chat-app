var MessageItemView = Backbone.View.extend({
	tagName: 'li',
	className: 'list-item',
	
	template: JST['message/item-view'],

	render: function() {
		var info = this.model.toJSON();
		info.created = moment(info.createdAt).format("ddd, MMM DD, h:mm:ss");
		this.$el.html(this.template(info));	
		return this;
	}
});

export default MessageItemView;