<?php

namespace App\Http\Controllers;

use App\Http\main_function;
use App\Models\Tree;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use App\Models\User;
use App\Models\Sch2user;
use App\Models\Ege;
use Auth\LoginController;
use Auth\RegisterController;

class DataCommandController extends Controller{
	public function reciveCommand(Request $request){
		$data=$request->all();
		switch($data['type']){
			case('user.info.save'):{return (new User())->saveUserInfo(createTodo(nvl($data,null)));  };	
			case('user.sch.save'):{return (new Sch2user())->saveSchLink(createArrTodo(nvl($data,null)));  };		
			case('user.ege.save'):{return (new Ege())->saveEge(nvl($data,null));  };		
			case('user.favorits.save'):{return (new User())->saveFavorits(nvl($data,null));  };		
			default:{ throw new \App\Exceptions\KonsomException( 'Ошибка доступа','Нет доступа!'); };
		}
		
		return;
	}
}