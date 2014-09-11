Template[getTemplate('newPostUpVote')].helpers({
  upvoted: function(){
    var user = Meteor.user();
    if(!user) return false;
    return _.include(this.upvoters, user._id);
  },
  oneBasedRank: function(){
    if(typeof this.rank !== 'undefined')
      return this.rank + 1;
  }
});

Template[getTemplate('newPostUpVote')].events({
  'click .upvote-link': function(e, instance){
    alert('what?');
    var post = this;
    e.preventDefault();
    if(!Meteor.user()){
      Router.go('/sign-in');
      throwError(i18n.t("Please log in first"));
    }
    Meteor.call('upvotePost', post, function(error, result){
      trackEvent("post upvoted", {'_id': post._id});
    });
  }
});