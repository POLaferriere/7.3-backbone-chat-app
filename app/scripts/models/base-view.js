var BaseView = Backbone.View.extend({
	render: function(){
		$('#container').append(this.render().el);
		return this;
	},
});

export default BaseView;