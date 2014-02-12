App.Routers.PostsRouter = Backbone.Router.extend({
    routes: {
        'index': 'index',
        'posts/:id': 'show',
        '.*': 'index'
    },
    index: function () {
        var posts = new App.Collections.PostsCollection();
        var index_view = new App.Views.PostsView({collection: posts});
        posts.fetch();
    },
    show: function (id) {
        var post = new App.Models.Post({id: id});
        var collection = new App.Collections.PostsCollection([post]);
        var show_view = new App.Views.PostView({model: post})
        post.fetch({success: function(){
            $('#posts').html(show_view.render().el);
        }});
    }
})