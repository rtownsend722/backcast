var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.videos.search('kitties');
    this.searchView = new SearchView({collection: this.videos});
    this.videoPlayerView = new VideoPlayerView({model: this.videos.at(0), collection: this.videos});
    this.videoListView = new VideoListView({collection: this.videos});
    this.render();
  },



  render: function() {
    this.$el.html(this.template());
    $('.search').append(this.searchView.render());
    $('.player').append(this.videoPlayerView.render());
    $('.list').append(this.videoListView.render());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
