App.Views.PostsView = Backbone.View.extend({
    template: JST["backbone/templates/posts/posts_list"],
    el: '#posts',
    initialize: function (options) {
        this.listenTo(this.collection, 'add', this.addOne);
        this.listenTo(this.collection, 'reset', this.addAll);
        this.render();
    },
    addAll: function () {
        this.collection.each(this.addOne);
    },
    addOne: function (model) {
        var postView = new App.Views.PostView({model: model});
        this.$('#post_collection').append(postView.render().el)
    },
    render: function () {
        this.$el.html(this.template());
        return this;
    }
});
