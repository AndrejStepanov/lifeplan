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
Route::get('/registration', ['as' => 'Регистрация', function () { return view('simple')->with('app_js', 'Register'); }]);
Route::get('/about', function () { return view('simple')->with('app_js', 'About');})->middleware('auth');// О себе
Route::get('/test', function () { return view('simple')->with('app_js', 'Test');})->middleware('auth'); // Психотесты
Route::get('/search', function () { return view('simple')->with('app_js', 'Search');})->middleware('auth'); // Поиск ВУЗов

Route::get('/sucsess', function () { echo 'sucsess';} );
Route::post('/socet_command', 'SocetCommandController@reciveCommand')->middleware('auth');//сюда стучатся для получения данных компоненты
Route::post('/data_command', 'DataCommandController@reciveCommand')->middleware('auth');//запросы на добавление изменение удаление  данных
Route::get('/clear', function() {    Artisan::call('cache:clear');    Artisan::call('config:cache');    Artisan::call('view:clear');	Artisan::call('route:clear');    return "Кэш очищен.";})->middleware('auth');