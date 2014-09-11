//Overriding nav menu

templates["nav"] = "newNav";

//Overriding post list
templates["posts_list"] = "newPostsList";
templates["post_item"] = "newPostItem";


//Overriding post stuff

templates["postMeta"] = "newPostMeta";
templates["postContent"] = "newPostContent";
templates["postDiscuss"] = "newPostDiscuss";
templates['postUpvote'] = "newPostUpVote"



heroModules.push({
  template: 'heroText'
});



footerModules.push({
  template: 'mjsFooter'
})



postMeta = [
  {
    template: 'postMeta',
    order: 1
  }
]


// postContent = [
//   {
//     template: 'postTitle'
//   }
// ]


postHeading = [
  {
    template: 'postTitle',
    order: 1
  }
]

// Post Modules placement

postModules.push({
  template: 'postMeta',
  position: 'left-left'
});