<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Events\DataInfo ;
use Illuminate\Support\Facades\Auth;
class Sch2user extends Model{

	protected $table = '_sch2user';
	protected $primaryKey = 'rec_id';
	protected $dates = [  'created_at', 'updated_at', 'date_st', 'date_fn',];

	protected $fillable = ['date_st', 'date_fn','user_id', 'sch_id'];

	public  function getSchByUser($userId){
		return  $this->select('rec_id as id','sch_id as schId','date_st as dateSt','date_fn as dateFn' )->where('user_id' ,'=',$userId)->orderBy('date_st')->get()->toArray();
	}
	public  function saveSchLink($data){
		$this->where('user_id' ,'=', Auth::user()->id)->delete();
		foreach($data as $row)
			$this::create([
				'user_id' => Auth::user()->id,
				'sch_id' => $row['sch'],
				'date_st' => $row['dates'][0][0],
				'date_fn' => $row['dates'][0][1],
				'created_at' =>date("Y-m-d H:i:s", time()),
			]);
	}

}
?>