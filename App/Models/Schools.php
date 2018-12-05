<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Events\DataInfo ;
class Schools extends Model{

	protected $table = '_schools';
	protected $primaryKey = 'sch_id';
	protected $dates = [  'created_at', 'updated_at'];

	protected $fillable = ['city_id','school_type','school_name','school_rate',];

	public  function getSchoolsList(){
		return  $this->select('sch_id as value','school_name as text', 'city_id as cityId' )->orderBy('school_name')->get()->toArray();
	}													

}
?>