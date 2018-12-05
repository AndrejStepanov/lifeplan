<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Events\DataInfo ;
class Sch2user extends Model{

	protected $table = '_sch2user';
	protected $primaryKey = 'rec_id';
	protected $dates = [  'created_at', 'updated_at', 'date_st', 'date_fn',];

	protected $fillable = ['date_st', 'date_fn','user_id', 'sch_id'];

	public  function getSchByUser($userId){
		return  $this->select('rec_id as id','sch_id as schId','date_st as dateSt','date_fn as dateFn' )->where('user_id' ,'=',$userId)->orderBy('date_st')->get()->toArray();
	}

}
?>