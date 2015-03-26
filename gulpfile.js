var gulp = require('gulp');
var handlebars = require('gulp-static-handlebars');

function getData() {
    return Promise.resolve({contents: 'whatever'});
}

function getHelpers() {
    return Promise.resolve({menu: function(options) { return 'menu!'; }});
}

function getPartials() {
    return Promise.resolve({header: '<header></header>', footer: '<footer></footer>'});
}

gulp.task('default', function () {
  return gulp.src('./app/index.hbs')
        .pipe(handlebars(getData(), {helpers: getHelpers(), partials: getPartials()}))
        .pipe(gulp.dest('./result'));
});

