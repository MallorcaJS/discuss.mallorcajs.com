Package.describe({summary: "Telescope MallorcaJS theme"});

Package.on_use(function (api) {

  api.use(['templating','telescope-base','telescope-theme-base'], ['client']);

  //Third party packages

  api.use(['chrismbeckett:fontawesome4'], ['client']);

  api.add_files([
    'lib/client/stylesheets/test.css',
    'lib/client/views/newNav.html',
    'lib/client/views/newPostList.html',
    'lib/client/views/newPostItem.html',
    'lib/client/views/newPostUpVote.html',
    'lib/client/views/newPostUpVote.js',
    'lib/client/views/newPostMeta.html',
    'lib/client/views/newPostContent.html',
    'lib/client/views/newPostDiscuss.html',
    'lib/client/views/footer.html',
    'lib/client/views/heroTest.html',
    'lib/client/mallorcajs.js',
    ], ['client']);


  api.export([
    'postHeading',
    'postMeta',
    // 'postContent',

    ]);

});