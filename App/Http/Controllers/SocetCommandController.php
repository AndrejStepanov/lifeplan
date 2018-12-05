<?php

namespace App\Http\Controllers;

use App\Http\main_function;
use App\Models\User;
use App\Models\City;
use Illuminate\Http\Request;

class SocetCommandController extends Controller{
	public function reciveCommand(Request $request){
		$data=$request->all();
		switch($data['type']){
			case('user.info.by.id'):{  $model = new User(); return json_encode($model->getUserInfo(nvl($data['userId'],null)) ); };
			case('city.list'):{  $model = new City(); return json_encode( $model->getCityList(nvl($data['cityId'],null)) ); };
		}
		return;
	}
}