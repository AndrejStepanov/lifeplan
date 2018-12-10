<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Auth;
use App\Events\DataInfo ;

class User extends Authenticatable{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
	protected $table = '_users';
    protected $primaryKey = 'id';
    protected $dates = [  'created_at', 'updated_at'];
    protected $fillable = [
        'id','login', 'firstname', 'lastname', 'password','name','token', 'storage','password','timestamps','email1','systemLanguage','user_system','avatar','bio','favoritCitys','favoritUnivs','favoritDist','favoritProfs','birthCity', 'birthDate', 'residenceCity'
    ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
	public  function getUserInfo($userId){
        $data =  $this->select('firstName','lastName','birthDate','residenceCity','bio','favoritCitys','favoritUnivs','favoritDist','favoritProfs','birthCity' )->where('id' ,'=',$userId)->get()->toArray();
        $data[0]['schls'] = (new Sch2user)->getSchByUser($userId);
        $data[0]['eges'] = (new Ege)->getVal($userId);
		return $data[0];
    }
	public  function saveUserInfo($todo){
        $this->where('id',Auth::user()->id )
            ->update(['FirstName' => $todo['firstName'], 'LastName' => $todo['lastName'], 'birthDate' => $todo['birthDate'],'birthCity' => $todo['birthCity'], 'residenceCity' => $todo['residenceCity'], 'bio' => $todo['bio'] ]);
    }
	public  function saveFavorits($data){
        $this->where('id',Auth::user()->id )
            ->update(['favoritCitys' => $data['todo']['favoritCitys'], 'favoritUnivs' => $data['todo']['favoritUnivs'], 'favoritDist' => $data['todo']['favoritDist'], 'favoritProfs' => $data['todo']['favoritProfs'] ]);
    }

    public  function isFavorite($spec_id){
        $is_my=false;
        if ($spec_id > 0){
	        $tmp=$this->where('id',Auth::user()->id )->select('favoritProfs')->get();
            $Profs=explode(",",$tmp[0]->favoritProfs);
            $specs=(new spec2prof())->getMySpec($Profs);
            foreach($specs as $spec){
                if ($spec_id == $spec->spec_id){
                    $is_my = true;
                    break;
                }
            }
        }
        return $is_my;
    }
    
}