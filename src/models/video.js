var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    this.set('selected', false);
    this.on('select', function(selectedEntry) {
      this.set('selected', !this.get('selected'));
    }, this);
  },

  select: function() {
    this.trigger('select', this);
  }

});
