// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td class="songtitle"><%= title %></td><td> <%= playCount %></td><td class="like">like</td><td class="dislike">dislike</td>'),

  initialize: function() {
    this.model.on('change:playCount', function() {
      $(this.$el.children()[2]).text(this.model.get('playCount'));
    }, this);
    this.model.on('change:like', function(){
      $(this.$el.children()[3]).toggleClass('pressed');
    }, this);
    this.model.on('change:dislike', function(){
      $(this.$el.children()[4]).toggleClass('pressed');
    }, this);
  },

  events: {
    'click .songtitle': function() {
      this.model.enqueue();
    },
    'click .dislike':function(){
      this.model.disliked();
    },
    'click .like':function(){
      this.model.liked();
    },
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
