App.Views.PostShowView = Backbone.View.extend({
    template: JST["backbone/templates/posts/post_show"],
    tagName: 'div',
    className: 'span12 post',
    events: {
        'click .post-remove': 'removePost'
    },
    initialize: function(){
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.close);
    },
    render: function(){
        this.$el.html(this.template({post: this.model.toJSON()}));
        return this;
    },
    removePost: function(){
        this.model.destroy();
        Backbone.history.navigate('/', true);
    },
    close: function(){
        this.$el.remove();
    }
})