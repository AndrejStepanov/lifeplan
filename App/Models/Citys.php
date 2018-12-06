<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Events\DataInfo ;
class Citys extends Model{

	protected $table = '_cities';
	protected $primaryKey = 'city_id';
	protected $dates = [  'created_at', 'updated_at'];

	protected $fillable = ['city_id','region','area','type','city_name','pos_lon','pos_lat'];

	public  function getCitysList(){
		return  $this->select('city_id as value','city_name as text' )->orderBy('city_name')->get()->toArray();
	}
}
?>