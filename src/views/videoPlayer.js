var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'select', this.switchVideo);
  },

  switchVideo: function(selected) {
    this.model = selected;
    console.log(selected);
    this.render();
  },

  render: function() {
    // this.$el.html('<div class="loading">Please wait...</div>');

    this.$el.html(this.template(this.model.attributes));

    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
