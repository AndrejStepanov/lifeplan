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
use App\Models\Uni2Spec;
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
			case('search.universitys.list'):{  return json_encode( ( new University() )->getUniversitysForSearch() ); };
			case('search.specialtys.list'):{  return json_encode( ( new Specialty() )->getSpecialtysForSearch() ); };
			case('search.programs.list'):{  return json_encode( ( new Uni2Spec() )->getProgramsForSearch() ); };
			case('search.results'):{  return json_encode( ( new Uni2Spec() )->getSearchResult(createTodo($data) ) ); };
			default:{ throw new \App\Exceptions\KonsomException( 'Ошибка доступа','Нет доступа!'); };
		}
		return;
	}
}