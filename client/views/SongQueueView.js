// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  tagName: "table",

  initialize: function() {
    this.collection.on('change', function() {
      debugger;
      this.render();
    }, this);
    this.render();
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html('<th>songQueue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
