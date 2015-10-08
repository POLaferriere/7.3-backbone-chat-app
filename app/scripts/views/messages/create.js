import BaseView from 'views/base-view';

var MessageCreateView = BaseView.extend({
    tagName: 'form',

    className: 'create-form',

    template: JST['create'],

    events: {
        'submit': 'createMessage',
        'click .fa-plus-square': 'createMessage', 
    },

    createMessage: function(e) {
        e.preventDefault();
        this.collection.create(this.getInfo(), {
            wait: true
        });
        console.log(this.getInfo());
        this.$('input').val('');
    },

    getInfo: function() {
        var info = {};
        var results = this.$el.serializeArray();
        results.forEach((result) => {
            info[result.name] = result.value;
            info.username = this.model.get('username');
        });
        debugger;
        return info;
    }
});

export default MessageCreateView;
