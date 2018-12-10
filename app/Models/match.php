<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class match extends Model
{
    protected $table = '_match';
    protected $primaryKey = 'mat_id';
    protected $dates = [  'created_at', 'updated_at'];
    protected $fillable = ['updated_at', 'created_at', 'user_id', 'prof_id', 'rate', 'type'];

    public function Profession()
    {
        return $this->belongsTo('App\Models\Profession', 'prof_id', 'prof_id');
    }

    public function spec2profs()
    {
        return $this->hasMany('App\Models\spec2prof', 'prof_id', 'prof_id');
    }
    public function getProfAstro()
    {
        return $this->where('user_id',Auth::user()->id)->where('type','astro')->get();
    }
    public function getProfTest()
    {
        return $this->where('user_id',Auth::user()->id)->where('type','test')->get();
    }
    /*Получить оценку по подходяшей специальности*/
    public function getSpecs($spec_id)
    {
        $result= array("astro"=>0, "test"=>0);
        $data=$this->join('_spec2prof', '_spec2prof.prof_id', '=', '_match.prof_id')
            ->where('_match.user_id',Auth::user()->id)
            ->where('_spec2prof.spec_id',$spec_id)
            ->select('_match.type','_match.rate')
            ->distinct()
            ->orderBy('type')
            ->get();

        if (isset($data[0])) $result[$data[0]->type]=$data[0]->rate;
        if (isset($data[1])) $result[$data[1]->type]=$data[1]->rate;

        return $result;
    }
}
