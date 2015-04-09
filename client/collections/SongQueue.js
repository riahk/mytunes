// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(params){
    this.on('add', function() {
      if(this.length === 1) {
        this.playFirst();
      }
    });
    this.on('ended', function() {
      this.remove(this.at(0));
      if(this.length > 0) {
        this.playFirst();
      }
    });
    this.on('dequeue', function(song){
      this.dequeue(song);
    });
    this.on('enqueue', function(){
    });
  },

  dequeue: function(song){
    this.remove(song);
  },

  playFirst: function(){
    this.at(0).play();
  }

});
