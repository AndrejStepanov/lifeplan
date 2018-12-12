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

    public  function getSpecialtyList($profID){
        $result = array();
        if ($profID && $profID!="") {
            $specs = $this->select('_specialty.spec_id', '_specialty.spec_id as specID', 'specGroup', 'specCode', 'specName', 'specDesc', 'whoWork', 'rate')
                ->join('_spec2prof', '_spec2prof.spec_id', '=', '_specialty.spec_id')
                ->where('_specialty.specGroup', 'Бакалавриат')
                ->where('_spec2prof.prof_id', $profID)
                ->orderBy('rate', 'desc')->orderBy('specGroup')
                ->get();
        }else {
            $specs = $this->select('spec_id', 'spec_id as specID', 'specGroup', 'specCode', 'specName', 'specDesc', 'whoWork', 'rate')
                ->where('specGroup', 'Бакалавриат')
                ->orderBy('rate', 'desc')->orderBy('specGroup')
                ->get();
        }

        $i=0;
        $max_rate=100;
        $SysRate=(new match())->getSpecs();
        $UniSpecs=(new Uni2Spec())->getProgramToSpec();
        foreach ($specs as $spec) {
            $rate=((isset($SysRate[$spec->spec_id]['astro']) && $SysRate[$spec->spec_id]['astro']!="")?$SysRate[$spec->spec_id]['astro']*2:0)
                + ((isset($SysRate[$spec->spec_id]['test']) && $SysRate[$spec->spec_id]['test']!="")?$SysRate[$spec->spec_id]['test']*4:0);
                //+ ((isset($SysRate[$spec->spec_id]['user']) && $SysRate[$spec->spec_id]['user']!="")?$SysRate[$spec->spec_id]['user']*20:0) ;

            $result[$i] = $spec->toArray();
            $result[$i]['prCnt']=((isset($UniSpecs[$spec->spec_id]['qty']))?$UniSpecs[$spec->spec_id]['qty']:0);
            $result[$i]['uniCnt']=((isset($UniSpecs[$spec->spec_id]['qtyUni']))?$UniSpecs[$spec->spec_id]['qtyUni']:0);
            $result[$i]['proc']=$rate;
            $result[$i]['userRate']=((isset($SysRate[$spec->spec_id]['user']) && $SysRate[$spec->spec_id]['user']!="")?$SysRate[$spec->spec_id]['user']:0);
            if ($result[$i]['proc']>$max_rate) $max_rate=$result[$i]['proc'];
            $i++;
        }
        /*Приводим результат к процентам*/
        if ($max_rate<>0) {
            $kol=sizeof($result);
            for ($i=0;$i<$kol;$i++){
                $result[$i]['proc']=round(($result[$i]['proc']*100)/$max_rate,1);
            }
        }
        return $result;
    }
}
