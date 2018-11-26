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

Route::get('/', function () { return view('welcome')->with('app_js', 'Main');}); // Главная страница
Route::get('/about', function () { return view('welcome')->with('app_js', 'About');}); // О себе
Route::get('/test', function () { return view('welcome')->with('app_js', 'Test');}); // Психотесты
Route::get('/search', function () { return view('welcome')->with('app_js', 'Search');}); // Поиск ВУЗов
