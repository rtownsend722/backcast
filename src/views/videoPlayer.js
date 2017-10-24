var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'select', this.switchVideo);
    this.listenTo(this.collection, 'sync', this.setDefaultVideo);
  },

  switchVideo: function(selected) {
    this.model = selected;
    this.render();
  },

  setDefaultVideo: function() {
    this.collection.at(0).select();
  },

  render: function() {
    if (!this.model) {
      this.$el.html('<div class="loading">Please wait...</div>');
      return this.$el;
    }

    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
