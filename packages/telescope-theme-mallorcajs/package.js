Package.describe({summary: "Telescope MallorcaJS theme"});

Package.on_use(function (api) {

  api.use(['templating','telescope-base','telescope-theme-base'], ['client']);

  //Third party packages

  // api.use(['bbfc:refills'], ['client']);

  api.add_files([
    'lib/client/stylesheets/test.css',
    'lib/client/views/new_posts_list.html',
    'lib/client/views/new_post_item.html',
    'lib/client/views/footer.html',
    'lib/client/views/heroTest.html',
    'lib/client/mallorcajs.js',
    ], ['client']);

});