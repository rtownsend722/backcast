var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.currVideo = this.videos.at(0);

    this.searchView = new SearchView();
    this.videoPlayerView = new VideoPlayerView({model: this.currVideo});
    this.videoListView = new VideoListView({collection: this.videos, currVideo: this.currVideo});

    this.videos.on('change', function() {
      console.log(this.currVideo);
      this.videoPlayerView.render();
    }, this);
    
    this.render();
  },



  render: function() {
    this.$el.html(this.template());
    // $('.search').append(new SearchView().render());
    // $('.player').append(new VideoPlayerView({model: this.videos}).render());
    // $('.list').append(new VideoListView({collection: this.videos}).render());
    $('.search').append(this.searchView.render());
    $('.player').append(this.videoPlayerView.render());
    $('.list').append(this.videoListView.render());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
