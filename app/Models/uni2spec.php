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

    public  function getProgramToSpec(){
        $result = array();
        $specs = $this->select('spec_id', 'uni_id', 'rec_id', 'totalBall', 'priceYear', 'qtyBudgets')->get();
       // $q1=0; $q2=0; $q3=0;
        $is_uni=array();
        foreach ($specs as $spec) {
            $result[$spec->spec_id]['qty']=((isset($result[$spec->spec_id]['qty']))?$result[$spec->spec_id]['qty']:0)+1;
           // if ($spec->totalBall!="" && $spec->totalBall>0) {   $result[$spec->spec_id]['totalBall']=((isset($result[$spec->spec_id]['totalBall']))?$result[$spec->spec_id]['totalBall']:0)+$spec->totalBall; $q1++;}
           // if ($spec->priceYear!="" && $spec->priceYear>0) {   $result[$spec->spec_id]['priceYear']=((isset($result[$spec->spec_id]['priceYear']))?$result[$spec->spec_id]['priceYear']:0)+$spec->priceYear; $q2++;}
           // if ($spec->qtyBudgets!="" && $spec->qtyBudgets>0){  $result[$spec->spec_id]['qtyBudgets']=((isset($result[$spec->spec_id]['qtyBudgets']))?$result[$spec->spec_id]['qtyBudgets']:0)+$spec->qtyBudgets; $q3++;}
            if ($spec->uni_id!="" && (!isset($is_uni[$spec->spec_id]) || !in_array($spec->uni_id,$is_uni[$spec->spec_id]))){
                $result[$spec->spec_id]['qtyUni']=((isset($result[$spec->spec_id]['qtyUni']))?$result[$spec->spec_id]['qtyUni']:0)+1;
                $is_uni[$spec->spec_id][]=$spec->uni_id;
            }
        }

        return $result;
    }

    public  function getSearchResult($todo){
		return  DB::select("select rec_id, 0 psyTest,0 astroTest, 0 totalTest FROM _uni2spec");
	}
    public function Specialty()
    {
        return $this->belongsTo('App\Models\Specialty','spec_id');
    }
    public function University()
    {
        return $this->belongsTo('App\Models\university', 'uni_id');
    }
}
