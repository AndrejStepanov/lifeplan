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
        'id','login', 'firstname', 'lastname', 'password','name','token', 'storage','password','timestamps','email1','systemLanguage','user_system','avatar','bio','favoritCitys','favoritUnivs','favoritDist','favoritProfs',    
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
        $data =  $this->select('firstName','lastName','birth_date as birthDate','residence_city as residenceCity','bio','favoritCitys','favoritUnivs','favoritDist','favoritProfs' )->where('id' ,'=',$userId)->get()->toArray();
        $data[0]['schls'] = (new Sch2user)->getSchByUser($userId);
        $data[0]['eges'] = (new Ege)->getVal($userId);
		return $data[0];
    }
	public  function saveUserInfo($todo){
        $this->where('id',Auth::user()->id )
            ->update(['FirstName' => $todo['firstName'], 'LastName' => $todo['lastName'], 'birth_date' => $todo['birthDate'], 'residence_city' => $todo['residenceCity'], 'Bio' => $todo['bio'] ]);
    }
	public  function saveFavorits($data){
        $this->where('id',Auth::user()->id )
            ->update(['favoritCitys' => $data['todo']['favoritCitys'], 'favoritUnivs' => $data['todo']['favoritUnivs'], 'favoritDist' => $data['todo']['favoritDist'], 'favoritProfs' => $data['todo']['favoritProfs'] ]);
    }
    
}