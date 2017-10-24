var SearchView = Backbone.View.extend({
  
  events: {'click button': 'handleClick', 'keyup': 'handleKeyUp'},

  render: function() {
    this.$el.html(this.template());
    return this.$el;
  },

  handleClick: function() {
    this.collection.search($('.form-control').val());
  },

  handleKeyUp: function(event) {
    this.collection.debouncedSearch($('.form-control').val());
    // if (event.keyCode === 13) {
    // this.collection.search($('.form-control').val());
    // }
  },
  
  template: templateURL('src/templates/search.html')

});
