App.Models.Post = Backbone.Model.extend({
    paramRoot: 'post',
    defaults: {
        title: '',
        content: ''
    }
});

App.Collections.PostsCollection = Backbone.Collection.extend({
    url: 'api/v1/posts',
    model: App.Models.Post
});