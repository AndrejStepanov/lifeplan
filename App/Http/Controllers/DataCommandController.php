<?php

namespace App\Http\Controllers;

use App\Http\main_function;
use App\Models\Tree;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use App\Models\User;
use Auth\LoginController;
use Auth\RegisterController;

class DataCommandController extends Controller{
	public function reciveCommand(Request $request){
		$data=$request->all();
		switch($data['type']){
			case('object.tree.add'):{  throw new \App\Exceptions\KonsomException( 'Что-то пошло не так','Пошло не так все из-за корявых рук!');   };	
		}
		
		return;
	}
}