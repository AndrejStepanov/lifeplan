<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Specialty extends Model{
    protected $table = '_specialty';
    protected $primaryKey = 'spec_id';
    protected $dates = [  'created_at', 'updated_at'];
    protected $fillable = ['updated_at', 'created_at', 'rate', 'specDesc', 'whoWork', 'specName', 'specGroup', 'specCode'];

    public function uni2specs()
    {
        return $this->hasMany('App\Models\Uni2Spec', 'spec_id','spec_id');
    }
    public function spec2profs()
    {
        return $this->hasMany('App\Models\spec2prof', 'spec_id','spec_id');
    }
    public  function getSpecialtysForSearch(){
		return  convertToAssArr ($this->select('spec_id','specDesc','specCode', 'specGroup', 'specName')->get()->toArray(),$this->primaryKey);
	}
    public  function getSpecialtyList(){
        $result = array();
        $specs = $this->select('spec_id', 'spec_id as specID', 'specGroup', 'specCode', 'specName', 'specDesc', 'whoWork', 'rate')->orderBy('rate', 'desc')->orderBy('specGroup')->get();
        $i=0;
        foreach ($specs as $spec) {
            $result[$i] = $spec->toArray();
            $result[$i]['prCnt']=$spec->uni2specs()->count();
            $result[$i]['uniCnt']=$spec->uni2specs()->distinct('unit_id')->count();
            $mySpec=(new match())->getMatchesAstro();
            $mySpec=(new match())->getMatchesTest();



            dd($mySpec);
            $result[$i]['proc']=rand(10.0,100.0);
            $i++;
        }
        return $result;
    }
}
