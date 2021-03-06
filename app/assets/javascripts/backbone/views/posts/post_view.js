App.Views.PostView = Backbone.View.extend({
    template: JST["backbone/templates/posts/_post"],
    tagName: 'div',
    className: 'span6 offset3 post',
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
