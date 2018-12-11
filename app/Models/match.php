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
<<<<<<< HEAD

    public function spec2profs()    {
=======
    public function spec2profs()
    {
>>>>>>> Заключительная версия по специальностям
        return $this->hasMany('App\Models\spec2prof', 'prof_id', 'prof_id');
    }
    public function getProfAstro()    {
        return $this->where('user_id',Auth::user()->id)->where('type','astro')->get();
    }
    public function getProfTest()    {
        return $this->where('user_id',Auth::user()->id)->where('type','test')->get();
    }
    /*Получить оценку по подходяшей специальности*/
<<<<<<< HEAD
    public function getSpecs($spec_id)    {
        $result= array("astro"=>0, "test"=>0, "user"=>0);
=======
    public function getSpecs()
    {
        $result=array();
>>>>>>> Заключительная версия по специальностям
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
    /*Сохранить оценку*/
    public function setUserRate($specID, $Rate)
    {
        $match = $this->firstOrNew(array('spec_id' => $specID, 'user_id' => Auth::user()->id));
        $match->rate = $Rate;
        $match->spec_id = $specID;
        $match->user_id = Auth::user()->id;
        $match->type = 'user';
        $match->save();
    }
}
