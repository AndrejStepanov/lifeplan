<?php

namespace App\Models;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class Uni2Spec extends Model{
	protected $table = '_uni2spec';
	protected $primaryKey = 'rec_id';
	protected $dates = [  'created_at', 'updated_at'];
	protected $fillable = ['rec_id', 'uni_id', 'spec_id', 'updated_at', 'created_at', 'priceYear', 'req1', 'req2', 'req3', 'req4', 'req5', 'qtyYears', 'qtyBudgets', 'totalBall', 'faculty', 'programmName', 'formStudy'];

	public  function getProgramsForSearch(){
		return  convertToAssArr ( $this->select('rec_id','uni_id','spec_id', 'priceYear', 'qtyYears', 'qtyBudgets', 'totalBall', 'faculty', 'programmName', 'formStudy', 'req1', 'req2', 'req3', 'req4', 'req5')->get()->toArray() ,$this->primaryKey);
	}

	public  function getSearchResult($todo){
		return  DB::select("select rec_id, 0 psyTest,0 astroTest, 0 totalTest FROM _uni2spec");
	}

}