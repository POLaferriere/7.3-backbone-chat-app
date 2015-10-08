import BaseView from 'views/base-view';

var LoginView = BaseView.extend({
	tagName: 'form',

	className: 'login-view',

    template: JST['login'],

    events: {
        'submit': 'createUser',
    },

    createUser: function(e) {
        e.preventDefault();
        this.model.set(this.getInfo());
        console.log(this.model);
        this.remove();
    },

    getInfo: function() {
        var info = {};
        var results = this.$el.serializeArray();
        results.forEach((result) => {
            info[result.name] = result.value;
        });
        return info;
    },
});

export default LoginView;