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
		//dd($todo);
		$query=$this::whereHas('University', function($q) use ($todo) {
				if(isset($todo['vuzStudentQty']))
					$q->whereBetween('qtyStudents', [$todo['vuzStudentQty'][0][0]*1000, $todo['vuzStudentQty'][0][1]*1000]);
				if(isset($todo['vuzIsFilial']))
					$q->where('isSub', $todo['vuzIsFilial']);
				if(isset($todo['vuzAccrTime']))
					$q->whereBetween('dateAccreditation', [date('Y-m-d', strtotime('+'.$todo['vuzAccrTime'][0][0].' years')), date('Y-m-d', strtotime('+'.$todo['vuzAccrTime'][0][1].' years'))]);
				if(isset($todo['vuzIsGos']))
					$q->where('isState', $todo['vuzIsGos']);
				if(isset($todo['vuzMyl']))
					$q->where('isMilitary', $todo['vuzMyl']);
				if(isset($todo['vuzHotel']))
					$q->where('isHostel', $todo['vuzHotel']);
				if(isset($todo['vusPlace']))
					$q->whereBetween('ratePlace', $todo['vusPlace'][0]);
				if(isset($todo['vusRating']))
					$q->whereBetween('rate', $todo['vusRating'][0]);			
			})->whereHas('University.city', function($q) use ($todo) {
				if(isset($todo['locCity']))
					$q->where('city_id', $todo['locCity']);	
			})->whereHas('Specialty', function($q) use ($todo) {
				if(isset($todo['edSpecalisation']))
					$q->whereIn('specGroup', $todo['edSpecalisation']);	
			});
			if(isset($todo['edSpecialty']))
				 $query->whereIn('spec_id', $todo['edSpecialty']);	
			if(isset($todo['edForm']))
				 $query->whereIn('formStudy', $todo['edForm']);	
			if(isset($todo['edCost']))
				 $query->whereBetween('priceYear', [$todo['edCost'][0][0]*1000, $todo['edCost'][0][1]*1000] );	
			if(isset($todo['eduIsBudget']))
				if($todo['eduIsBudget']>0)
				 	$query->where('qtyBudgets','>','0');	
				else
					$query->whereNull('qtyBudgets');
			return $query->select('rec_id')->selectRaw('0 as psyTest, 0 as  astroTest, 0 as  totalTest')->orderBy('totalTest')->get()->toArray();
	}
    public function Specialty(){
        return $this->belongsTo('App\Models\Specialty','spec_id');
    }
    public function University(){
        return $this->belongsTo('App\Models\university', 'uni_id');
    }
}
