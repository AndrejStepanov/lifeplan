const {mix} = require('laravel-mix');


mix.disableNotifications();

mix.options({
    processCssUrls: false
});
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/Main.js', 'public/js')
    .js('resources/assets/js/About.js', 'public/js')
    .js('resources/assets/js/Search.js', 'public/js')
    .js('resources/assets/js/Test.js', 'public/js')
    .webpackConfig({
        resolve: {
            alias: {
                '@': path.resolve('resources/assets/sass')
            }
        }
    })
    .sass('resources/assets/sass/app.scss', 'public/css').extract(['vue','vuetify']);


if (mix.inProduction()) {
    mix.version();
}
