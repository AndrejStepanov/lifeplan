<?php

namespace App\Http\Controllers;

use App\Http\main_function;
use App\Models\User;
use App\Models\Citys;
use App\Models\Schools;
use App\Models\Predmets;
use App\Models\University;
use App\Models\Profession;
use App\Models\Specialty;
use Illuminate\Http\Request;

class SocetCommandController extends Controller{
	public function reciveCommand(Request $request){
		$data=$request->all();
		switch($data['type']){
			case('user.info.by.id'):{  return json_encode( (new User() )->getUserInfo(nvl($data['userId'],null)) ); };
			case('city.list'):{  return json_encode( ( new Citys() )->getCitysList() ); };
			case('school.list'):{  return json_encode( ( new Schools() )->getSchoolsList() ); };
			case('predmets.list'):{  return json_encode( ( new Predmets() )->getPredmetsList() ); };
			case('universitys.list'):{  return json_encode( ( new University() )->getUniversitysList() ); };
			case('profs.list'):{  return json_encode( ( new Profession() )->getProfessionsList() ); };
			case('universitys.search.list'):{  return json_encode( ( new University() )->getUniversitysForSearch() ); };
			case('specialtys.search.list'):{  return json_encode( ( new Specialty() )->geSpecialtysForSearch() ); };
			default:{ throw new \App\Exceptions\KonsomException( 'Ошибка доступа','Нет доступа!'); };
		}
		return;
	}
}