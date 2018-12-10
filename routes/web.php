<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();
Route::get('/', function () { return view('simple')->with('app_js', 'Main');}); // Главная страница
Route::get('/auth', ['as' => 'Авторизация', function () { return view('simple')->with('app_js', 'Auth'); }]);
Route::get('/user', function () { return view('simple')->with('app_js', 'User');})->middleware('auth');// О себе
Route::get('/test', function () { return view('simple')->with('app_js', 'Test');})->middleware('auth'); // Психотесты
Route::get('/search', function () { return view('simple')->with('app_js', 'Search');})->middleware('auth'); // Поиск ВУЗов
Route::get('/catalogProf', function () { return view('simple')->with('app_js', 'CatalogProf');}); // Каталог профессий
Route::get('/topProf', function () { return view('simple')->with('app_js', 'CatalogProf');}); // Каталог профессий
Route::get('/topSpec', function () { return view('simple')->with('app_js', 'TopSpec');})->middleware('auth'); // Топ специальностей

Route::get('getEges', 'Main\EgeController@show')->middleware('auth');
Route::get('getProfs', 'Main\ProfController@show');
Route::get('getProfs2', 'Main\ProfController@show2');
Route::get('getSpec', 'Main\SpecController@show');
Route::get('getSpec2', 'Main\SpecController@show2');

Route::get('/sucsess', function () { echo 'sucsess';} );
Route::post('/socet_command', 'SocetCommandController@reciveCommand')->middleware('auth');//сюда стучатся для получения данных компоненты

Route::post('/data_command', 'DataCommandController@reciveCommand')->middleware('auth');//запросы на добавление изменение удаление  данных
Route::get('/clear', function() {    Artisan::call('cache:clear');    Artisan::call('config:cache');    Artisan::call('view:clear');	Artisan::call('route:clear');    return "Кэш очищен.";});

Route::get('login/vk', 'Auth\LoginController@redirectToProviderVKontakte');
Route::get('login/vk/callback', 'Auth\LoginController@handleProviderCallbackVKontakte');