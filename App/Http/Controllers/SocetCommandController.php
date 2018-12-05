<?php

namespace App\Http\Controllers;

use App\Http\main_function;
use App\Models\User;
use App\Models\Citys;
use App\Models\Schools;
use Illuminate\Http\Request;

class SocetCommandController extends Controller{
	public function reciveCommand(Request $request){
		$data=$request->all();
		switch($data['type']){
			case('user.info.by.id'):{  return json_encode( (new User() )->getUserInfo(nvl($data['userId'],null)) ); };
			case('city.list'):{  return json_encode( ( new Citys() )->getCitysList() ); };
			case('school.list'):{  return json_encode( ( new Schools() )->getSchoolsList() ); };
			default:{ throw new \App\Exceptions\KonsomException( 'Ошибка доступа','Нет доступа!'); };
		}
		return;
	}
}