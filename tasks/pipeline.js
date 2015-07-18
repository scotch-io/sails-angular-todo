var cssFilesToInject = [
'bower_components/bootswatch/dist/css/bootstrap.css',
'styles/**/*.css'
];
var jsFilesToInject = [
  'js/dependencies/sails.io.js',
  '/bower_components/jquery/dist/jquery.js',
  '/bower_components/angular/angular.js',
  '/bower_components/angular-route/angular-route.js',
  '/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
  '/bower_components/bootstrap/dist/js/boostrap.js',
  'js/dependencies/**/*.js',

  'js/**/*.js'
  ];

var templateFilesToInject = [
'templates/*.html'
];

module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
  return '.tmp/public/' + path;
});
module.exports.templateFilesToInject = templateFilesToInject.map(function(path) {
  return 'assets/' + path;
});