var Videos = Backbone.Collection.extend({

  url: 'https://www.googleapis.com/youtube/v3/search',

  model: Video,

  parse: data => {
    return data.items;
  },
  
  search: function(query) {
    this.fetch({
      data: {
        type: 'video',
        key: window.YOUTUBE_API_KEY,
        part: 'snippet',
        q: query,
        maxResults: 5,
        videoEmbeddable: 'true',
      },
      success: function(data) { console.log('success'); },
      failure: function(data) { console.log ('failure', data); }
    });
  },

  debouncedSearch: function(query) {
    _.debounce(function(query) {
      this.search(query);
    }.bind(this), 300)();
  }
});
