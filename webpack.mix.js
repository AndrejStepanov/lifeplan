let mix = require('laravel-mix');
const CopyWebpackPlugin = require('copy-webpack-plugin')
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

mix.js('resources/assets/js/main/Main.js', 'public/js/Main.js')
	/*.js('resources/assets/js/main/About.js', 'public/js/About.js')
	.js('resources/assets/js/main/Search.js', 'public/js/Search.js')
	.js('resources/assets/js/main/Test.js', 'public/js/Test.js')*/
	.js('resources/assets/js/main/Auth.js', 'public/js')
	.js('resources/assets/js/main/User.js', 'public/js')
	.webpackConfig({
		resolve: {
			alias: {
				'@': path.resolve('resources/assets/sass')
			}
		},
		plugins: [
			new CopyWebpackPlugin([
				{ from: 'resources/assets/js/helpers/functions.js', to: 'js' },
			]),
		],
	})
   .sass('resources/assets/sass/app.scss', 'public/css')
   .extract(['vue','vuetify','vue-axios','axios','vuex','vue-router','socket.io-client','laravel-echo']);