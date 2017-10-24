var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },  

  

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());

    this.collection.each(function(item, index, col) {
      this.$el.append(new VideoListEntryView({model: item}).render());
    }, this);

    return this.$el;
  },

  template: templateURL('src/templates/videoList.html')

});
