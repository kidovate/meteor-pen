
Package.describe({
    summary: "Pen-editor repackaged for Meteor",
});

Package.on_use(function (api) {
  api.add_files(['src/font/fontello.eot', 'src/font/fontello.svg', 'src/font/fontello.ttf', 'lib/src/font/fontello.woff'], 'client')
  api.add_files('src/pen.css', 'client');
  api.add_files('src/pen.js', 'client');
  api.add_files('src/markdown.js', 'client');
  api.add_files('override.css', 'client');
});
