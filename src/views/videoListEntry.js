var VideoListEntryView = Backbone.View.extend({

  events: {
    'click': 'handleClick'
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html'),

  handleClick: function() {
    this.currVideo = this.model;
    this.model.select();
  }

});
