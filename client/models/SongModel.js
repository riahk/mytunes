// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  initialize: function(song) {
    if(song) {
      this.set('artist', song.artist);
      this.set('url', song.url);
      this.set('title', song.title);
      this.set('playCount', 0);
      this.set('like', false);
      this.set('dislike', false);
    }
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    debugger;
    this.set('playCount', this.get('playCount')+1);
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this);
  },

  liked: function(){
    if(this.get('like')) {
      this.set('like', !this.get('like'));
    } else {
      this.set('like', !this.get('like'));
      if(this.get('like') === this.get('dislike')) {
        this.set('dislike', !this.get('dislike'));
      }
    }
  },
  disliked: function(){
    if(this.get('dislike')) {
      this.set('dislike', !this.get('dislike'));
    } else {
      this.set('dislike', !this.get('dislike'));
      if(this.get('like') === this.get('dislike')) {
        this.set('like', !this.get('like'));
      }
    }
  }
});
