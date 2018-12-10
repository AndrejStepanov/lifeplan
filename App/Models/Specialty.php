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
        $max_rate=100;
        foreach ($specs as $spec) {
            $SysRate=(new match())->getSpecs($spec->spec_id);
            $rate=$SysRate['astro']*2 + $SysRate['test']*5 + (((new User())->isFavorite($spec->spec_id))?100:0);

            $result[$i] = $spec->toArray();
            $result[$i]['prCnt']=$spec->uni2specs()->count();
            $result[$i]['uniCnt']=$spec->uni2specs()->distinct('unit_id')->count();
            $result[$i]['proc']=$rate;
            $result[$i]['userRate']=$SysRate['user'];
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
