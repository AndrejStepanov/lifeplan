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

    public function Profession()    {
        return $this->belongsTo('App\Models\Profession', 'prof_id', 'prof_id');
    }
    public function spec2profs()
    {
        return $this->hasMany('App\Models\spec2prof', 'prof_id', 'prof_id');
    }
    public function getProfAstro()    {
        return $this->where('user_id',Auth::user()->id)->where('type','astro')->get();
    }
    public function getProfTest()    {
        return $this->where('user_id',Auth::user()->id)->where('type','test')->get();
    }
    /*Получить оценку по подходяшей специальности*/
    public function getSpecs()
    {
        $result=array();
        $data=$this->Join('_spec2prof', '_spec2prof.prof_id', '=', '_match.prof_id')
            ->where('_match.user_id',Auth::user()->id)
            ->select('_spec2prof.spec_id','_match.type','_match.rate')
            ->orderBy('type')
            ->get();
        foreach ($data as $d) {
            $result[$d->spec_id][$d->type]=$d->rate;
        }
        $data=$this->where('user_id',Auth::user()->id)->whereNotNull('spec_id')->select('spec_id','rate')->get();
        foreach ($data as $d) {
            $result[$d->spec_id]['user']=$d->rate;
        }
        return $result;
    }
    /*Сохранить оценку пользователя по специальности*/
    public function setUserRate($specID, $Rate)
    {
        $match = $this->firstOrNew(array('spec_id' => $specID, 'user_id' => Auth::user()->id));
        $match->rate = $Rate;
        $match->spec_id = $specID;
        $match->user_id = Auth::user()->id;
        $match->type = 'user';
        $match->save();
    }
    /*Сохранить результат психотеста по профессии*/
    public function setTestRate($profID, $Rate)
    {
        $match = $this->firstOrNew(array('prof_id' => $profID, 'user_id' => Auth::user()->id));
        /*Усредняем оценку, если ранее уже была*/
        $prev_rate = $match->rate;
        if ($prev_rate!=""){
            $Rate = round(($Rate+$prev_rate)/2,0);
        }
        /**/
        $match->rate = $Rate;
        $match->prof_id = $profID;
        $match->user_id = Auth::user()->id;
        $match->type = 'test';
        $match->save();
    }
}
